<template>
  <div class="mt-5">
    <HeaderCart :activeValue="activeValue" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-8 product">
          <div class="p-3">
            <h4 class="text-center">Danh sách sản phẩm</h4>
          </div>
          <div>
            <table class="table table secondary-5:border text-center">
              <thead>
                <th>Stt</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng</th>
                <th></th>
              </thead>
              <tbody v-if="listProduct.length >= 0">
                <tr
                  :class="td.totalQuantity < td.quantity ? 'noQuantity' : ''"
                  v-for="(td, index) in getListProduct"
                  :key="td.id"
                >
                  <td>{{ index + 1 }}</td>
                  <td class="d-flex">
                    <div>
                      <router-link
                        :to="
                          td.parentId == null
                            ? '/chi-tiet-san-pham/' + td.id
                            : '/chi-tiet-san-pham/' + td.parentId
                        "
                      >
                        <img :src="td.img" alt="" class="product-img" />
                      </router-link>
                    </div>

                    <div class="p-4">
                      <router-link
                        style="color: black"
                        :to="
                          td.parentId == null
                            ? '/chi-tiet-san-pham/' + td.id
                            : '/chi-tiet-san-pham/' + td.parentId
                        "
                      >
                        {{
                          td.parentId == null ? td.productName : td.parentName
                        }}
                      </router-link>
                      <div class="d-flex">
                        <div v-for="sp in td.speciality" :key="sp.id">
                          <div>
                            <button class="product-speciality">
                              {{ sp.description }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{{ toMoney(td.priceSell) }}</td>
                  <td>
                    <template>
                      <el-input-number
                        size:large
                        v-model="td.quantity"
                        @change="handleQuantity(td)"
                        :min="1"
                        :max="
                          td.totalQuantity < td.quantity
                            ? 100
                            : td.totalQuantity
                        "
                        :disabled="td.totalQuantity == 0"
                      ></el-input-number>
                      <div>
                        <p>
                          <span>{{ td.totalQuantity }}</span> sản phẩm có sẵn
                        </p>
                      </div>
                    </template>
                  </td>
                  <td :id="'total' + td.id">{{ toMoney(td.totalPrice) }}</td>
                  <td>
                    <div @click="deleteProduct(td)">
                      <font-awesome-icon icon="fa-solid fa-xmark" />
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="listProduct.length == 0">
                <tr>
                  <th></th>
                  <th></th>
                  <th>{{ errorMessage }}</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-4">
          <div class="product-bill">
            <div class="p-3">
              <h4 class="text-center">Đơn hàng</h4>
            </div>
            <div class="bill-content">
              <div class="container">
                <div class="row text-center pl-2 pr-2 pb-4">
                  <div class="col-6 mt-2">
                    <h6>Giá gốc:</h6>
                  </div>
                  <div class="col-6 mt-2">
                    <h6>{{ toMoney(totalBill) }}</h6>
                  </div>
                  <div class="col-6 mt-2">
                    <h6>Phí ship:</h6>
                  </div>
                  <div class="col-6 mt-2">
                    <h6>{{ toMoney(shippingCost) }}</h6>
                  </div>
                  <div class="col-6 mt-2">
                    <h6>Tổng tiền thanh toán:</h6>
                  </div>
                  <div class="col-6 mt-2">
                    <h6>{{ toMoney(totalBillPay) }}</h6>
                  </div>
                  <div class="col-12 mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark w-100 button-cart"
                      @click="toBill()"
                    >
                      Đặt hàng
                    </button>
                  </div>
                  <div class="col-12 mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark w-100 button-cart"
                      @click="toHome()"
                    >
                      Tiếp tục mua hàng
                    </button>
                  </div>
                </div>
                <hr />
              </div>
              <div>
                <h6 class="text-center">
                  Áp dụng mã giảm giá, C-point tại bước tiếp theo
                </h6>
              </div>
              <div class="text-center">
                <div>
                  <h6>Chúng tôi chấp nhận thanh toán:</h6>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fpayment-note.svg?alt=media"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCart from "@/views/user/cart/HeaderCart.vue";
import {
  getAll,
  sumMoney,
  changQuantity,
  deleteProductByCart,
  getAllNologin,
} from "@/service/user/cart";
export default {
  data() {
    return {
      activeValue: 0,
      listProduct: [],
      shippingCost: 0,
      totalBill: 0,
      totalBillPay: 0,
      errorMessage: "Chưa có sản phẩm nào !",
    };
  },
  components: {
    HeaderCart,
  },
  computed: {
    getListProduct() {
      console.log(this.listProduct);
      return this.listProduct;
    },
  },
  created() {
    this.checkGetListProduct();
    window.scrollTo(0, 0);
  },
  methods: {
    checkGetListProduct() {
      // nếu đang đang nhập
      if (this.$store.getters.CURRENT_USER) {
        getAll()
          .then((res) => {
            if (Array.isArray(res)) {
              this.listProduct = res;
            } else {
              this.listProduct = [];
            }

            this.totalMoney();
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      } else {
        let listProducts = localStorage.getItem("CART");
        let data = {
          listProduct: JSON.parse(listProducts),
        };
        data = JSON.stringify(data);
        console.log(data);
        getAllNologin(data)
          .then((res) => {
            this.listProduct = res;
            this.totalMoney();
          })
          .catch((err) => {
            console.log(err.response.data);
          });
      }
    },
    async handleQuantity(product) {
      product.totalPrice = +product.quantity * +product.priceSell;
      let total = "total" + product.id;
      document.getElementById(total).innerHTML = this.toMoney(
        product.totalPrice
      );
      this.totalMoney();
      if (this.$store.getters.CURRENT_USER) {
        try {
          const data = JSON.stringify({
            productId: product.id,
            quantity: product.quantity,
            billId: product.billId,
          });
          const res = await changQuantity(data);
          console.log(res);
          this.$root.$refs.userHeader.totalItemByCart();
        } catch (error) {
          throw new Error(error);
        }
      } else {
        this.$store.commit("CHANGE_QUANTITY", product);
        this.$root.$refs.userHeader.totalItemByCart();
      }
    },
    deleteProduct(product) {
      if (this.$store.getters.CURRENT_USER) {
        let self = this;
        let data = {
          productId: product.id,
          quantity: product.quantity,
          billId: product.billId,
        };
        data = JSON.stringify(data);
        deleteProductByCart(data)
          .then((res) => {
            console.log(res);
            self.listProduct = self.listProduct.filter(
              (e) => e.id != product.id
            );
            this.totalMoney();
            this.$root.$refs.userHeader.totalItemByCart();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.$store.commit("DELETE_PRODUCT_CART", product.id);
        this.listProduct = this.listProduct.filter((e) => e.id != product.id);
        this.$root.$refs.userHeader.totalItemByCart();
        this.totalMoney();
      }
    },
    // tính tiền
    totalMoney() {
      let { totalBill, shippingCost, totalBillPay } = sumMoney(
        this.listProduct
      );
      this.totalBill = totalBill;
      this.shippingCost = shippingCost;
      this.totalBillPay = totalBillPay;
    },
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
    //toBill
    toBill() {
      let listNameProduct = this.listProduct.filter(
        (e) => e.totalQuantity < e.quantity
      );

      if (listNameProduct && listNameProduct.length > 0) {
        this.$swal({
          title: "Xin lỗi",
          text: "Một số sản phẩm trong giỏ hàng hiện tại đang hết hàng. Quý khách vui lòng chọn sản phẩm khác để thay thế",
          icon: "error",
          timer: 1500,
        });
        return;
      }
      if (this.listProduct && this.listProduct.length == 0) {
        this.$swal({
          title: "Chưa có sản phẩm trong giỏ hàng",
          text: "Quý khách vui lòng chọn sản phẩm",
          icon: "error",
          timer: 1500,
        });
        return;
      }
      if (!this.$store.getters.CURRENT_USER) {
        this.$store.commit("SET_PATH", "/dat-hang");
      }

      this.$router.push("/dat-hang");
    },
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/user/css/cart");

.product-speciality {
  color: black;
  background-color: white;
  padding: 0.2rem;
  border: 1px solid rgba(176, 175, 175, 0.486);
  margin: 0.5rem 0.5rem 0 0;
}
</style>
