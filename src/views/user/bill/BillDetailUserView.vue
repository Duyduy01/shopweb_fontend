<template>
  <div>
    <div v-if="listBill.length > 0">
      <div v-for="b in listBill" :key="b.id">
        <div class="container">
          <div class="bill-detail">
            <div class="header-bill-detail"></div>
            <div class="content-bill-detail">
              <div class="row">
                <div class="col-12 product mb-5">
                  <div class="d-flex justify-content-between mt-2 mb-2">
                    <div class="totalMoney d-flex">
                      <label>Mã đơn hàng :</label>
                      <span> {{ b.billCode }}</span>
                    </div>
                    <div v-html="checkStatus(b.status)"></div>
                  </div>
                  <div>
                    <table class="table table secondary-5:border text-center">
                      <tbody>
                        <tr v-for="(td, index) in b.listDetail" :key="td.id">
                          <td>{{ index + 1 }}</td>
                          <td class="d-flex justify-content-center">
                            <div>
                              <img :src="td.img" alt="" class="product-img" />
                            </div>
                            <div class="product-name">
                              <div class="text-sm-left">
                                {{ td.productName }}
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
                          <td>x{{ td.quantity }}</td>
                          <td :id="'total' + td.id">
                            {{ toMoney(td.totalPrice) }}
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-dark mr-3"
                              v-if="b.status == 5 && td.review == 0"
                              @click="reviewProduct(b.billId, td.productId, td)"
                            >
                              Đánh giá
                            </button>

                            <button
                              type="button"
                              class="btn btn-success mr-3"
                              v-if="b.status == 5 && td.review == 1"
                              disabled
                            >
                              Đã đánh giá
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="footer-bill-detail">
                    <div class="totalMoney d-flex justify-content-between">
                      <div>
                        <div>
                          <label>Ngày đặt :</label>
                          <span> {{ formatDate(b.billDate) }}</span>
                        </div>
                        <div>
                          <label>Ngày nhận :</label>
                          <span> {{ formatDate(b.deliveryTime) }}</span>
                        </div>
                      </div>
                      <div>
                        <div class="d-flex">
                          <label>Tổng tiền</label>
                          <span>: {{ toMoney(b.totalPrice + b.ship) }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="totalMoney d-flex justify-content-end mt-2 mb-2"
                    >
                      <button
                        type="button"
                        class="btn btn-danger mr-3"
                        v-if="b.status == 1"
                        @click="cancelBill(b)"
                      >
                        Hủy
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger mr-3"
                        v-if="b.status == 5"
                      >
                        Hóa đơn
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary mr-3"
                      >
                        Liên hệ với cửa hàng
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        v-if="b.status == -2"
                        @click="$router.push('/chi-tiet-san-pham/' + b.listDetail[0].productId)"
                      >
                        Mua lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bill-detail"></div>
          </div>
        </div>
        <hr />
      </div>
      <!-- pagination -->
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
    <div v-if="listBill.length <= 0">
      <div class="text-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2F5fafbb923393b712b96488590b8f781f.png?alt=media"
          alt=""
          srcset=""
        />
        <h5>Chưa có đơn hàng</h5>
      </div>
    </div>

    <!-- review sản phẩm -->
    <el-dialog
      top="24vh"
      title="Đánh giá sản phẩm"
      :visible.sync="dialogFormVisible"
      width="60%"
      height="100vh"
    >
      <div class="container">
        <form
          class="row"
          @submit.prevent="callReviewProduct"
          id="review-product"
        >
          <div class="col-12">
            <div class="block">
              <span class="demonstration"></span>
              <el-rate v-model="comment.stars"></el-rate>
              <div class="error" v-if="submitted && comment.stars == 0">
                Vui lòng đánh giá sao
              </div>
            </div>
          </div>
          <div class="form-group col-6">
            <label for="">Tiêu đề</label>
            <input
              type="text"
              class="form-control"
              placeholder="Vui lòng nhập tiêu đề"
              v-model.trim="$v.comment.title.$model"
            />
            <div class="error" v-if="submitted && !$v.comment.title.required">
              Tiêu đề không thể để trống
            </div>
            <div class="error" v-if="!$v.comment.title.maxLength">
              Tiều đề không quá
              {{ $v.comment.title.$params.maxLength.max }} kí tự.
            </div>
          </div>
          <div class="form-group col-12">
            <label for="">Nội dung</label>
            <textarea
              class="form-control"
              rows="5"
              v-model.trim="$v.comment.content.$model"
            ></textarea>
            <div class="error" v-if="submitted && !$v.comment.content.required">
              Nội dung không thể để trống
            </div>
            <div class="error" v-if="!$v.comment.content.maxLength">
              Nội dung không quá
              {{ $v.comment.content.$params.maxLength.max }} kí tự.
            </div>
          </div>
        </form>
      </div>

      <span slot="footer" class="dialog-footer">
        <button
          type="submit"
          form="review-product"
          class="btn btn-outline-primary"
        >
          Áp dụng
        </button>

        <button @click="cancelModalReview" class="btn btn-outline-primary ml-2">
          Quay lại
        </button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

import {
  getAllBillByStatus,
  getTotalByStatus,
  cancelBill,
  addReviewProduct,
} from "@/service/user/bill";
import moment from "moment";
export default {
  mixins: [validationMixin],
  props: ["billIndex"],
  name: "BillDetalView",
  data() {
    return {
      listBill: [],
      totalPage: 1,
      dialogFormVisible: false,
      comment: {
        billId: "",
        productId: "",
        title: "",
        content: "",
        stars: 0,
      },
      submitted: false,
      product: {},
    };
  },
  validations: {
    comment: {
      title: {
        required,
        maxLength: maxLength(100),
      },
      content: {
        required,
        maxLength: maxLength(3000),
      },
      stars: {
        required,
      },
    },
  },
  components: {},
  created() {
    this.getAllBill(1);
    console.log(this.billIndex)
    //tong page
    getTotalByStatus(this.billIndex).then((res) => {
      this.totalPage = res;
    });
  },
  methods: {
    // getAllBill
    async getAllBill(page) {
      try {
        this.listBill = await getAllBillByStatus(this.billIndex, page);
        console.log(this.listBill);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    //pagination
    handleCurrentChange(val) {
      this.getAllBill(val);
      window.scrollTo(0, 0);
    },
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
    // format date
    formatDate(data) {
      if (data == null) return "Chưa nhận";
      let date = moment(String(data)).format("MM/DD/YYYY HH:mm:ss");
      return date;
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
    // checkStatusText(status) {
    //   if (status == -2) return "Hủy";
    //   else if (status == 1) return "Đang xác nhận";
    //   else if (status == 2) return "Đang đóng hàng";
    //   else if (status == 3) return "Đang chuyển hàng";
    //   else if (status == 4) return "Đang giao hàng";
    //   else if (status == 5) return "Thành công";
    // },
    cancelBill(bill) {
      this.$swal({
        title: "Bạn có chắc chắn Muốn Hủy ?",
        html: `Đơn đặt hàng có mã: <strong>${bill.billCode}</strong>`,
        type: "question",
        icon: "question",
        showCancelButton: true,

        confirmButtonText: "Đồng ý",
        cancelButtonText: "Quay lại",
        closeOnConfirm: true,
        closeOnCancel: true,
      }).then((result) => {
        if (result.isConfirmed) {
          cancelBill(bill.billId)
          .then((res) => {
              bill.status = -2;
              bill.checkBill = false;
              bill.staffId = res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    
    reviewProduct(billId, productId, product) {
      this.product = product;
      console.log(this.product.productName);
      this.comment = {
        billId: "",
        productId: "",
        title: "",
        content: "",
        stars: 0,
      };
      this.dialogFormVisible = true;
      this.comment.productId = productId;
      this.comment.billId = billId;
    },
    callReviewProduct(e) {
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      // console.log(this.$v.$touch())

      if (this.$v.$invalid || this.comment.stars == 0) {
        console.error("error validate");
      } else {
        let data = JSON.stringify(this.comment);
        addReviewProduct(data)
          .then((res) => {
            self.product.review = 1;
            self.cancelModalReview();
            self.$swal(
              res,
              "Cảm ơn quý khách đã đánh giá sản phẩm của cửa hàng",
              "success"
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cancelModalReview() {
      this.dialogFormVisible = false;
      this.product = {};
      this.submitted = false;
      this.comment = {
        billId: "",
        productId: "",
        title: "",
        content: "",
        stars: 0,
      };
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
