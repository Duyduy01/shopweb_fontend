<template>
  <div>
    <div class="product-header">
      <h1>Danh sách danh mục sản phẩm</h1>
      <div class="m-admin-product-action-add button-show-modal" id="one">
        <button class="btn btn-outline-primary" @click="modalAdd">
          Thêm danh mục sản phẩm
        </button>
      </div>
    </div>

    <el-tabs type="card" @tab-click="handleClick" v-model="categoryIndex">
      <el-tab-pane v-for="e in cateParent" :key="e.id" :label="e.categoryName">
        <div class="text-center mb-5"><h4>Danh mục sản phẩm cha</h4></div>
        <div>
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
            <tbody>
              <tr>
                <td>{{ 1 }}</td>
                <td>{{ e.categoryName }}</td>
                <td>{{ e.content }}</td>
                <td></td>
                <td>
                  <el-switch
                    v-model="e.boolActive"
                    @change="calApiUpdateStatus(e.id)"
                  >
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
                        @click="modalEdit(e)"
                      >
                        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
        <div class="text-center mt-5">
          <h4>Danh sách danh mục sản phẩm con</h4>
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
                <td>{{ td.categoryName }}</td>
                <td>{{ td.content }}</td>
                <td>{{ e.categoryName }}</td>
                <td>
                  <el-switch
                    v-model="td.boolActive"
                    @change="calApiUpdateStatus(td.id)"
                  >
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
                        @click="modalEdit(td)"
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
                <a
                  href="#"
                  class="nav-link"
                  @click.prevent="paginateEvent(pagi)"
                  >{{ pagi }}</a
                >
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
      </el-tab-pane>
    </el-tabs>

    <!-- thêm danh mục sản phẩm -->
    <el-dialog
      title="Cập nhập danh mục sản phẩm"
      :visible.sync="dialogFormVisible"
      width="60%"
    >
      <form id="m-form-admin-add-product" @submit.prevent="updateCate">
        <div class="container">
          <div class="row">
            <!-- cate name -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Tên danh mục sản phẩm</label>
              <input
                type="text"
                class="form-control"
                id="categoryName"
                name="categoryName"
                v-model.trim="$v.category.categoryName.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.category.categoryName.required"
              >
                Vui lòng nhập tên danh mục sản phẩm
              </div>
            </div>
            <!-- parent cate -->
            <div class="col-6 form-group-customer">
              <label for="parent">Danh mục sản phẩm cha</label>
              <select
                name="parentId"
                id="parent"
                class="form-control"
                v-model.trim="category.parentId"
                :disabled="category.parentId == null"
              >
                <option value="0" selected>Chọn sản phẩm cha</option>
                <option :value="e.id" v-for="e in listParentCate" :key="e.id">
                  {{ e.categoryName }}
                </option>
              </select>
            </div>
            <!-- status -->
            <div class="col-12 d-flex">
              <label>Vui Lòng chọn kích hoạt:</label>
              <div class="d-flex">
                <div class="p-2">
                  <input
                    type="radio"
                    name="active"
                    id="yes"
                    value="1"
                    v-model.trim="$v.category.status.$model"
                  />
                  <label for="yes">Có</label>
                </div>
                <div class="p-2">
                  <input
                    type="radio"
                    name="active"
                    id="no"
                    value="-1"
                    v-model.trim="$v.category.status.$model"
                  />
                  <label for="no">Không</label>
                </div>
              </div>
              <div
                class="error"
                v-if="submitted && !$v.category.status.required"
              >
                Vui lòng chọn hoạt động
              </div>
            </div>
            <!-- cate name -->
            <div class="form-group col-12 form-group-customer">
              <label for="categoryName">Nội dung</label>
              <textarea
                name="content"
                id="content"
                class="form-control"
                rows="5"
                v-model.trim="$v.category.content.$model"
              ></textarea>
              <div
                class="error"
                v-if="submitted && !$v.category.content.required"
              >
                Vui lòng nhập nội dung
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
            type="button"
            @click="dialogFormVisible = false"
            class="btn btn-outline-primary ml-2"
          >
            Quay lại
          </button>
        </span>
      </form>
    </el-dialog>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";

