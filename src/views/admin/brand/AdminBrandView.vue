<template>
  <div>
    <div class="product-header">
      <h1>Danh sách thương hiệu</h1>
      <div class="m-admin-product-action-add button-show-modal" id="one">
        <button class="btn btn-outline-primary" @click="modalAdd">
          Thêm thương hiệu
        </button>
      </div>
    </div>
    <div class="between:flex bottom:margin-3">
      <div class="center:flex-items">
        <span class="right:margin-1">Hiển thị</span>

        <select
          v-model="currentEntries"
          class="select"
          @change="paginateEntries"
          style="width: 5rem"
        >
          <option v-for="se in showEntries" :key="se" :value="se">
            {{ se }}
          </option>
        </select>
        <span class="left:margin-1">mục</span>
      </div>
      <div class="end:flex">
        <input
          type="search"
          class="input px:width-25"
          placeholder="Tìm kiếm tại đấy..."
          v-model="searchInput"
          @keyup="searchEvent"
        />
      </div>
    </div>
    <div>
      <!-- <TalbeBase :columns="columns" :entries="filteredEntries"/> -->
      <table class="table table:border secondary-5:border">
        <thead>
          <tr>
            <th v-for="th in tableHeader" :key="th.name">
              <div class="between:flex center:items">
                <span>{{ th.text }}</span>
              </div>
            </th>
          </tr>
        </thead>
        <!-- content -->
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>{{ index + 1 }}</td>
            <td>{{ td.brandName }}</td>
            <td class="text-center">
              <img
                :src="td.icon"
                alt=""
                srcset=""
                style="object-fit: contain"
                width="50px"
                height="50px"
              />
            </td>
            <td>{{ td.content }}</td>
            <td>
              <el-switch v-model="td.boolActive" @change="updateStatus(td.id)">
              </el-switch>
            </td>
            <td>
              <div class="action">
                <div
                  class="m-product-cart-button-clear m-admin-product-action-add button-show-modal"
                  id="one"
                >
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="ModalEdit(td)"
                  >
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="between:flex y:margin-3">
      <div>
        Hiển thị từ {{ showInfo.from }} đến {{ showInfo.to }} /
        {{ showInfo.of }}
      </div>
      <!-- end -->
      <div class="end:flex">
        <ul class="pagination:nav">
          <li :class="['nav-item', { disabled: currentPage === 1 }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="(currentPage = 1), paginateEntries()"
              ><font-awesome-icon icon="fa-solid fa-angles-left"
            /></a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === 1 }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="
                currentPage < 1 ? (currentPage = 1) : (currentPage -= 1),
                  paginateEntries()
              "
              ><font-awesome-icon icon="fa-solid fa-angle-left"
            /></a>
          </li>
          <li
            v-for="pagi in showPagination"
            :key="pagi"
            :class="[
              'nav-item',
              { ellipsis: pagi === '...', active: pagi === currentPage },
            ]"
          >
            <a href="#" class="nav-link" @click.prevent="paginateEvent(pagi)">{{
              pagi
            }}</a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === allPages }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="
                currentPage > allPages
                  ? (currentPage = allPages)
                  : (currentPage += 1),
                  paginateEntries()
              "
              ><font-awesome-icon icon="fa-solid fa-angle-right"
            /></a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === allPages }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="(currentPage = allPages), paginateEntries()"
              ><font-awesome-icon icon="fa-solid fa-angles-right"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- thêm thương hiệu -->
    <el-dialog
      title="Thêm thương hiệu"
      :visible.sync="dialogFormVisible"
      width="60%"
    >
      <form id="m-form-admin-add-product" @submit.prevent="updateBrand">
        <div class="container">
          <div class="row">
            <div class="form-group col-6 form-group-customer">
              <label for="staff">Tên thương hiệu</label>
              <input
                type="text"
                class="form-control"
                id="brandName"
                name="brandName"
                v-model.trim="$v.brand.brandName.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.brand.brandName.required"
              >
                Vui lòng nhập tên thương hiệu
              </div>
            </div>
            <div class="form-group col-6 form-group-customer">
              <div class="form-group col-6 text-center">
                <label for="m-file-img" v-if="brand.id != null">
                  <img
                    :src="displayImage"
                    alt=""
                    srcset=""
                    height="200px"
                    id="m-img-parent"
                    style="object-fit: contain"
                  />
                </label>

                <label for="m-file-img" v-if="brand.id == null">
                  <img
                    :src="displayImage"
                    alt=""
                    srcset=""
                    height="200px"
                    id="m-img-parent"
                    style="object-fit: contain"
                  />
                </label>
                <input
                  type="file"
                  id="m-file-img"
                  ref="fileInput"
                  @change="addImg"
                  hidden
                  accept="image/png, image/jpeg, image/webp"
                />
              </div>
              <div class="error" v-if="submitted && !brand.id && !imgChange">
                Vui lòng chọn hình ảnh thương hiệu
              </div>
            </div>
            <div class="col-12 d-flex">
              <label>Vui Lòng chọn kích hoạt:</label>
              <div class="d-flex">
                <div class="p-2">
                  <input
                    type="radio"
                    name="active"
                    id="yes"
                    value="1"
                    v-model.trim="$v.brand.status.$model"
                  />
                  <label for="yes">Có</label>
                </div>
                <div class="p-2">
                  <input
                    type="radio"
                    name="active"
                    id="no"
                    value="-1"
                    v-model.trim="$v.brand.status.$model"
                  />
                  <label for="no">Không</label>
                </div>
              </div>
              <div class="error" v-if="submitted && !$v.brand.status.required">
                Vui lòng chọn hoạt động
              </div>
            </div>

            <div class="form-group col-12 form-group-customer">
              <label for="note">Nội dung</label>
              <textarea
                name="content"
                id="content"
                class="form-control"
                rows="5"
                v-model.trim="$v.brand.content.$model"
              ></textarea>
              <div class="error" v-if="submitted && !$v.brand.content.required">
                Nội dung không thể để trống
              </div>
            </div>
          </div>
        </div>

        <span slot="footer" class="dialog-footer d-flex justify-content-end">
          <button
            type="submit"
            class="btn btn-outline-primary"
            v-loading.fullscreen.lock="fullscreenLoading"
          >
            Áp dụng
          </button>
          <button
            v-if="brand.id != null"
            type="button"
            @click="isDeleteBrand(brand.brandName)"
            class="btn btn-outline-primary ml-2"
            v-loading.fullscreen.lock="fullscreenLoading"
          >
            Xóa thương hiệu
          </button>
          <!-- <button
            type="button"
            @click="noUpdate()"
            class="btn btn-outline-primary ml-2"
          >
            Quay lại
          </button> -->
        </span>
      </form>
    </el-dialog>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";

