<template>
  <div>
    <div class="product-header">
      <h1>Danh sách sản phẩm</h1>
      <div class="m-admin-product-action-add">
        <router-link to="/admin/product/add-product"
          ><button class="btn btn-outline-primary">
            Thêm sản phẩm cha
          </button></router-link
        >
        <router-link to="/admin/product/add"
          ><button class="btn btn-outline-primary">
            Thêm sản phẩm con
          </button></router-link
        >
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
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.active"
                @change="filterByColumn"
              >
                <option value="">--Lọc trạng thái--</option>
                <option
                  v-for="ac in uniqColumData('active')"
                  :key="ac"
                  :value="ac"
                >
                  <div v-if="ac == 1">Hoạt động</div>
                  <div v-if="ac == -1">không hoạt động</div>
                </option>
              </select>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>{{ index + 1 }}</td>
            <td>{{ td.productName }}</td>
            <td>{{ td.productCode }}</td>
            <td>{{ toMoney(td.priceSell) }}</td>
            <td>{{ toMoney(td.price) }}</td>
            <td>
              <img :src="td.img" alt="" width="100px" height="100px" />
            </td>
            <td>
              <!-- {{ td.active == 1 ? "Hoạt động" : "Không hoạt động" }} -->

              <el-switch v-model="td.boolActive" @change="updateStatus(td.id)">
              </el-switch>
            </td>
            <td>{{ td.quantity }}</td>
            <td>
              <div class="action" v-if="td.sale == 0">
                <div
                  id="one"
                  class="button-show-modal m-product-cart-button-clear"
                >
                  <button
                    v-if="td.checkChildren"
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="openModal(td.id)"
                  >
                    <font-awesome-icon icon="fa-solid fa-plus" />
                  </button>
                </div>
                <div class="m-product-cart-button-clear">
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="editMain(td.id)"
                  >
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                  </button>
                </div>
              </div>
              <div class="action" v-if="td.sale != 0">
                <button type="button" class="btn btn-outline-danger">Đang chạy chiến dịch</button>
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

    <!-- Large modal -->
    <div id="modal-container">
      <div class="modal-background">
        <div class="modal" style="width: 90%; height: 90vh">
          <div
            class="table-wrapper-scroll-modal-y my-custom-scrollbar-modal p-5"
          >
            <div class="text-center mt-2 header-modal-customer">
              <h2>Danh sách sản phẩm</h2>
              <div class="button-show-modal-out">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="m-admin-product-action-search">
                <form action="" class="d-flex justify-content-center">
                  <input
                    type="text"
                    placeholder="Tìm kiếm theo tên sản phẩm"
                    class="w-70"
                  />
                </form>
              </div>
            </div>
            <div
              class="m-product-cart-context table-wrapper-scroll-y my-custom-scrollbar"
              style="height: 70vh"
            >
              <table class="table table:border secondary-5:border">
                <thead>
                  <th v-for="th in tableHeader" :key="th.name">
                    <span>{{ th.text }}</span>
                  </th>
                </thead>
                <tbody>
                  <tr v-for="(td, index) in listEntriesChild" :key="td.id">
                    <td>{{ index }}</td>
                    <td>{{ td.productName }}</td>
                    <td>{{ td.productCode }}</td>
                    <td>{{ toMoney(td.priceSell) }}</td>
                    <td>{{ toMoney(td.price) }}</td>
                    <td>
                      <img :src="td.img" alt="" width="100px" height="100px" />
                    </td>
                    <td>
                      <template v-if="td.active == 1">
                        <button type="button" class="btn btn-primary">
                          Kích hoạt
                        </button>
                      </template>
                      <template v-if="td.active == -1">
                        <button type="button" class="btn btn-warning">
                          Không kích hoạt
                        </button>
                      </template>
                    </td>
                    <td>{{ td.quantity }}</td>
                    <td>
                      <div class="action">
                        <div class="m-product-cart-button-clear">
                          <button
                            class="clear-test"
                            type="button"
                            id="m-into-choose-product"
                            @click="edit(td.id)"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-pen-to-square"
                            />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";
import {
  getAllProduct,
  getAllProductById,
  updateStatus,
} from "@/service/admin/product";
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
        { name: "productName", text: "Tên sản phẩm" },
        { name: "productCode", text: "Mã sản phẩm" },
        { name: "priceSell", text: "Giá bán" },
        { name: "price", text: "Giá nhập" },
        { name: "img", text: "Ảnh" },
        { name: "active", text: "Trạng thái" },
        { name: "quantity", text: "Số lượng" },
        { name: "#", text: "Hành động" },
      ],
      entries: [],
      showEntries: [5, 10, 15, 25, 50, 75, 100],
      currentEntries: 10,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: "",
      searchEntries: [],
      col: {
        id: "",
        productName: "",
        productCode: "",
        priceSell: "",
        price: "",
        img: "",
        active: "",
        quantity: "",
      },
      sortcol: {
        id: "",
        productName: "",
        productCode: "",
        priceSell: "",
        price: "",
        img: "",
        active: "",
        quantity: "",
      },
      check: null,
      listEntriesChild: [],
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
    getAllProduct().then((res) => {
      this.entries = res;
      console.log(res)
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
          productName: "",
          productCode: "",
          priceSell: "",
          price: "",
          img: "",
          active: "",
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
      getAllProductById(id).then((res) => {
        this.listEntriesChild = res;
      });
    },
    editMain(id) {
      let url = "/admin/product/edit-main/" + id;
      this.$router.push(url);
    },
    edit(id) {
      let url = "/admin/product/edit/" + id;
      this.$router.push(url);
    },
    updateStatus(id) {
      updateStatus(id);
    },
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
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
