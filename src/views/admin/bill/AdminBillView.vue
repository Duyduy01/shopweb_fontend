<template>
  <div>
    <div class="product-header">
      <h1>Danh sách đơn đặt hàng</h1>
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
                <option value="">--Lọc Khách hàng--</option>
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
            <td></td>
            <td></td>
            <td></td>
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.staffId"
                @change="filter"
              >
                <option value="">--Lọc nhà nhân viên--</option>
                <option
                  v-for="cd in uniqColumData('staffId')"
                  :key="cd"
                  :value="cd"
                >
                  <div>{{ cd }}</div>
                  <!-- <div v-if="cd == ''">Đang chờ xác minh</div> -->
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
                  <div v-if="cd == -2">Hủy</div>
                  <div v-if="cd == 1">Đang xác nhận</div>
                  <div v-if="cd == 2">Đang đóng hàng</div>
                  <div v-if="cd == 3">Đang chuyển hàng</div>
                  <div v-if="cd == 4">Đang giao hàng</div>
                  <div v-if="cd == 5">Thành công</div>
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
            <td style="width: 15%">{{ formatDate(td.billDate) }}</td>
            <td style="width: 15%">{{ formatDate(td.deliveryTime) }}</td>
            <td>{{ toMoney(td.invoiceValue) }}</td>
            <td>
              <template v-if="!td.checkBill">
                {{ td.staffId }}
              </template>
              <template v-if="td.checkBill"> Đang chờ xác minh </template>
            </td>
            <!-- button -->
            <td
              style="width: 15%"
              v-if="!td.checkBill"
              @click="updateStatus(td)"
              v-html="checkStatus(td.status)"
            ></td>
            <td v-if="td.checkBill">
              <button
                type="button"
                :id="'btn-choose-user-manu' + td.id"
                class="btn btn-warning"
                @click="ConfirmBill(td)"
              >
                Xác minh
              </button>
              <button
                type="button"
                :id="'btn-choose-user-manu' + td.id"
                class="btn btn-danger ml-1"
                @click="CancelBill(td)"
              >
                Hủy
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
                  v-if="td.status != -2 && td.status != 5 && td.status != 1"
                >
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="CancelBill(td)"
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                </div>
                <div class="m-product-cart-button-clear" v-if="td.status == 5">
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
            >
              <font-awesome-icon icon="fa-solid fa-angles-left" />
            </a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === 1 }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="
                currentPage < 1 ? (currentPage = 1) : (currentPage -= 1),
                  paginateEntries()
              "
            >
              <font-awesome-icon icon="fa-solid fa-angle-left" />
            </a>
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
            >
              <font-awesome-icon icon="fa-solid fa-angle-right" />
            </a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === allPages }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="(currentPage = allPages), paginateEntries()"
            >
              <font-awesome-icon icon="fa-solid fa-angles-right" />
            </a>
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
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Mã hoá đơn:</div>
                  <div>{{ getBillDetail.billCode }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Tên khách hàng:</div>
                  <div>{{ getBillDetail.fullName }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Email:</div>
                  <div>{{ getBillDetail.email }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Số điện thoại:</div>
                  <div>{{ getBillDetail.phone }}</div>
                </div>
                <div class="col-12 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Địa chỉ:</div>
                  <div>{{ getBillDetail.address }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Ngày đặt:</div>
                  <div>{{ formatDate(getBillDetail.billDate) }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Ngày Nhận:</div>
                  <div>{{ formatDate(getBillDetail.deliveryTime) }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Tổng tiền hàng:</div>
                  <div>{{ toMoney(getBillDetail.totalPrice) }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">
                    Tổng tiền phí vận chuyển:
                  </div>
                  <div>{{ toMoney(getBillDetail.shippingCost) }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Tổng thanh toán:</div>
                  <div>{{ toMoney(getBillDetail.invoiceValue) }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Tên nhân viên:</div>
                  <div>{{ getBillDetail.staffName }}</div>
                </div>
                <div class="col-6 d-flex mb-3">
                  <div v-html="checkStatus(getBillDetail.status)"></div>
                </div>
                <div class="col-12 d-flex mb-3">
                  <div class="font-weight-bold mr-2">Ghi chú:</div>
                  <div>{{ getBillDetail.note }}</div>
                </div>
              </div>
            </div>

            <div
              class="m-product-cart-context table-wrapper-scroll-y my-custom-scrollbar"
            >
              <h4 class="font-weight-bold">Danh sách sản phẩm</h4>
              <el-table
                :data="getBillDetail.listDetail"
                border
                style="width: 100%"
                height="30vh"
              >
                <el-table-column prop="productCode" label="Mã sản phẩm">
                </el-table-column>
                <el-table-column prop="productName" label="Tên sản phẩm">
                </el-table-column>
                <el-table-column prop="priceSell" label="Giá bán">
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
  getAllBill,
  getBillDetail,
  verifyBill,
  cancelBill,
  updateStatusBill,
  exportBill,
} from "@/service/admin/bill";
import { connectWS } from "@/plugins/webSocket.js";
import $ from "jquery";
import { mapGetters } from "vuex";

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
        { name: "userId", text: "Khách hàng" },
        { name: "receiptDate", text: "Ngày đặt" },
        { name: "receivedDate", text: "Ngày nhận" },
        { name: "totalPrice", text: "Tổng tiền" },
        { name: "staffId", text: "Nhân viên" },
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
        billDate: "",
        deliveryTime: "",
        ship: "",
        totalPrice: "",
        staffId: "",
        status: "",
      },
      sortcol: {
        id: "",
        code: "",
        userId: "",
        billDate: "",
        deliveryTime: "",
        ship: "",
        totalPrice: "",
        staffId: "",
        status: "",
      },
      check: null,
      getBillDetail: {},
    };
  },
  computed: {
    ...mapGetters(["getBill"]),
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
  watch: {
    //update all bill view
    getBill(newValue) {
      this.filteredEntries.unshift(newValue);
    },
  },
  created() {
    connectWS(this.$store);
    getAllBill().then((res) => {
      this.entries = res;
      this.paginateData(this.entries);
    });
  },
  methods: {
    changeValue() {
      this.$store.dispatch("addBill", 1);
    },
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
            billDate: "",
            deliveryTime: "",
            ship: "",
            totalPrice: "",
            staffId: "",
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
        billDate: "",
        deliveryTime: "",
        ship: "",
        totalPrice: "",
        staffId: "",
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
        billDate: "",
        deliveryTime: "",
        ship: "",
        totalPrice: "",
        staffId: "",
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
      getBillDetail(id).then((res) => {
        res.listDetail.forEach((e) => {
          e.priceSell = this.toMoney(e.priceSell);
          e.totalPrice = this.toMoney(e.totalPrice);
        });

        this.getBillDetail = res;
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
    checkStatus(status) {
      if (status == -2)
        return '<button type="button" class="btn btn-danger">Hủy</button>';
      else if (status == 1)
        return '<button type="button" class="btn btn-warning">Đang xác nhận</button>';
      else if (status == 2)
        return '<button type="button" class="btn btn-info">Đang đóng hàng</button>';
      else if (status == 3)
        return '<button type="button" class="btn btn-secondary">Đang chuyển hàng</button>';
      else if (status == 4)
        return '<button type="button" class="btn btn-dark">Đang giao hàng</button>';
      else if (status == 5)
        return '<button type="button" class="btn btn-success">Thành công</button>';
    },
    checkStatusText(status) {
      if (status == -2) return "Hủy";
      else if (status == 1) return "Đang xác nhận";
      else if (status == 2) return "Đang đóng hàng";
      else if (status == 3) return "Đang chuyển hàng";
      else if (status == 4) return "Đang giao hàng";
      else if (status == 5) return "Thành công";
    },
    // xác minh
    ConfirmBill(bill) {
      this.$swal({
        title: "Bạn có chắc chắn muốn Xác minh?",
        html: `Đơn đặt hàng có mã: <strong>${bill.code}</strong>`,
        type: "question",
        icon: "question",
        showCancelButton: true,

        confirmButtonText: "Đồng ý",
        cancelButtonText: "Quay lại",
        closeOnConfirm: false,
        closeOnCancel: false,
      }).then((result) => {
        if (result.isConfirmed) {
          bill.status = 2;
          bill.checkBill = false;

          verifyBill(bill.id)
            .then((res) => {
              bill.staffId = res;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    CancelBill(bill) {
      this.$swal({
        title: "Bạn có chắc chắn muốn Hủy?",
        html: `Đơn đặt hàng có mã: <strong>${bill.code}</strong>`,
        type: "question",
        icon: "question",
        showCancelButton: true,

        confirmButtonText: "Đồng ý",
        cancelButtonText: "Quay lại",
        closeOnConfirm: false,
        closeOnCancel: false,
      }).then((result) => {
        if (result.isConfirmed) {
          bill.status = -2;
          bill.checkBill = false;

          cancelBill(bill.id)
            .then((res) => {
              bill.staffId = res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    // update status
    updateStatus(bill) {
      if (bill.status >= 5 || bill.status == -2 || bill.status == 1) return;
      else {
        this.$swal({
          title: "Bạn có chắc chắn muốn Thay đổi trạng thái?",
          html: `Mã phiếu nhập: <strong>${
            bill.code
          }</strong> || ${this.checkStatusText(
            bill.status
          )} => ${this.checkStatusText(bill.status + 1)}`,
          type: "question",
          icon: "question",
          showCancelButton: true,

          confirmButtonText: "Đồng ý",
          cancelButtonText: "Quay lại",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            bill.status = bill.status + 1;

            updateStatusBill(bill.id)
              .then((res) => {
                if (res.data.status == 5)
                  bill.deliveryTime = res.data.deliveryTime;
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      }
    },
    exportpdf(bill) {
      exportBill(bill.id)
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", bill.code + ".pdf");
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