import {
  getAllBrandAdmin,
  addBrand,
  editBrand,
  updateStatusBrand,
  deleteBrand,
} from "@/service/admin/brand.js";
import { required } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
export default {
  name: "AdminProduct",
  mixins: [validationMixin],
  components: {
    // TalbeBase,
  },
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "brandName", text: "Tên thương hiệu" },
        { name: "icon", text: "icon" },
        { name: "content", text: "Nội dung" },
        { name: "status", text: "Trạng thái" },
        { name: "#", text: "Hành động" },
      ],
      entries: [],
      showEntries: [5, 10, 15, 25, 50, 72, 100],
      currentEntries: 10,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: "",
      searchEntries: [],
      col: {
        id: null,
        brandName: "",
        status: "",
        content: "",
        icon: "",
      },
      sortcol: {
        id: null,
        brandName: "",
        status: "",
        content: "",
        icon: "",
      },
      check: null,
      submitted: false,
      //   thay đổi
      dialogFormVisible: false,
      fullscreenLoading: false,
      brand: {
        id: null,
        brandName: "",
        status: "",
        content: "",
        icon: "",
      },
      imgChange: null,
      imgShow: null,
    };
  },
  validations: {
    brand: {
      brandName: {
        required,
      },
      status: {
        required,
      },
      content: {
        required,
      },
    },
  },
  computed: {
    showInfo() {
      return $array.show(
        this.getCurrentEntries(),
        this.currentPage,
        this.currentEntries
      );
    },
    showPagination() {
      return $array.pagination(this.allPages, this.currentPage, 2);
    },
    tableHeader() {
      return this.columns;
    },
    tableData() {
      return this.filteredEntries;
    },
    displayImage() {
      if (this.imgChange) {
        return this.imgShow;
      } else if (!this.imgChange && this.brand.icon) {
        return this.brand.icon;
      } else {
        return require("@/assets/img/img-default.png");
      }
    },
  },
  created() {
    getAllBrandAdmin().then((res) => {
      this.entries = res;
      this.paginateData(this.entries);
    });
  },
  methods: {
    paginateEntries() {
      if (this.searchInput.length > 0) {
        this.searchEntries = $array.search(this.entries, this.searchInput);
        this.paginateData(this.searchEntries);
      } else {
        this.searchEntries = [];
        this.paginateData(this.entries);
        this.col = {
          id: null,
          brandName: "",
          status: "",
          content: "",
          icon: "",
        };
      }
    },
    paginateEvent(page) {
      this.currentPage = page;
      this.paginateEntries();
    },
    searchEvent() {
      (this.currentPage = 1), this.paginateEntries();
    },
    paginateData(data) {
      this.filteredEntries = $array.paginate(
        data,
        this.currentPage,
        this.currentEntries
      );
      this.allPages = $array.pages(data, this.currentEntries);
    },
    getCurrentEntries() {
      return this.searchInput.length <= 0 ? this.entries : this.searchEntries;
    },
    uniqColumData(column) {
      return $array.unique(this.getCurrentEntries(), column);
    },
    filterByColumn() {
      const filterCol = $object.removeBy(this.col, "");

      let filterData = this.getCurrentEntries();
      if (Object.entries(filterCol).length >= 1) {
        filterData = $array.filtered(this.getCurrentEntries(), filterCol);
      }
      this.paginateData(filterData);
    },
    sortByColumn(column) {
      this.col = {
        id: null,
        brandName: "",
        status: "",
        content: "",
        icon: "",
      };
      let sortedEntries = this.getCurrentEntries();
      let sortedByColumn = this.sortcol[column];
      if (sortedByColumn === "") {
        this.sortcol[column] = "asc";
        sortedEntries = $array.sorted(this.getCurrentEntries(), column, "asc");
        this.check = false;
      } else if (sortedByColumn === "asc") {
        this.sortcol[column] = "desc";
        sortedEntries = $array.sorted(this.getCurrentEntries(), column, "desc");
        this.check = true;
      } else if (sortedByColumn === "desc") {
        this.sortcol[column] = "";
        this.check = null;
      }
      this.paginateData(sortedEntries);
    },
    // thay doi
    modalAdd() {
      this.submitted = false;
      this.$v.$reset();
      this.brand = {
        id: null,
        brandName: "",
        status: "",
        content: "",
        icon: "",
      };
      this.imgChange = null;
      this.dialogFormVisible = true;
    },
    ModalEdit(brand) {
      this.submitted = false;
      this.$v.$reset();
      this.brand = { ...brand };
      this.imgChange = null;
      this.dialogFormVisible = true;
    },

    updateStatus(id) {
      let self = this;
      updateStatusBrand(id)
        .then((res) => {
          // Tìm vị trí của brand trong Entities
          const index = self.entries.findIndex((item) => item.id === id);
          // // Gán lại giá trị đã cập nhật cho Entities
          if (index !== -1) {
            self.entries[index].status = res.data.status;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // add brand
    updateBrand(e) {
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid || (!this.brand.id && !this.imgChange)) {
        console.log("error validate");
      } else {
        let form = new FormData();

        // Chỉ cập nhật icon nếu người dùng đã chọn ảnh mới
        if (this.imgChange !== null) {
          this.brand.icon = this.imgChange;
        } else if (this.imgChange === null && this.brand.icon !== "") {
          // Nếu không chọn ảnh mới
          delete this.brand.icon;
        }

        let listKeys = Object.keys(this.brand);
        listKeys.forEach((e) => {
          form.append(e, this.brand[e]);
        });
        // console.log("Form Data:");
        // for (let pair of form.entries()) {
        //   console.log(pair[0] + ": " + pair[1]);
        // }
        if (this.brand.id == null) {
          form.delete("id");
          this.apiAddBrand(form);
        } else {
          this.apiEditBrand(form);
        }
      }
    },
    apiAddBrand(form) {
      let self = this;
      // let data = JSON.stringify(this.brand);
      self.fullscreenLoading = true;
      addBrand(form)
        .then((res) => {
          this.entries.push(res.data);
          this.paginateData(this.entries);
          self.$swal("Thành công", res.message, "success").then(function () {});
          this.submitted = false;
          self.dialogFormVisible = false;
          self.fullscreenLoading = false;
        })
        .catch((err) => {
          console.log(err.response.data);
          self.fullscreenLoading = false;
          self.$swal({
            customClass: {
              container: "my-swal",
            },
            icon: "error",
            title: "Lỗi",
            html: `Tên thương hiệu <strong>${err.response.data.data}</strong> đã tồn tại!`,
          });
        });
    },
    apiEditBrand(form) {
      let self = this;
      // let data = JSON.stringify(this.brand);
      self.fullscreenLoading = true;
      editBrand(form)
        .then((res) => {
          // Tìm vị trí của brand trong Entities
          const index = self.entries.findIndex(
            (item) => item.id === res.data.id
          );
          // // Gán lại giá trị đã cập nhật cho Entities
          if (index !== -1) {
            self.entries[index] = res.data;
            self.paginateData(self.entries);
          }
          this.brand = {
            id: null,
            brandName: "",
            status: "",
            content: "",
            icon: "",
          };
          this.submitted = false;
          self.dialogFormVisible = false;
          self.fullscreenLoading = false;
          self.$swal("Thành công", res.message, "success").then(function () {});
        })
        .catch((err) => {
          console.log(err.response.data);
          self.fullscreenLoading = false;
          self.$swal({
            customClass: {
              container: "my-swal",
            },
            icon: "error",
            title: "Lỗi",
            html: `Thương hiệu <strong>${err.response.data.data}</strong> đã tồn tại!`,
          });
        });
    },
    // Xóa thương hiệu
    isDeleteBrand(brandName) {
      let self = this;
      (this.dialogFormVisible = false),
        self
          .$swal({
            icon: "warning",
            title: "Warning",
            html: `Bạn có chắc muốn xóa thương hiệu <strong>${brandName}</strong>`,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Xóa thương hiệu",
          })
          .then((result) => {
            if (result.isConfirmed) {
              self.dialogFormVisible = false;
              self.fullscreenLoading = true;
              let index = self.entries.findIndex(
                (entry) => entry.id === self.brand.id
              );
              if (index !== -1) {
                deleteBrand(this.brand.id)
                  .then((res) => {
                    self.$delete(self.entries, index);
                    self.paginateEntries();
                    self.$swal({
                      icon: "success",
                      title: "Thành công",
                      text: res.data,
                      timer: 1500,
                    });
                    self.fullscreenLoading = false;
                  })
                  .catch((e) => {
                    console.error(e);
                    self.fullscreenLoading = false;
                    self.$swal({
                      icon: "error",
                      title: "Failed",
                      text: "Xóa thương hiệu thất bại!",
                      timer: 1500,
                    });
                  });
              }
            }
          });
    },
    addImg(e) {
      let readerFile = new FileReader();
      let files = e.target.files;
      if (files.length > 0) {
        this.imgChange = files[0];
        readerFile.readAsDataURL(files[0]);
        readerFile.onload = async () => {
          this.imgShow = await readerFile.result;
        };
      } else {
        return;
      }
      this.$refs.fileInput.value = "";
    },

    noUpdate() {
      this.dialogFormVisible = false;
      this.imgChange = null;
      console.log(this.brand);
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
@import url("@/assets/css/modal.css");
@import url("@/assets/css/admin-product-receipt.css");
.product-header {
  text-align: center;
}
.action {
  display: flex;
  justify-content: center;
}
.action > div {
  padding: 0 0.4rem;
}
.table-value {
  text-align: center;
}

/* customer modal */
.header-modal-customer {
  position: relative;
}

.button-show-modal-out {
  position: absolute;
  left: 100%;
  bottom: 100%;
  transform: translate(-50%, -50%);
}

.m-admin-product-action-search > form > input {
  width: 30rem;
  height: 3.1rem;
  border: 1px solid rgba(129, 127, 127, 0.329);
  padding: 1rem;
}
</style>
