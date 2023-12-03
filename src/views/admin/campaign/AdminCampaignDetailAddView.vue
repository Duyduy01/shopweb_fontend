<template>
  <div>
    <div class="product-header">
      <h1>Thêm chi tiết cho sự kiện</h1>
      <div class="m-admin-product-action-add">
        <el-button type="primary" @click="dialogFormVisible = true" plain
          >Tiếp tục
        </el-button>
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
            <td></td>
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc tên sản phẩm...."
                v-model="col.productName"
                @keyup="filterByColumn"
              />
            </td>
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.productCode"
                @change="filterByColumn"
              >
                <option value="">--Lọc mã sản phẩm --</option>
                <option
                  v-for="cd in uniqColumData('productCode')"
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

            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>
              <el-checkbox
                v-model="td.checkSelect"
                :label="td.checkSelect ? 'Đã chọn' : 'Chưa Chọn'"
                border
                @change="selectProductToReceipt(td)"
              ></el-checkbox>
            </td>
            <td>{{ index + 1 }}</td>
            <td>{{ td.productName }}</td>
            <td>{{ td.productCode }}</td>
            <td>{{ toMoney(td.priceSell) }}</td>
            <td>{{ toMoney(td.price) }}</td>
            <td>
              <img :src="td.img" alt="" width="100px" height="100px" />
            </td>

            <td>{{ td.quantity }}</td>
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

    <!-- nhập hàng -->

    <el-dialog
      title="Thông tin chi tiết chiến dịch"
      :visible.sync="dialogFormVisible"
      width="90%"
      height="100vh"
      top="0"
    >
      <div class="container">
        <div class="row">
          <div class="form-group col-12">
            <label for="">Phần chăng giảm giá</label>
            <select
              class="form-control"
              name=""
              id=""
              v-model="campaignDetail.discount"
            >
              <option value="" selected>-- Lựa Chọn --</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="50">50%</option>
              <option value="70">70%</option>
            </select>
            <div
              class="error"
              v-if="submitted && campaignDetail.discount == ''"
            >
              Vui lòng chọn phần trăm giảm giá
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="text-center mt-2 header-modal-customer">
          <h2>Danh sách sản phẩm đã chọn</h2>
        </div>
        <div
          class="m-product-cart-context table-wrapper-scroll-y my-custom-scrollbar"
          style="height: 50vh"
        >
          <table class="table table:border secondary-5:border text-center">
            <thead>
              <th>Stt</th>
              <th>Tên sản phẩm</th>
              <th>Mã sản phẩm</th>
              <th>Ảnh</th>
              <th>Giá Nhập</th>
            </thead>
            <tbody>
              <tr v-for="(td, index) in listProductSelect" :key="td.id">
                <td>{{ index + 1 }}</td>
                <td>{{ td.productName }}</td>
                <td>{{ td.productCode }}</td>
                <td>
                  <img :src="td.img" alt="" width="100px" height="100px" />
                </td>
                <td>{{ toMoney(td.price) }}</td>
                <td>{{ td.quantity }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <button
          @click="addCampaignDetail"
          type="button"
          class="btn btn-outline-primary"
        >
          Áp dụng
        </button>

        <button
          @click="dialogFormVisible = false"
          class="btn btn-outline-primary ml-2"
        >
          Quay lại
        </button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";
import {
  campaignGetProduct,
  addCampaignDetail,
} from "@/service/admin/campaign.js";
export default {
  name: "AdminCampaignDetailAdd",
  components: {
    // TalbeBase,
  },
  props: ["campId"],
  data() {
    return {
      columns: [
        { name: "checkSelect", text: "Chọn" },
        { name: "stt", text: "Stt" },
        { name: "productName", text: "Tên sản phẩm" },
        { name: "productCode", text: "Mã sản phẩm" },
        { name: "priceSell", text: "Giá bán" },
        { name: "price", text: "Giá nhập" },
        { name: "img", text: "Ảnh" },
        { name: "quantity", text: "Kho" },
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
        checkSelect: false,
        id: "",
        productName: "",
        productCode: "",
        priceSell: "",
        price: "",
        img: "",
        quantity: "",
      },
      sortcol: {
        checkSelect: false,
        id: "",
        productName: "",
        productCode: "",
        priceSell: "",
        price: "",
        img: "",
        quantity: "",
      },
      check: null,
      // receipt
      listProductSelect: [],
      listUserManu: [],
      dialogFormVisible: false,
      totalReceipt: 0,
      campaignDetail: {
        campaignId: this.campId,
        discount: "",
        listProductSelect: [],
      },
      submitted: false,
    };
  },

  watch: {},
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
    sumTotalReceiptComputed() {
      return this.totalReceipt;
    },
  },
  created() {
    campaignGetProduct().then((res) => {
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
          checkSelect: false,
          id: "",
          productName: "",
          productCode: "",
          priceSell: "",
          price: "",
          img: "",
          quantity: "",
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
        productName: "",
        productCode: "",
        priceSell: "",
        description: "",
        img: "",
        active: "",
        quantity: "",
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
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
    selectProductToReceipt(product) {
      product["total"] = product.price;
      product["quantitySelect"] = +1;
      if (product.checkSelect) {
        this.listProductSelect.push(product);
      } else {
        this.listProductSelect = this.listProductSelect.filter(
          (e) => e != product
        );
      }
    },

    // add receipt()
    addCampaignDetail() {
      let self = this;
      if (self.listProductSelect.length == 0) {
        self.$swal("", "Vui lòng chọn sản phẩm cần nhập", "error");
        this.dialogFormVisible = false;
      } else {
        if (this.campaignDetail.discount == "") {
          this.submitted = true;
          return;
        }
        this.campaignDetail.listProductSelect = this.listProductSelect.map(
          (e) => e.id
        );
        let data = JSON.stringify(this.campaignDetail);
        addCampaignDetail(data)
          .then((res) => {
            self.dialogFormVisible = false,
              self.$swal("Thành công", res, "success").then(function () {
                self.$router.push(`/admin/campaign/${self.campId}/detail`);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
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
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.modal-input-quantiy > input {
  width: 2.7rem;
  height: 2.7rem;
  background-color: #fff;
  border: 1px solid rgba(104, 103, 103, 0.411);
  border-radius: 30px;
  color: black;
  text-align: center;
}
</style>
