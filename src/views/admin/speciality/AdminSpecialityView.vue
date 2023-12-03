<template>
  <div>
    <div class="product-header">
      <h1>Đặc trưng sản phẩm</h1>
      <div class="m-admin-product-action-add button-show-modal" id="one">
        <button class="btn btn-outline-primary" @click="addSpeNew">
          Thêm đặc trưng mới
        </button>
      </div>
    </div>

    <el-tabs type="card" @tab-click="handleClick" v-model="speIndex">
      <el-tab-pane v-for="e in getListTitle" :key="e.id" :label="e.typeName">
        <div class="text-center mt-1"><h4>Danh sách đặc trưng</h4></div>
        <div class="text-center">
          <button class="btn btn-outline-primary" @click="addSpeOld">
            Thêm đặc trưng {{ e.typeName.toLowerCase() }}
          </button>
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
                <td>{{ td.featuredName }}</td>
                <td>{{ td.featuredKey }}</td>
                <td>{{ td.featuredNumber }}</td>
                <td>
                  {{ td.description }}
                  <div
                    v-if="td.featuredKey == 'color'"
                    v-html="renderColor(td)"
                  ></div>
                </td>
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

    <!-- thêm đặc trưng mới -->
    <el-dialog title="Thêm đặc trưng" :visible.sync="modeAddSpeNew" width="60%">
      <form id="m-form-admin-add-product" @submit.prevent="callApiAddSpeNew">
        <div class="container">
          <div class="row">
            <!-- type name -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Tên loại đặc trưng</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập tên loại đặc trưng"
                v-model.trim="$v.speNew.featuredName.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.speNew.featuredName.required"
              >
                Vui lòng nhập tên loại đặc trưng
              </div>
            </div>
            <!-- description -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Mô tả</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập mô tả của đặc trưng"
                v-model.trim="$v.speNew.description.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.speNew.description.required"
              >
                Vui lòng nhập mô tả đặc trưng
              </div>
            </div>
            <!-- typeCode -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Mã đặc trưng</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập mã đặc trưng"
                v-model.trim="$v.speNew.featuredKey.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.speNew.featuredKey.required"
              >
                Vui lòng nhập mã đặc trưng
              </div>
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
                    v-model.trim="$v.speNew.active.$model"
                  />
                  <label for="yes">Có</label>
                </div>
                <div class="p-2">
                  <input
                    type="radio"
                    name="active"
                    id="no"
                    value="-1"
                    v-model.trim="$v.speNew.active.$model"
                  />
                  <label for="no">Không</label>
                </div>
              </div>
              <div class="error" v-if="submitted && !$v.speNew.active.required">
                Vui lòng chọn hoạt động
              </div>
            </div>
          </div>
        </div>

        <span slot="footer" class="dialog-footer d-flex justify-content-end">
          <button type="submit" class="btn btn-outline-primary">Áp dụng</button>

          <button
            type="button"
            @click="modeAddSpeNew = false"
            class="btn btn-outline-primary ml-2"
          >
            Quay lại
          </button>
        </span>
      </form>
    </el-dialog>

    <!-- thêm đặc trưng old -->
    <el-dialog
      title="Thêm đặc  trưng"
      :visible.sync="modeAddSpeOld"
      width="60%"
    >
      <form id="m-form-admin-add-product" @submit.prevent="callApiAddSpeOld">
        <div class="container">
          <div class="row">
            <!-- type name -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Tên loại đặc trưng</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập tên loại đặc trưng"
                v-model.trim="speNew.featuredName"
                disabled
              />
            </div>
            <!-- description -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Mô tả</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập mô tả của đặc trưng"
                v-model.trim="$v.speNew.description.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.speNew.description.required"
              >
                Vui lòng nhập mô tả đặc trưng
              </div>
            </div>

            <!-- typeCode -->
            <div class="form-group col-6 form-group-customer">
              <label for="categoryName">Mã đặc trưng</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập mã đặc trưng"
                v-model.trim="speNew.featuredKey"
                disabled
              />
            </div>
            <!-- type (mã màu) -->
            <div
              class="form-group col-12 form-group-customer"
              v-if="this.speNew.featuredKey == 'color'"
            >
              <label class="demonstration">Mã màu</label>
              <div class="block">
                <el-color-picker
                  v-model="speNew.featuredCode"
                ></el-color-picker>
              </div>
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
                    v-model.trim="$v.speNew.active.$model"
                  />
                  <label for="yes">Có</label>
                </div>
                <div class="p-2">
                  <input
                    type="radio"
                    name="active"
                    id="no"
                    value="-1"
                    v-model.trim="$v.speNew.active.$model"
                  />
                  <label for="no">Không</label>
                </div>
              </div>
              <div class="error" v-if="submitted && !$v.speNew.active.required">
                Vui lòng chọn hoạt động
              </div>
            </div>
          </div>
        </div>

        <span slot="footer" class="dialog-footer d-flex justify-content-end">
          <button type="submit" class="btn btn-outline-primary">Áp dụng</button>

          <button
            type="button"
            @click="modeAddSpeOld = false"
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
  getAdminSpe,
  addSpeNew,
  addSpeOld,
  editSpe,
  updateStatus,
} from "@/service/admin/speciality";

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
        { name: "featuredName", text: "Tên đặc trưng" },
        { name: "featuredKey", text: "Mã đặc trưng" },
        { name: "featuredNumber", text: "Đặc trưng thứ" },
        { name: "description", text: "Mô tả" },
        { name: "active", text: "Trạng thái" },
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
        featuredName: "",
        featuredKey: "",
        featuredNumber: "",
        description: "",
        active: "",
      },
      sortcol: {
        id: "",
        featuredName: "",
        featuredKey: "",
        featuredNumber: "",
        description: "",
        active: "",
      },
      check: null,
      submitted: false,
      //   thay đổi
      // list parent cate
      listTitle: [],
      speIndex: "",
      modeAddSpeNew: false,
      modeAddSpeOld: false,
      modeEditSpe: false,
      speNew: {
        id: "",
        featuredName: "",
        description: "",
        featuredKey: "",
        active: "",
        featuredCode: "",
      },
    };
  },
  validations: {
    speNew: {
      featuredName: {
        required,
      },
      description: {
        required,
      },
      featuredKey: {
        required,
      },
      active: {
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
    getListTitle() {
      return this.listTitle;
    },
  },
  created() {
    getAdminSpe().then((res) => {
      this.listTitle = res;
      this.entries = this.listTitle[0].specialityEntities;
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
          featuredName: "",
          featuredKey: "",
          featuredNumber: "",
          description: "",
          active: "",
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
        featuredName: "",
        featuredKey: "",
        featuredNumber: "",
        description: "",
        active: "",
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
      this.entries = this.listTitle[this.speIndex].specialityEntities;
      this.paginateData(this.entries);
    },
    //new
    addSpeNew() {
      this.modeAddSpeNew = true;
      this.speNew = {
        id: "",
        featuredName: "",
        description: "",
        featuredKey: "",
        active: "",
        featuredCode: "",
      };
    },
    callApiAddSpeNew(e) {
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        let data = JSON.stringify(this.speNew);
        console.log(data);
        addSpeNew(data)
          .then((res) => {
            self.listTitle.push(res);
            self
              .$swal("Thành công", "Thêm đặc trưng mới thành công", "success")
              .then(function () {});
          })
          .catch((err) => {
            console.log(err);
            self
              .$swal("Thất bại", err.response.data.data, "error")
              .then(function () {});
          });
        this.submitted = false;
        self.modeAddSpeNew = false;
        this.speNew = {
          id: "",
          featuredName: "",
          description: "",
          featuredKey: "",
          active: "",
          featuredCode: "",
        };
      }
    },
    //old
    addSpeOld() {
      this.speNew = {
        id: "",
        featuredName: "",
        description: "",
        featuredKey: "",
        active: "",
        featuredCode: "",
      };
      this.modeAddSpeOld = true;
      let speCurrent = this.listTitle[this.speIndex].specialityEntities[0];
      this.speNew.featuredName = speCurrent.featuredName;
      this.speNew.featuredKey = speCurrent.featuredKey;
    },
    callApiAddSpeOld(e) {
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        console.log(this.speNew);
        if (this.speNew.id != "") {
          this.editOld(self);
        } else {
          this.addOld(self);
        }
      }
    },
    addOld(self) {
      let data = JSON.stringify(this.speNew);
      console.log(data);
      addSpeOld(data)
        .then((res) => {
          if (res.active == 1) res.boolActive = true;
          self
            .$swal(
              "Thành công",
              `Thêm đặc trưng ${res.featuredName.toLowerCase()} thành công`,
              "success"
            )
            .then(function () {});

          self.listTitle[self.speIndex].specialityEntities.push(res);
          self.entries = self.listTitle[self.speIndex].specialityEntities;
          self.paginateData(self.entries);

          self.submitted = false;
          self.modeAddSpeOld = false;
          self.speNew = {
            id: "",
            featuredName: "",
            description: "",
            featuredKey: "",
            active: "",
            featuredCode: "",
          };
        })
        .catch((err) => {
          console.log(err);
          self
            .$swal("Thất bại", err.response.data.data, "error")
            .then(function () {});
        });
    },
    // edit
    ModalEdit(spe) {
      this.modeAddSpeOld = true;
      this.speNew = spe;
    },
    editOld(self) {
      let data = JSON.stringify(this.speNew);
      editSpe(data)
        .then((res) => {
          self
            .$swal("Thành công", `Sửa đặc trưng thành công`, "success")
            .then(function () {});
          console.log(res);
          self.speNew.boolActive = res.boolActive;
          self.submitted = false;
          self.modeAddSpeOld = false;
          self.speNew = {
            id: "",
            featuredName: "",
            description: "",
            featuredKey: "",
            active: "",
            featuredCode: "",
          };
        })
        .catch((err) => {
          console.log(err);
          self
            .$swal("Thất bại", err.response.data.data, "error")
            .then(function () {});
        });
    },
    // update status
    calApiUpdateStatus(id) {
      console.log(id);
      updateStatus(id)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // render color
    renderColor(spe) {
      let html = `<div style='width:14px; height:14px; background-color:${spe.featuredCode}';></div>`;
      return html;
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
