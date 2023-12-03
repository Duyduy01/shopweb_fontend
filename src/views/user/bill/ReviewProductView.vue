<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 mt-4 mb-2">
          <h3 class="text-center">Thông tin đơn hàng</h3>
        </div>
        <!-- <div class="col-4">
          <div></div>
        </div> -->
        <div class="col-12">
          <table class="table table secondary-5:border text-center">
            <thead>
              <th>Stt</th>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng</th>
              <th>#</th>
            </thead>
            <tbody>
              <tr v-for="(td, index) in getListProduct" :key="td.id">
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

                  <div class="product-name">
                    <div>
                      {{ td.parentId == null ? td.productName : td.parentName }}
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
                  x{{td.quantity}}
                </td>
                <td>{{ toMoney(td.totalPrice) }}</td>
                <td >
                  <div v-if="bill.status == 5">
                    <button type="button" class="btn btn-outline-dark">Đánh giá</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetailById } from "@/service/user/bill";
export default {
  name: "review-product",
  props: ["billId"],
  data() {
    return {
      bill: {},
      listProduct: [],
    };
  },
  created() {
    getDetailById(this.billId)
      .then((res) => {
        console.log(res);
        this.bill = res;
        this.listProduct = res.listDetail;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    getListProduct() {
      return this.listProduct;
    },
  },
  methods: {
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
  },
};
</script>

<style scoped>
@import url("@/assets/user/css/cart");
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
