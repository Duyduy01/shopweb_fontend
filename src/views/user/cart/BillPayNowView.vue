<template>
  <div class="mt-5">
    <HeaderCart :activeValue="activeValue" />
    <div class="container mt-5">
      <div class="row">
        <div class="col-8 pt-1">
          <!-- thông tin người mua -->
          <div class="product">
            <div class="pb-2">
              <h4 class="text-center">Thông tin giao hàng</h4>
            </div>
            <hr />
            <div class="container-fluid">
              <div class="row">
                <!-- họ và tên -->
                <div class="col-6">
                  <div class="form-group">
                    <label for="fullName">Họ và tên</label>
                    <input
                      type="text"
                      class="form-control"
                      id="fullName"
                      name="fullName"
                      placeholder="Nhập họ và tên"
                      v-model="user.fullName"
                      disabled
                    />
                  </div>
                </div>
                <!-- họ và tên -->
                <!-- số điện thoại -->
                <div class="col-6">
                  <div class="form-group">
                    <label for="phone">Số điện thoại</label>
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Vui lòng nhập số điện thoại"
                      v-model="user.phone"
                      disabled
                    />
                  </div>
                </div>
                <!-- số điện thoại -->
                <!-- tỉnh/ thành phố -->
                <div class="col-4">
                  <div class="form-group">
                    <label for="city">Tỉnh / Thành Phố</label>
                    <select
                      class="form-control"
                      id="city"
                      v-model="bill.city"
                      @change="chooseCity"
                    >
                      <option selected value="0">--Lựa Chọn--</option>
                      <option
                        v-for="city in listCity"
                        :key="city.ProvinceID"
                        :value="city.ProvinceID"
                      >
                        {{ city.ProvinceName }}
                      </option>
                    </select>
                  </div>
                </div>
                <!--  tỉnh/ thành phố  -->
                <!-- quận/ huyện -->
                <div class="col-4">
                  <div class="form-group">
                    <label for="district">Quận / Huyện</label>
                    <select
                      class="form-control"
                      id="district"
                      v-model="bill.district"
                      @change="chooseDistrict"
                    >
                      <option selected value="0">--Lựa Chọn--</option>
                      <option
                        v-for="district in listDistrict"
                        :key="district.DistrictID"
                        :value="district.DistrictID"
                      >
                        {{ district.DistrictName }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- quận/ huyện -->
                <!-- phường xã -->
                <div class="col-4">
                  <div class="form-group">
                    <label for="ward">Phường / Xã</label>
                    <select
                      class="form-control"
                      id="ward"
                      v-model="bill.ward"
                      @change="chooseWard"
                    >
                      <option selected value="0">--Lựa Chọn--</option>
                      <option
                        v-for="ward in listWard"
                        :key="ward.WardCode"
                        :value="ward.WardCode"
                      >
                        {{ ward.WardName }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- Phường xã  -->
                <!-- Nhập địa chỉ -->
                <div class="col-12">
                  <div class="form-group">
                    <label for="phone">Địa chỉ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                      placeholder="Vui lòng nhập địa chỉ"
                      v-model="bill.address"
                    />
                  </div>
                </div>
                <!-- Nhập địa chỉ -->
                <!-- Ghi chú -->
                <div class="col-12">
                  <div class="form-group">
                    <label for="phone">Ghi chú</label>
                    <textarea
                      name="note"
                      id="note"
                      class="form-control"
                      rows="5"
                      v-model="bill.note"
                    ></textarea>
                  </div>
                </div>
                <!-- Ghi chú -->
              </div>
            </div>
          </div>
          <!-- thông tin người mua -->
          <!-- phương thức thành toán -->
          <div class="product">
            <div>
              <h4 class="text-center">Phương thức thanh toán</h4>
            </div>
            <div class="bill-pay">
              <button
                :class="bill.pay == 1 ? 'btn-bill-pay active' : 'btn-bill-pay'"
                @click="choosePay"
              >
                <div>Thanh toán khi nhận hàng</div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fcod.svg?alt=media"
                    alt=""
                    srcset=""
                  />
                </div>
              </button>
              <button
                :class="bill.pay == 2 ? 'btn-bill-pay active' : 'btn-bill-pay'"
                @click="chooseVNPay"
              >
                <div>Thanh toán qua VNPAY</div>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fvnpay.svg?alt=media"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
          <!-- phương thức thành toán -->
          <!-- Giỏ hàng -->
          <div class="product">
            <div class="">
              <h4 class="text-center">Giỏ hàng</h4>
            </div>
            <div class="bill-pay">
              <table class="table table secondary-5:border text-center">
                <thead>
                  <th>Stt</th>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng</th>
                </thead>
                <tbody v-if="listProduct.length >= 0">
                  <tr v-for="(td, index) in getListProduct" :key="td.id">
                    <td>{{ index + 1 }}</td>
                    <td class="d-flex justify-content-center">
                      <div>
                        <img :src="td.img" alt="" class="product-img" />
                      </div>

                      <div class="product-name">
                        <div>
                          {{
                            td.parentId == null ? td.productName : td.parentName
                          }}
                        </div>
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
                      {{ td.quantity }}
                    </td>
                    <td :id="'total' + td.id">{{ toMoney(td.totalPrice) }}</td>
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
          <!-- Giỏ hàng -->
        </div>

        <div class="col-4 pt-1">
          <div class="product-bill">
            <div class="pb-2">
              <h4 class="text-center">Đơn hàng</h4>
            </div>
            <hr />
            <div class="bill-content">
              <div class="container">
                <div class="row text-center pl-2 pr-2 pb-4">
                  <div class="col-6 mt-2"><h6>Giá gốc:</h6></div>
                  <div class="col-6 mt-2">
                    <h6>{{ toMoney(totalBill) }}</h6>
                  </div>
                  <div class="col-6 mt-2"><h6>Phí ship:</h6></div>
                  <div class="col-6 mt-2">
                    <h6>{{ toMoney(shippingCost) }}</h6>
                  </div>

                  <div class="col-6 mt-2"><h6>Tổng tiền thanh toán:</h6></div>
                  <div class="col-6 mt-2">
                    <h6>{{ toMoney(totalBillPay) }}</h6>
                  </div>

                  <div class="col-12 mt-2">
                    <div class="row">
                      <div class="form-group col-8">
                        <input
                          type="text"
                          class="form-control"
                          id="fullName"
                          name="fullName"
                          placeholder="Nhập mã giảm giá"
                        />
                      </div>
                      <div class="col-4">
                        <button type="button" class="btn btn-dark">
                          <span style="font-size: 14px">Áp dụng</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark w-100 button-cart"
                      @click="ActionPayMent"
                    >
                      Thanh toán
                    </button>
                  </div>
                  <div class="col-12 mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-dark w-100 button-cart"
                    >
                      Quay lại giỏ hàng
                    </button>
                  </div>
                </div>
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
import { sumMoney } from "@/service/user/cart";
import { getCity, getDistrict, getWard } from "@/service/user/address";
import { getUserDetail } from "@/service/user/user";
import { getBillPayNow, addBillPayNow } from "@/service/user/bill";
import { toMoney } from "@/service/support/exchange.js";

export default {
  props: ["productId", "quantity"],
  data() {
    return {
      activeValue: 1,
      // giỏ hàng
      listProduct: [],
      errorMessage: "Chưa có sản phẩm nào !",
      totalBill: 0,
      shippingCost: 0,
      totalBillPay: 0,
      // bill
      bill: {
        city: 0,
        district: 0,
        ward: 0,
        note: "",
        pay: false,
        address: "",
        productId: this.productId,
        quantity: this.quantity,
      },
      listCity: [],
      listDistrict: [],
      listWard: [],
      // user
      user: {},
    };
  },
  components: {
    HeaderCart,
  },
  computed: {
    getListProduct() {
      return this.listProduct;
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.checkGetListProduct();
    getCity()
      .then((res) => {
        this.listCity = res;
      })
      .catch((err) => {
        console.log(err);
      });
    //get user detail
    getUserDetail()
      .then((res) => {
        this.user = res;
        this.bill.city = this.user.city == null ? 0 : +this.user.city;
        this.chooseCity();
        this.bill.district =
          this.user.district == null ? 0 : +this.user.district;
        this.chooseDistrict();
        this.bill.ward = this.user.ward == null ? 0 : this.user.ward;
        this.bill.address = this.user.address;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    toMoney,
    checkGetListProduct() {
      let seft = this;
      let data = `?productId=${seft.productId}&quantity=${seft.quantity}`;
      getBillPayNow(data)
        .then((res) => {
          if (Array.isArray(res)) {
            console.log(res);
            seft.listProduct = res;
          } else {
            seft.listProduct = [];
          }
          seft.totalMoney();
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data);
          seft.$router.push("/404");
        });
    },
    totalMoney() {
      let { totalBill, shippingCost, totalBillPay } = sumMoney(this.listProduct);
      this.totalBill = totalBill;
      this.shippingCost = shippingCost;
      this.totalBillPay = totalBillPay;
    },
    // bill
    chooseCity() {
      this.listDistrict = [];
      this.listWard = [];
      this.bill.district = 0;
      this.bill.ward = 0;
      let dataDistrict = {
        province_id: this.bill.city,
      };
      dataDistrict = JSON.stringify(dataDistrict);
      getDistrict(dataDistrict)
        .then((res) => {
          this.listDistrict = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    chooseDistrict() {
      this.listWard = [];
      this.bill.ward = 0;

      let dataWard = {
        district_id: this.bill.district,
      };
      dataWard = JSON.stringify(dataWard);

      getWard(dataWard)
        .then((res) => {
          this.listWard = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    chooseWard() {},
    //pay
    choosePay() {
      this.bill.pay = 1;
    },
    chooseVNPay() {
      this.bill.pay = 2;
    },
    //ActionPayMent
    ActionPayMent() {
      let self = this;
      let check =
        this.bill.city == 0 ||
        this.bill.district == 0 ||
        this.bill.ward == 0 ||
        this.bill.address == "";
      if (check) {
        this.$swal({
          icon: "error",
          title: "Yêu cầu",
          text: "Vui lòng nhập đầy đủ địa chỉ",
          timer: 1500,
        });
        return;
      }
      if (!this.bill.pay) {
        this.$swal({
          icon: "error",
          title: "Yêu cầu",
          text: "Vui lòng chọn phương thức thành toán",
          timer: 1500,
        });
        return;
      }

      let selCity = document.getElementById("city");
      let textCity = selCity.options[selCity.selectedIndex].text;

      let selDistrict = document.getElementById("district");
      let textDitrcit = selDistrict.options[selDistrict.selectedIndex].text;

      let selWard = document.getElementById("ward");
      let textWard = selWard.options[selWard.selectedIndex].text;

      let addressDetail =
        this.bill.address +
        " - " +
        textWard +
        " - " +
        textDitrcit +
        " - " +
        textCity;

      this.bill.addressDetail = addressDetail;
      this.bill.shippingCost = this.shippingCost;
      this.bill.invoiceValue = this.totalBillPay;
      let data = JSON.stringify(this.bill);
      console.log(data);
      addBillPayNow(data)
        .then((res) => {
          this.$root.$refs.userHeader.totalItemByCart();
          self.$swal("Thành công", res.data, "success").then(function () {
            self.$router.push("/hoan-thanh-dat-hang");
          });
        })
        .catch((err) => {
          self.$swal("Lỗi", err.response.data.data, "error");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/user/css/bill");
.product-name {
  padding: 1rem;
}
.product-speciality {
  color: black;
  background-color: white;
  padding: 0.2rem;
  border: 1px solid rgba(176, 175, 175, 0.486);
  margin: 0.5rem 0.5rem 0 0;
}
</style>
