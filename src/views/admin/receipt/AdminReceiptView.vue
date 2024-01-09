<template>
  <div>
    <div class="product-header">
      <h1>Danh sách phiếu nhập kho</h1>
      <div class="m-admin-product-action-add">
        <button class="btn btn-outline-primary" @click="redirectAdd">
          Nhập hàng
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
      <table class="table table:border secondary-5:border text-center">
        <thead>
          <tr>
            <th v-for="th in tableHeader" :key="th.name">
              <div class="between:flex center:items">
                <span>{{ th.text }}</span>
                <span @click.prevent="sortByColumn(th.name)">
                  <div v-if="check == null">
                    <font-awesome-icon icon="fa-solid fa-sort" />
                  </div>
                  <div v-if="check == false">
                    <font-awesome-icon icon="fa-solid fa-sort-down" />
                  </div>
                  <div v-if="check">
                    <font-awesome-icon icon="fa-solid fa-sort-up" />
                  </div>
                </span>
              </div>
            </th>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc mã hóa đơn...."
                v-model="col.code"
                @keyup="filterByColumn"
              />
            </td>
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.userId"
                @change="filter"
              >
                <option value="">--Lọc nhân viên--</option>
                <option
                  v-for="cd in uniqColumData('userId')"
                  :key="cd"
                  :value="cd"
                >
                  {{ cd }}
                </option>
              </select>
            </td>
            <!-- <td><input type="search" class="input" placeholder="Filter name...." v-model="col.productCode"></td> -->
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc ngày nhập...."
                v-model="col.receiptDate"
                @keyup="filterByColumn"
              />
            </td>
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc Ngày nhận ...."
                v-model="col.receivedDate"
                @keyup="filterByColumn"
              />
            </td>
            <td></td>
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.supplierId"
                @change="filter"
              >
                <option value="">--Lọc nhà cung cấp--</option>
                <option
                  v-for="cd in uniqColumData('supplierId')"
                  :key="cd"
                  :value="cd"
                >
                  {{ cd }}
                </option>
              </select>
            </td>
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.status"
                @change="filter"
              >
                <option value="">--Lọc trạng thái--</option>
                <option
                  v-for="cd in uniqColumData('status')"
                  :key="cd"
                  :value="cd"
                >
                  <div v-if="cd == -1">Hủy</div>
                  <div v-if="cd == -2">Chưa hoàn tất</div>
                  <div v-if="cd == 1">Đang xác nhận</div>
                  <div v-if="cd == 2">Đang giao hàng</div>
                  <div v-if="cd == 3">Thành công</div>
                </option>
              </select>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>{{ index + 1 }}</td>
            <td>{{ td.code }}</td>
            <td>{{ td.userId }}</td>
            <td>{{ formatDate(td.receiptDate) }}</td>
            <td>{{ formatDate(td.receivedDate) }}</td>
            <td>{{ toMoney(td.totalPrice) }}</td>
            <td>
              <template v-if="!td.checkChooseManu">
                {{ td.supplierId }}
              </template>
              <template v-if="td.checkChooseManu">
                <select
                  class="select font-weight-bold"
                  style="width: 100%"
                  @change="changeUserManu(td)"
                  v-model="td.supplierIdChange"
                >
                  <option value="0" selected>Lựa chọn nhà cung cấp</option>
                  <option
                    v-for="lum in listUserManu"
                    :key="lum.id"
                    :value="lum.id"
                  >
                    {{ lum.fullName }}
                  </option>
                </select>
              </template>
            </td>
            <!-- button -->
            <td
              v-if="!td.checkChooseManu"
              @click="td.status == -1 ? '' : updateStatus(td)"
              v-html="checkStatus(td.status)"
            ></td>
            <td v-if="td.checkChooseManu">
              <button
                type="button"
                :id="'btn-choose-user-manu' + td.id"
                class="btn btn-dark"
              >
                Chọn nhà cung cấp
              </button>
            </td>
            <td>
              <div class="action">
                <div
                  id="one"
                  class="button-show-modal m-product-cart-button-clear"
                >
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="openModal(td.id)"
                  >
                    <font-awesome-icon icon="fa-solid fa-plus" />
                  </button>
                </div>
                <div
                  class="m-product-cart-button-clear"
                  v-if="td.status != -1 && td.status != 3"
                >
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="cancelReceipt(td)"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                </div>
                <div class="m-product-cart-button-clear" v-if="td.status == 3">
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="exportpdf(td)"
                  >
                    <font-awesome-icon icon="fas fa-download" />
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
            v-for="(pagi, index) in showPagination"
            :key="index"
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

    <!-- Large modal -->
    <div id="modal-container" style="z-index: 2700">
      <div class="modal-background">
        <div class="modal" style="width: 60%; height: 100vh">
          <div
            class="table-wrapper-scroll-modal-y my-custom-scrollbar-modal p-5"
          >
            <div class="text-center mt-2 header-modal-customer">
              <h2 class="font-weight-bold">Chi tiết hoá đơn</h2>
              <div class="button-show-modal-out">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <hr />
            <div class="container-fluid">
              <div class="row" id="receipt-detail">
                <div class="col-6 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Mã hoá đơn:</div>
                  <div>{{ getReceiptDetail.receiptCode }}</div>
                </div>
                <div class="col-6 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Tên nhân viên:</div>
                  <div>{{ getReceiptDetail.staffName }}</div>
                </div>
                <div class="col-6 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Ngày nhập:</div>
                  <div>{{ formatDate(getReceiptDetail.receiptDate) }}</div>
                </div>
                <div class="col-6 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Ngày Nhận:</div>
                  <div>{{ formatDate(getReceiptDetail.receivedDate) }}</div>
                </div>
                <div class="col-6 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Tổng giá:</div>
                  <div>{{ toMoney(getReceiptDetail.totalPrice) }}</div>
                </div>
                <div class="col-6 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Nhà cung cấp:</div>
                  <div>{{ getReceiptDetail.supplierName }}</div>
                </div>
                <div class="col-6 d-flex mb-5">
                  <div v-html="checkStatus(getReceiptDetail.status)"></div>
                </div>
                <div class="col-12 d-flex mb-5">
                  <div class="font-weight-bold mr-2">Ghi chú:</div>
                  <div>{{ getReceiptDetail.note }}</div>
                </div>
              </div>
            </div>

            <div
              class="m-product-cart-context table-wrapper-scroll-y my-custom-scrollbar"
            >
              <h4 class="font-weight-bold">Danh sách sản phẩm</h4>
              <el-table
                :data="getReceiptDetail.listDetail"
                border
                style="width: 100%"
                height="28vh"
              >
                <el-table-column prop="productCode" label="Mã sản phẩm">
                </el-table-column>
                <el-table-column prop="productName" label="Tên sản phẩm">
                </el-table-column>
                <el-table-column prop="priceEntry" label="Giá nhập">
                </el-table-column>
                <el-table-column prop="quantity" label="Số lượng">
                </el-table-column>
                <el-table-column prop="totalPrice" label="Tổng">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";
