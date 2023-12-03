<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="text-center">Danh sách sản phẩm yêu thích</h4>
        </div>
        <div class="col-12">
          <table class="table table secondary-5:border text-center">
            <thead>
              <th>Stt</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Giá</th>
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
                <td>
                  <router-link
                      :to="
                        td.parentId == null
                          ? '/chi-tiet-san-pham/' + td.id
                          : '/chi-tiet-san-pham/' + td.parentId
                      "
                      style="color:black"
                    >
                       {{ td.productName }}
                    </router-link>
                 </td>
                <td class="d-flex justify-content-center">
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
                </td>
                <td>{{ toMoney(td.priceSell) }}</td>

                <td>
                  <div @click="deleteProduct(td.id)">
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
        <div class="col-12">
          <div style="width: 100%; text-align: center">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalPage"
              :page-size="1"
              @current-change="handleCurrentChange"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  getAllFavorite,
  getTotalPage,
  favorite,
} from "@/service/user/favorite";
export default {
  props: ["billIndex"],
  name: "BillDetalView",
  data() {
    return {
      activeValue: 0,
      listProduct: [],
      totalBill: 0,
      feeShip: 30000,
      totalBillPay: 0,
      errorMessage: "Chưa có sản phẩm nào !",
      totalPage: 1,
    };
  },
  computed: {
    getListProduct() {
      return this.listProduct;
    },
  },
  components: {},
  created() {
    getTotalPage()
      .then((res) => {
        this.totalPage = res;
      })
      .catch((err) => {
        this.totalPage = 1;
        console.log(err);
      });
    this.handleCurrentChange(1);
    window.scrollTo(0, 0);
  },
  methods: {
    callAPIFavorite(page) {
      getAllFavorite(page)
        .then((res) => {
          console.log(res);
          this.listProduct = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
    handleCurrentChange(val) {
      let page = "?page=" + val + "&limit=" + 5;
      console.log(page);
      this.callAPIFavorite(page);
    },
    deleteProduct(id) {
      let self = this;
      favorite(id)
        .then((res) => {
          console.log(res);
          self.listProduct = self.listProduct.filter((e) => e.id != id);
          self.$root.$refs.userHeader.totalItemByFavorite()
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
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
