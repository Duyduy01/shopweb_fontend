<template>
  <div>
    <div class="product-header">
      <h1>Báo cáo doanh thu theo nhiều ngày</h1>
    </div>
    <div class="block text-center d-flex mb-4">
      <span class="demonstration">Từ ngày: </span>
      <el-date-picker
        v-model="dataReport.fromDate"
        type="datetime"
        placeholder="Select date and time"
        :picker-options="pickerOptions"
        format="dd/MM/yyyy"
      >
        >
      </el-date-picker>
      <span class="demonstration"> Đến: </span>
      <el-date-picker
        v-model="dataReport.toDate"
        type="datetime"
        placeholder="Select date and time"
        :picker-options="pickerOptions"
        format="dd/MM/yyyy"
      >
        >
      </el-date-picker>
    </div>

    <div class="w-50 m-auto d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="searchReport"
      >
        Tìm kiếm
      </button>
      <button
        type="button"
        class="btn btn-outline-success"
        @click="exportExcel"
      >
        Xuất EXCEL
      </button>

      <button type="button" class="btn btn-outline-danger" @click="exportPdf">
        Xuất PDF
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
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>{{ index + 1 }}</td>
            <td>{{ td.code }}</td>
            <td>{{ td.userName }}</td>
            <td>{{ formatDate(td.billDate) }}</td>
            <td>{{ formatDate(td.deliveryTime) }}</td>
            <td>{{ td.quantity }}</td>
            <td>{{ toMoney(td.totalPrice) }}</td>
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
    <div class="container-fluid">
      <h5 class="d-flex justify-content-end">
        <span>Tổng </span>
        <span> : {{ toMoney(total) }}</span>
      </h5>
    </div>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";
import moment from "moment";

import {
  getAllRpSeveralDay,
  totalSeveralDays,
  exportExcelSeveralDay,
  exportPdfSeveralDay,
} from "@/service/admin/report";

export default {
  name: "AdminProduct",
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "code", text: "Mã hóa đơn" },
        { name: "userName", text: "Khách hàng" },
        { name: "billDate", text: "Ngày đặt" },
        { name: "deliveryTime", text: "Ngày nhận" },
        { name: "quantity", text: "Số Lượng" },
        { name: "totalPrice", text: "Tổng tiền" },
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
        userName: "",
        billDate: "",
        deliveryTime: "",
        quantity: "",
        ship: "",
        totalPrice: "",
      },
      sortcol: {
        id: "",
        code: "",
        userName: "",
        billDate: "",
        deliveryTime: "",
        quantity: "",
        ship: "",
        totalPrice: "",
      },
      // date time
      pickerOptions: {
        shortcuts: [
          {
            text: "Hiện tại",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "Hôm qua",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "1 tuần trước",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      dataReport: {
        fromDate: this.renderFromDate(),
        toDate: new Date(),
      },
      now: new Date(),
      // date time
      check: null,
      total: 0,
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
    this.searchReport();
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
          code: "",
          userName: "",
          billDate: "",
          deliveryTime: "",
          quantity: "",
          ship: "",
          totalPrice: "",
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
        code: "",
        userName: "",
        billDate: "",
        deliveryTime: "",
        quantity: "",
        ship: "",
        totalPrice: "",
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
    renderFromDate() {
      let now = new Date();
      let fromDate = now.setDate(now.getDate() - 5);
      return fromDate;
    },
    searchReport() {
      let fromDate = moment(this.dataReport.fromDate).format("YYYY-MM-DD");
      let toDate = moment(this.dataReport.toDate).format("YYYY-MM-DD");
      let data = JSON.stringify({
        fromDate: fromDate,
        toDate: toDate,
      });
      getAllRpSeveralDay(data).then((res) => {
        this.entries = res;
        this.paginateData(this.entries);
      });
      totalSeveralDays(data).then((res) => {
        this.total = res;
      });
    },
    exportExcel() {
      let fromDate = moment(this.dataReport.fromDate).format("YYYY-MM-DD");
      let toDate = moment(this.dataReport.toDate).format("YYYY-MM-DD");
      exportExcelSeveralDay(fromDate, toDate)
        .then((res) => {
          console.log(res);

          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            "bao-cao-tu-" + fromDate + "-den-" + toDate + ".xlsx"
          );
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    exportPdf() {
      let fromDate = moment(this.dataReport.fromDate).format("YYYY-MM-DD");
      let toDate = moment(this.dataReport.toDate).format("YYYY-MM-DD");
      exportPdfSeveralDay(fromDate, toDate)
        .then((res) => {
          console.log(res);

          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            "bao-cao-tu-" + fromDate + "-den-" + toDate + ".pdf"
          );
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