import moment from "moment";

import {
  getAllReceipt,
  getReceiptDetail,
  updateUserManu,
  updateStatusReceipt,
  cancelBill,
  exportReceipt,
} from "@/service/admin/receipt";
import { getAllUserManu } from "@/service/admin/userManager";
import $ from "jquery";
export default {
  name: "AdminProduct",
  components: {
    // TalbeBase,
  },
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "code", text: "Mã hóa đơn" },
        { name: "userId", text: "Nhân viên" },
        { name: "receiptDate", text: "Ngày nhập" },
        { name: "receivedDate", text: "Ngày nhận" },
        { name: "totalPrice", text: "Tổng tiền" },
        { name: "supplierId", text: "Nhà cung cấp" },
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
        code: "",
        userId: "",
        receiptDate: "",
        receivedDate: "",
        totalPrice: "",
        supplierId: "",
        status: "",
      },
      sortcol: {
        id: "",
        code: "",
        userId: "",
        receiptDate: "",
        receivedDate: "",
        totalPrice: "",
        supplierId: "",
        status: "",
      },
      check: null,
      getReceiptDetail: {},
      // nha cung cap

      listUserManu: [],
      // upadate nhà cung cấp
      userManu: {
        id: "",
        supplierId: "",
      },
    };
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
  },
  created() {
    getAllReceipt().then((res) => {
      this.entries = res;
      this.paginateData(this.entries);
    });
    getAllUserManu().then((res) => {
      this.listUserManu = res;
    });
  },
  methods: {
    paginateEntries() {
      let isSearch = this.searchInput.length !== 0;
      const isFilterCol =
        Object.entries($object.removeBy(this.col, "")).length !== 0;
      if (!isSearch) {
        if (!isFilterCol) {
          this.searchEntries = [];
          this.col = {
            id: "",
            code: "",
            userId: "",
            receiptDate: "",
            receivedDate: "",
            totalPrice: "",
            supplierId: "",
            status: "",
          };
          this.paginateData(this.entries);
        } else {
          this.searchEntries = [];
          this.filterByColumn();
        }
      } else {
        if (!isFilterCol) {
          this.searchEntries = $array.search(this.entries, this.searchInput);
          this.paginateData(this.searchEntries);
        } else if (isFilterCol) {
          this.filterByColumn();
        }
      }
      window.scrollTo(0, 60);
    },
    paginateEvent(page) {
      this.currentPage = page;
      this.paginateEntries();
    },
    searchEvent() {
      this.col = {
        id: "",
        code: "",
        userId: "",
        receiptDate: "",
        receivedDate: "",
        totalPrice: "",
        supplierId: "",
        status: "",
      };
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
      return $array
        .unique(this.getCurrentEntries(), column)
        .filter((value) => value !== "")
        .sort();
    },
    filter() {
      this.currentPage = 1;
      this.filterByColumn();
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
        code: "",
        userId: "",
        receiptDate: "",
        receivedDate: "",
        totalPrice: "",
        supplierId: "",
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
    openModal(id) {
      $(".button-show-modal").click(function () {
        var buttonId = $(this).attr("id");
        $("#modal-container").removeAttr("class").addClass(buttonId);
        $("body").addClass("modal-active");
      });
      //  close modal
      $(".button-show-modal-out").click(function () {
        $("#modal-container").addClass("out");
        $("body").removeClass("modal-active");
      });
      getReceiptDetail(id).then((res) => {
        res.listDetail.forEach((e) => {
          e.priceEntry = this.toMoney(e.priceEntry);
          e.totalPrice = this.toMoney(e.totalPrice);
        });

        this.getReceiptDetail = res;
      });
    },
    formatDate(data) {
      if (data == null) return "Chưa nhận";
      let date = moment(String(data)).format("DD/MM/YYYY HH:mm:ss");
      return date;
    },
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
    redirectAdd() {
      let url = "/admin/receipt/add";
      this.$router.push(url);
    },
    checkStatus(status) {
      if (status == -1)
        return '<button type="button" class="btn btn-danger" disable>Hủy</button>';
      else if (status == 1)
        return '<button type="button" class="btn btn-warning">Đang xác nhận</button>';
      else if (status == 2)
        return '<button type="button" class="btn btn-primary">Đang giao hàng</button>';
      else if (status == 3)
        return '<button type="button" class="btn btn-success">Thành công</button>';
    },
    checkStatusText(status) {
      if (status == -1) return "Hủy";
      else if (status == 1) return "Đang xác nhận";
      else if (status == 2) return "Đang giao hàng";
      else if (status == 3) return "Thành công";
    },
    // chọn nhà cung cấp
    changeUserManu(receipt) {
      if (receipt.supplierIdChange != "0") {
        let supplierName = this.listUserManu.find(
          (e) => e.id == receipt.supplierIdChange
        ).fullName;
        this.$swal({
          title: "Bạn có chắc chắn không?",
          html: `Mã phiếu nhập: <strong>${receipt.code}</strong>. Nhà cung cấp: <strong>${supplierName}</strong>`,
          type: "question",
          icon: "question",
          showCancelButton: true,

          confirmButtonText: "Đồng ý",
          cancelButtonText: "Quay lại",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            receipt.supplierId = supplierName;
            receipt.checkChooseManu = false;
            receipt.status = 1;
            this.userManu.id = receipt.id;
            this.userManu.supplierId = receipt.supplierIdChange;
            let data = JSON.stringify(this.userManu);
            this.ApiUpdateUserManu(data);
          } else {
            receipt.supplierIdChange = 0;
          }
        });
      }
    },
    // call api update nha cung caasp
    ApiUpdateUserManu(data) {
      updateUserManu(data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    // update status
    updateStatus(receipt) {
      if (receipt.status >= 3) return;
      else {
        this.$swal({
          title: "Bạn có chắc chắn muốn Thay đổi trạng thái?",
          html: `Mã phiếu nhập: <strong>${
            receipt.code
          }</strong> || ${this.checkStatusText(
            receipt.status
          )} => ${this.checkStatusText(receipt.status + 1)}`,
          type: "question",
          icon: "question",
          showCancelButton: true,

          confirmButtonText: "Đồng ý",
          cancelButtonText: "Quay lại",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            receipt.status = receipt.status + 1;

            updateStatusReceipt(receipt.id)
              .then((res) => {
                console.log(res);
                receipt.receivedDate = res.data.receivedDate;
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      }
    },
    cancelReceipt(receipt) {
      this.$swal({
        title: "Bạn có chắc chắn muốn Hủy?",
        html: `Mã phiếu nhập: <strong>${receipt.code}</strong>`,
        type: "question",
        icon: "question",
        showCancelButton: true,

        confirmButtonText: "Đồng ý",
        cancelButtonText: "Quay lại",
        closeOnConfirm: false,
        closeOnCancel: false,
      }).then((result) => {
        if (result.isConfirmed) {
          receipt.status = -1;
          receipt.checkChooseManu = false;
          cancelBill(receipt.id)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    exportpdf(receipt) {
      exportReceipt(receipt.id)
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", receipt.code + ".pdf");
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
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
@import url("@/assets/css/modal.css");
@import url("@/assets/css/admin-receipt-list.css");
</style>
