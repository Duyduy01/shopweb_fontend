<template>
  <div>
    <div class="product-header">
      <h1>Chọn sản phẩm muốn nhập</h1>
      <div class="m-admin-product-action-add">
        <el-button type="primary" @click="dialogFormVisible = true" plain
          >Đặt hàng
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
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>
              <el-checkbox
                v-model="td.checkSelect"
                :label="td.checkSelect ? 'Đã chọn' : 'Chưa Chọn'"
                
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
            <td>
              <div class="action">
                <div
                  id="one"
                  class="button-show-modal m-product-cart-button-clear"
                >
                  <button
                    v-if="td.checkChildren"
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                    @click="openModal(td.productChild)"
                  >
                    <font-awesome-icon icon="fa-solid fa-plus" />
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
                    <td>
                      <el-checkbox
                        v-model="td.checkSelect"
                        label="Đã Chọn"
                        
                        @change="selectProductToReceipt(td)"
                      ></el-checkbox>
                    </td>
                    <td>{{ index }}</td>
                    <td>{{ td.productName }}</td>
                    <td>{{ td.productCode }}</td>
                    <td>{{ toMoney(td.priceSell) }}</td>
                    <td>{{ toMoney(td.price) }}</td>
                    <td>
                      <img :src="td.img" alt="" width="100px" height="100px" />
                    </td>
                    <td>{{ td.quantity }}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- nhập hàng -->

    <el-dialog
      title="Thông tin nhập hàng"
      :visible.sync="dialogFormVisible"
      width="90%"
      height="100vh"
      top="0"
    >
      <div class="container">
        <div class="row">
          <!-- nhân viên -->
          <div class="form-group col-6 form-group-customer">
            <label for="staff">Người thực hiện</label>
            <input
              type="text"
              class="form-control"
              id="staff"
              name="staff"
              disabled
              :value="this.$store.getters.CURRENT_USER.fullName"
            />
          </div>
          <div class="form-group col-6 form-group-customer">
            <label for="">Nhà cung cấp</label>
            <select
              class="form-control"
              name=""
              id=""
              v-model="receipt.supplierId"
            >
              <option value="" selected>-- Lựa Chọn --</option>
              <option :value="e.id" v-for="e in listUserManu" :key="e.id">
                {{ e.fullName }}
              </option>
            </select>
          </div>

          <div class="form-group col-12 form-group-customer">
            <label for="note">Ghi chú</label>
            <textarea
              name="description"
              id="description"
              class="form-control"
              rows="5"
              v-model="receipt.note"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div
          class="m-product-cart-context table-wrapper-scroll-y my-custom-scrollbar"
          style="height: 50vh"
        >
          <table class="table table:border secondary-5:border text-center">
            <thead>
              <th>Stt</th>
              <th>Tên sản phẩm</th>
              <th>Mã sản phẩm</th>

              <th>Giá Nhập</th>
              <th>Ảnh</th>
              <th>Số Lượng nhập</th>
              <th>Giá</th>
            </thead>
            <tbody>
              <tr v-for="(td, index) in listProductSelect" :key="td.id">
                <td>{{ index + 1 }}</td>
                <td>{{ td.productName }}</td>
                <td>{{ td.productCode }}</td>
                <td>{{ toMoney(td.price) }}</td>
                <td>
                  <img :src="td.img" alt="" width="100px" height="100px" />
                </td>
                <td>
                  <div class="container d-flex justify-content-center">
                    <div class="modal-change-quantity">
                      <el-button
                        type="primary"
                        icon="el-icon-minus"
                        size="smail"
                        circle
                        plain
                        @click="minusQuantity(index)"
                      ></el-button>
                    </div>
                    <div class="modal-input-quantiy">
                      <input
                        type="number"
                        :id="'quantity' + td.id"
                        v-model="td.quantitySelect"
                        @change="changeQuantityInput(index)"
                        min="1"
                      />
                    </div>
                    <div class="modal-change-quantity">
                      <el-button
                        type="primary"
                        icon="el-icon-plus"
                        size="smail"
                        circle
                        plain
                        @click="plusQuantity(index)"
                      ></el-button>
                    </div>
                  </div>
                </td>
                <th :id="'total' + td.id">{{ toMoney(td.total) }}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-end font-weight-bold">
          <span>Tổng: </span>
          {{ toMoney(totalReceipt) }}
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <button
          @click="addReceipt"
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
// import {
//   getAllProduct,
//   getAllProductById,
// } from "@/service/admin/product";
import { getAllProduct, addReceipt } from "@/service/admin/receipt";
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
        { name: "checkSelect", text: "Chọn" },
        { name: "stt", text: "Stt" },
        { name: "productName", text: "Tên sản phẩm" },
        { name: "productCode", text: "Mã sản phẩm" },
        { name: "priceSell", text: "Giá bán" },
        { name: "price", text: "Giá nhập" },
        { name: "img", text: "Ảnh" },
        { name: "quantity", text: "Kho" },
        { name: "#", text: "#" },
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
      listEntriesChild: [],
      // receipt
      listProductSelect: [],
      listUserManu: [],
      dialogFormVisible: false,
      totalReceipt: 0,
      receipt: {
        supplierId: "",
        note: "",
        listProductSelect: [],
      },
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
    getAllProduct().then((res) => {
      console.log(res)
      this.entries = res;
      this.paginateData(this.entries);
    });
    getAllUserManu().then((res) => {
      this.listUserManu = res;
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
    openModal(productChild) {
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
      this.listEntriesChild = productChild;
    },
    edit(id) {
      let url = "/admin/product/edit/" + id;
      this.$router.push(url);
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
      this.sumTotalReceipt();
    },
    //  thêm số lượng`
    plusQuantity(index) {
      let product = this.listProductSelect[index];
      product.quantitySelect = +product.quantitySelect + 1;
      product.total = +product.quantitySelect * +product.price;

      let quantityInput = "quantity" + product.id;
      let total = "total" + product.id;
      document.getElementById(quantityInput).value = product.quantitySelect;
      document.getElementById(total).innerHTML = this.toMoney(product.total);
      this.sumTotalReceipt();
    },
    //  giả số lượng
    minusQuantity(index) {
      let product = this.listProductSelect[index];
      if (product.quantitySelect == 1) return;
      product.quantitySelect = +product.quantitySelect - 1;
      product.total = +product.quantitySelect * +product.price;

      let quantityInput = "quantity" + product.id;
      let total = "total" + product.id;
      document.getElementById(quantityInput).value = product.quantitySelect;
      document.getElementById(total).innerHTML = this.toMoney(product.total);
      this.sumTotalReceipt();
    },
    // total receipt
    sumTotalReceipt() {
      let result = 0;
      this.listProductSelect.forEach((e) => {
        result += +e.total;
      });
      this.totalReceipt = result;
    },
    // add receipt()
    addReceipt() {
      let self = this;
      if (self.listProductSelect.length == 0) {
        self.$swal("", "Vui lòng chọn sản phẩm cần nhập", "error");
        this.dialogFormVisible = false;
      } else {
        this.receipt.listProductSelect = this.listProductSelect;

        addReceipt(this.receipt)
          .then((res) => {
            if (res.status == 200) {
              self.$swal("Thành công", res.data, "success").then(function () {
                self.$router.push("/admin/receipt");
              });
            }
          })
          .catch((err) => {
            self.$swal("lỗi", err.response.data.data, "error");
          });
        this.dialogFormVisible = false;
      }
    },
    changeQuantityInput(index){
      let product = this.listProductSelect[index];
      if (product.quantitySelect == 1) return;
      // product.quantitySelect = +product.quantitySelect - 1;
      product.total = +product.quantitySelect * +product.price;

      let quantityInput = "quantity" + product.id;
      let total = "total" + product.id;
      document.getElementById(quantityInput).value = product.quantitySelect;
      document.getElementById(total).innerHTML = this.toMoney(product.total);
      this.sumTotalReceipt();
    }
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