import {
  getAllParentCate,
  addCate,
  editCate,
  updateStatusCate,
} from "@/service/admin/category";

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
        { name: "category", text: "Tên danh mục sản phẩm" },
        { name: "content", text: "Nội dung" },
        { name: "parentId", text: "Danh mục sản phẩm cha" },
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
        id: "",
        categoryName: "",
        content: "",
        parentId: "",
        status: "",
      },
      sortcol: {
        id: "",
        categoryName: "",
        content: "",
        parentId: "",
        status: "",
      },
      check: null,
      submitted: false,
      //   thay đổi
      dialogFormVisible: false,
      fullscreenLoading: false,
      // list parent cate
      listParentCate: [],
      categoryIndex: "",
      category: {
        id: "",
        categoryName: "",
        content: "",
        status: "",
        parentId: "0",
      },
    };
  },
  validations: {
    category: {
      categoryName: {
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
    cateParent() {
      return this.listParentCate;
    },
  },
  created() {
    getAllParentCate().then((res) => {
      this.listParentCate = res;
      this.entries = this.listParentCate[0].listChild;
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
          id: "",
          categoryName: "",
          content: "",
          parentId: "",
          status: "",
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
        id: "",
        categoryName: "",
        content: "",
        parentId: "",
        status: "",
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

    // click
    handleClick() {
      this.entries = this.listParentCate[this.categoryIndex].listChild;
      this.paginateData(this.entries);
      console.log(this.showInfo);
    },

    // upload cate
    updateCate(e) {
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        let data = JSON.stringify(this.category);
        if (this.category.id == "") {
          this.apiAddCate(data);
        } else {
          this.apiEditCate(data);
        }
      }
    },

    // thay doi
    modalAdd() {
      this.submitted = false;
      this.dialogFormVisible = true;
      this.category = {
        id: "",
        categoryName: "",
        content: "",
        status: "",
        parentId: "0",
      };
    },

    // add cate
    apiAddCate(data) {
      let self = this;
      self.fullscreenLoading = true;
      addCate(data)
        .then((res) => {
          console.log(res);
          if (res.data.parentId == null || res.data.parentId == 0) {
            this.listParentCate.push(res.data);
            console.log(this.listParentCate);
          } else {
            let cate = this.listParentCate.find((e, i) => {
              if (e.id == res.data.parentId) {
                this.categoryIndex = "" + i;
                return e.id == res.data.parentId;
              }
            });
            cate.listChild.push(res.data);
            this.entries = cate.listChild;
            this.paginateData(this.entries);
          }
          self.$swal("Thành công", res.message, "success").then(function () {});
          this.submitted = false;
          self.dialogFormVisible = false;
          self.fullscreenLoading = false;
        })
        .catch((err) => {
          console.log(err.response);
          self.fullscreenLoading = false;
          self.$swal({
            customClass: {
              container: "my-swal",
            },
            icon: "error",
            title: "Lỗi",
            html: `Tên danh mục sản phẩm <strong>${err.response.data.data}</strong> đã tồn tại!`,
          });
        });
    },

    // thay doi
    modalEdit(cate) {
      this.submitted = false;
      this.dialogFormVisible = true;
      this.category = { ...cate };
    },

    //edit
    apiEditCate(data) {
      let self = this;
      self.fullscreenLoading = true;
      editCate(data)
        .then((res) => {
          // console.log(res);
          if (res.data.parentId === null) {
            this.listParentCate.forEach((e) => {
              if (e.id == res.data.id) {
                e.boolActive = res.data.boolActive;
                e.categoryCode = res.data.categoryCode;
                e.categoryName = res.data.categoryName;
                e.content = res.data.content;
                e.status = res.data.status;
                e.listChild.forEach((child) => {
                  child.boolActive = e.boolActive;
                  child.status = e.status;
                });
              }
            });
          } else if (res.data.parentId !== null) {
            // Tìm vị trí của child trong Entities
            let parentCategory = self.listParentCate[self.categoryIndex];
            const index = parentCategory.listChild.findIndex(
              (item) => item.id === res.data.id
            );
            console.log(index);
            // Gán lại giá trị đã cập nhật cho child
            if (index !== -1) {
              parentCategory.listChild[index] = res.data;
              // if (
              //   self.listParentCate[self.categoryIndex].listChild[index]
              //     .parentId !== self.listParentCate[self.categoryIndex].id
              // ) {
              //   let updatedChildList = self.listParentCate[self.categoryIndex].listChild;
              //   console.log(updatedChildList)
              //   console.log(123456);
              // }
            }
            self.entries = parentCategory.listChild;
            console.log(self.entries);
            self.paginateData(self.entries);
          }
          this.category = {
            id: "",
            categoryName: "",
            content: "",
            status: "",
            parentId: "0",
          };
          this.submitted = false;
          self.dialogFormVisible = false;
          self.fullscreenLoading = false;
          self.$swal("Thành công", res.message, "success").then(function () {});
        })
        .catch((err) => {
          console.log(err);
          self.fullscreenLoading = false;
          self.$swal({
            customClass: {
              container: "my-swal",
            },
            icon: "error",
            title: "Lỗi",
            html: `Tên danh mục sản phẩm <strong>${err.response.data.data}</strong> đã tồn tại!`,
          });
        });
    },

    // update status
    calApiUpdateStatus(id) {
      let self = this;
      updateStatusCate(id)
        .then((res) => {
          console.log(res);
          // set switch
          // this.category.boolActive = res.data.boolActive;
          if (res.data.parentId === null) {
            this.listParentCate.forEach((e) => {
              if (e.id == res.data.id) {
                e.boolActive = res.data.boolActive;
                e.status = res.data.status;
                console.log(e);
                e.listChild.forEach((child) => {
                  child.boolActive = e.boolActive;
                  child.status = e.status;
                });
              }
            });
          } else if (res.data.parentId !== null) {
            // Tìm vị trí của child trong Entities
            let parentCategory = self.listParentCate[self.categoryIndex];
            const index = parentCategory.listChild.findIndex(
              (item) => item.id === res.data.id
            );
            console.log(index);
            // Gán lại giá trị đã cập nhật cho child
            if (index !== -1) {
              parentCategory.listChild[index].boolActive = res.data.boolActive;
              parentCategory.listChild[index].status = res.data.status;
            }
          }
        })
        .catch((err) => {
          console.log(err);
          self.$swal("Lỗi", err.response.data.data, "error");
        });
      this.submitted = false;
      self.dialogFormVisible = false;
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
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

@import url("@/assets/css/modal.css");
@import url("@/assets/css/admin-product-receipt.css");

.m-admin-product-action-search > form > input {
  width: 30rem;
  height: 3.1rem;
  border: 1px solid rgba(129, 127, 127, 0.329);
  padding: 1rem;
}
</style>
