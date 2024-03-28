<template>
  <div>
    <div class="m-banner">
      <div class="m-banner-details">
        <span></span>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-7">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <!-- img parent -->
                <div class="p-d-img-parent">
                  <img :src="product.img" alt="" srcset="" />
                </div>
              </div>
              <!-- img child -->
              <div class="col-6" v-for="img in product.listImg" :key="img.id">
                <div class="p-d-img-parent">
                  <img :src="img" alt="" srcset="" />
                </div>
              </div>

              <!-- end child -->
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="list-product-detail">
            <!-- header -->
            <div class="product-header">
              <div class="d-flex">
                <h2>{{ productName }}</h2>
                <div class="ml-2">
                  <button
                    id="love-product"
                    @click="favoriteProduct"
                    v-html="!favorite ? dislike : like"
                  ></button>
                </div>
              </div>
              <div>
                <span>{{ product.productCode }} </span> |
                <span>Đã bán: {{ totalPay }} </span> |
                <span>Đánh giá: {{ totalRate }} </span>
              </div>

              <div>
                <el-rate
                  v-model="rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} / 5"
                >
                </el-rate>
              </div>
              <div class="price-sell">
                <div v-if="product.sale != 0" class="d-flex">
                  <h5 style="color: black; text-decoration: line-through">
                    {{
                      toMoney(product.priceSell / ((100 - product.sale) / 100))
                    }}
                  </h5>

                  <h5 style="color: red">
                    - {{ toMoney(product.priceSell) }} (-{{ product.sale }})%
                  </h5>
                </div>
                <h5 v-if="product.sale == 0" style="color: black">
                  {{ toMoney(product.priceSell) }}
                </h5>
              </div>
              <hr />
            </div>
            <!-- header -->
            <!-- content -->
            <div :class="checkValidate ? 'product-content' : ''">
              <!-- color -->
              <div class="product-color">
                <div class="title">
                  <h5>Màu sắc</h5>
                </div>
                <div class="d-flex">
                  <div class="content-color" v-for="c in listColor" :key="c.id">
                    <div class="color">
                      <input
                        type="radio"
                        name="check-color"
                        :id="'color-' + c.id"
                        :value="c.id"
                        @click="
                          chooseColor(c.featured_key, c.id, 'label-spe-' + c.id)
                        "
                        hidden
                      />
                      <label
                        :for="'color-' + c.id"
                        class="check-color"
                        :data-id="c.id"
                        :id="'label-spe-' + c.id"
                      >
                        {{ c.description }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- size -->
              <div class="product-color">
                <div class="title">
                  <h5>Kích cỡ</h5>
                </div>
                <div class="d-flex">
                  <div
                    class="content-size d-flex"
                    v-for="s in listSize"
                    :key="s.id"
                  >
                    <div class="size size--active" :data-name="s.id">
                      <input
                        type="radio"
                        name="check-size"
                        :id="'size-' + s.id"
                        :value="s.id"
                        @click="
                          chooseSize(s.featured_key, s.id, 'label-spe-' + s.id)
                        "
                        hidden
                      />
                      <label
                        :for="'size-' + s.id"
                        class="check-size"
                        :id="'label-spe-' + s.id"
                      >
                        {{ s.description }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- brand -->
              <div v-if="brandName != null" class="product-color">
                <div class="title">
                  <h5>Thương hiệu</h5>
                </div>
                <div class="d-flex">
                  <div class="content-size d-flex">
                    <div class="size">
                      <label class="check-size">
                        {{ brandName }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <!-- quantily -->
              <div class="product-color">
                <div class="title">
                  <h5>Số lượng</h5>
                </div>
                <div class="product-quantity">
                  <template>
                    <el-input-number
                      size:large
                      v-model="cart.quantity"
                      @change="handleQuantity"
                      :min="1"
                      :max="product.quantity"
                    ></el-input-number>
                    <div v-if="product.parentId != null">
                      <p>
                        <span>{{ product.quantity }}</span> sản phẩm có sẵn
                      </p>
                    </div>
                  </template>
                </div>
              </div>
              <div v-if="checkChoose" class="messager">
                <p>Vui lòng chọn màu trước</p>
              </div>
              <div v-if="checkValidate" class="messager">
                <p>Vui lòng chọn đủ thông tin</p>
              </div>
            </div>
            <hr />
            <!-- content -->
            <!-- cart -->
            <div class="product-add-cart">
              <div class="choose-size">
                <a
                  @click="chooseModalSize = true"
                  style="
                    border-bottom: 1px solid rgba(120, 115, 115, 0.414);
                    cursor: pointer;
                    font-size: 15px;
                  "
                >
                  Hướng dẫn chọn size
                </a>
              </div>
              <div class="info-other">
                <div class="mt-4">
                  <font-awesome-icon icon="fa-solid fa-check" /> Miễn phí vận
                  chuyển Cho đơn hàng
                </div>
                <div>
                  <font-awesome-icon icon="fa-solid fa-check" /> Đổi trả miễn
                  phí trong vòng 30 ngày kể từ ngày mua
                </div>
              </div>
              <div class="btn-add-cart">
                <div>
                  <el-button type="primary" plain @click="addCart"
                    >Thêm vào giỏ hàng</el-button
                  >
                </div>
                <div>
                  <el-button type="primary" plain @click="payNow"
                    >Mua ngay</el-button
                  >
                </div>
                <div>
                  <el-button type="primary" plain>Quay lại</el-button>
                </div>
              </div>
            </div>
            <!-- cart -->
            <div class="foot">
              <div class="foot-detail">
                <el-collapse>
                  <el-collapse-item title="Giới thiệu" name="1">
                    <div v-html="description"></div>
                  </el-collapse-item>
                  <el-collapse-item title="Chi tiết sản phẩm" name="2">
                    <div v-for="(ls, key) in listSpe" :key="ls.id">
                      <div
                        v-for="ls2 in listSpe[key]"
                        :key="ls2.id"
                        :value="ls2.id"
                      >
                        {{ ls2.description }}
                      </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="Mô tả sản phẩm" name="3">
                    <div v-html="content"></div>
                  </el-collapse-item>
                  <el-collapse-item title="Cách sử dụng" name="4">
                    <div>
                      Giặt máy ở chế độ nhẹ, nhiệt độ thường. Không sử dụng hóa
                      chất tẩy có chứa Clo. Phơi trong bóng mát. Sấy thùng, chế
                      độ nhẹ nhàng. Là ở nhiệt độ trung bình 150 độ C. Giặt với
                      sản phẩm cùng màu. Không là lên chi tiết trang trí.
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Comment :productId="productId" />
    </div>
    <el-dialog
      top="24vh"
      title="Hướng dẫn chọn size"
      :visible.sync="chooseModalSize"
      width="60%"
      height="100vh"
    >
      <div class="container text-center">
        <img
          src="@/assets/img/change-size.png"
          alt=""
          srcset=""
          style="object-fit: contain"
          width="100%"
        />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getProductDetailById,
  getProductDetailBySpe,
} from "@/service/user/product-detail";
import { getSpeById } from "@/service/admin/speciality";
import Comment from "@/views/user/product/ProductCommentView.vue";
import { addCart } from "@/service/user/cart";
import { toMoney } from "@/service/support/exchange.js";

export default {
  props: ["productId"],
  components: {
    Comment,
  },
  data() {
    return {
      productName: "",
      product: {},
      listColor: [],
      listSize: [],
      listSpe: {},
      choose: {
        productId: this.productId,
        sizeId: null,
        colorId: null,
      },
      quantily: 1,
      checkValidate: false,
      cart: {
        productId: null,
        quantity: 1,
        totalQuantity: null,
      },
      favorite: false,
      parentId: null,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
      totalRate: 0,
      rating: 0,
      totalPay: 0,
      chooseModalSize: false,
      brandName: "",
      content: "",
      description: "",
      checkChoose: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
    getProductDetailById(this.productId).then((res) => {
      console.log(res);
      this.totalRate = res.totalRate;
      this.rating = res.rate;
      this.totalPay = res.totalPay;
      this.product = res;
      this.listColor = res.color;
      console.log(this.listColor);
      this.listSize = res.size;
      this.productName = res.productName;

      this.parentId = res.id;
      this.favorite = res.favorite;
      this.brandName = res.brandName;
      this.content = res.content;
      this.description = res.description;
      console.log(this.listSize);
    });
    getSpeById(this.productId).then((res) => {
      this.listSpe = res;
      console.log(this.listSpe);
    });
  },
  methods: {
    toMoney,
    // color
    chooseColor(key, id, labelActiveId) {
      this.cart.quantity = 1;
      this.checkValidate = false;
      let checkedInput = event.srcElement.checked ? 1 : 0;

      if (checkedInput == 1) {
        let labelActive = document.getElementById(labelActiveId);

        let listLabel = document.querySelectorAll(".check-color");

        this.choose.sizeId = null;
        listLabel.forEach((e) => {
          e.classList.remove("active");
        });
        labelActive.classList.add("active");

        let colorId = id;

        this.choose.colorId = colorId;

        // if (this.choose.sizeId != null) {
        //   this.choose.sizeId = null;
        // }

        // Clear message if color is selected
        this.checkChoose = false;
        let listLabelSize = document.querySelectorAll(".check-size");
        listLabelSize.forEach((e) => {
          e.classList.remove("active");
        });

        this.afterClickColorAndSize();
      }
    },
    // size
    chooseSize(key, id, labelActiveId) {
      this.cart.quantity = 1;
      this.checkValidate = false;
      let checkedInput = event.srcElement.checked ? 1 : 0;

      if (checkedInput == 1) {
        // Check if color is selected
        if (!this.choose.colorId) {
          this.checkChoose = true;
          return;
        }

        let labelActive = document.getElementById(labelActiveId);
        // get id cateid
        let listLabel = document.querySelectorAll(".check-size");
        listLabel.forEach((e) => {
          e.classList.remove("active");
        });
        labelActive.classList.add("active");

        let sizeId = id;
        this.choose.sizeId = sizeId;
        this.afterClickColorAndSize();
      }
    },
    afterClickColorAndSize() {
      let data = JSON.stringify(this.choose);
      getProductDetailBySpe(data)
        .then((res) => {
          this.product = res[0];
          this.checkQuantity(res);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    // disable size 0 quantity
    checkQuantity(productList) {
      console.log(productList);
      if (this.choose.colorId != null && this.choose.sizeId == null) {
        let result = this.listSize.filter(
          (item1) => !productList.some((item2) => item1.id === item2.size.id)
        );
        console.log(result);
        if (result.length > 0) {
          document.querySelectorAll(".size--active").forEach((item) => {
            item.classList.remove("hidden"); // Đặt lại thành giá trị mặc định (block, inline, etc.)
          });
          result.forEach((item) => {
            document
              .querySelector(`.size--active[data-name="${item.id}"]`)
              .classList.add("hidden");
          });
        } else {
          document.querySelectorAll(".size--active").forEach((item) => {
            item.classList.remove("hidden"); // Đặt lại thành giá trị mặc định (block, inline, etc.)
          });
        }
        // xoa active size
        let listLabelSize = document.querySelectorAll(".check-size");
        listLabelSize.forEach((e) => {
          e.classList.remove("active");
        });
        productList.forEach((e) => {
          let sizeId = "size-" + e.size.id;
          let inputSize = document.getElementById(sizeId);
          inputSize.checked = false;
          if (e.quantity == 0) {
            inputSize.disabled = true;

            let labelSize = inputSize.parentElement.childNodes[1];
            labelSize.classList.add("inactive");
          } else {
            inputSize.disabled = false;
            let labelSize = inputSize.parentElement.childNodes[1];
            labelSize.classList.remove("inactive");
          }
        });
      } else {
        this.cart.productId = productList[0].id;
        this.cart.totalQuantity = productList[0].quantity;
        console.log(this.cart.totalQuantity)
      }
    },
    // add cart
    addCart() {
      if (this.choose.colorId == null || this.choose.sizeId == null) {
        this.checkValidate = true;
        this.checkChoose = false;
      } else {
        // nếu đang đang nhập
        if (this.$store.getters.CURRENT_USER) {
          let data = JSON.stringify(this.cart);
          addCart(data)
            .then((res) => {
              console.log(res);
              this.$root.$refs.userHeader.totalItemByCart();
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        } else {
          this.$store.commit("SET_CART", this.cart);
          this.$root.$refs.userHeader.totalItemByCart();
        }

        this.$swal({
          icon: "success",
          title: "Thành công",
          text: "Thêm vào giỏ hàng thành công",
          // timer: 1500,
        });
      }
    },
    payNow() {
      if (this.choose.colorId == null || this.choose.sizeId == null) {
        this.checkValidate = true;
        this.checkChoose = false;
      } else {
        if (!this.$store.getters.CURRENT_USER) {
          this.$store.commit(
            "SET_PATH",
            `/dat-hang-ngay/san-pham/${this.cart.productId}/so-luong/${this.cart.quantity}`
          );
        }
        this.$router.push(
          `/dat-hang-ngay/san-pham/${this.cart.productId}/so-luong/${this.cart.quantity}`
        );
      }
    },
    handleQuantity(value) {
      console.log(value);
    },
    async favoriteProduct() {
      let value = this.$root.$refs.userHeader.favoriteProductHeader(
        this.parentId
      );
      value.then((res) => {
        this.favorite = res == 1 ? false : true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-banner {
    width: 100%;
    background-color: rgb(0, 0, 0);
}

.m-banner-details {
    width: 87%;
    margin: auto;
    padding: 1rem;
}

.m-banner-details>span {
    margin: 0 1rem 0 1rem;
}


/* img parent */
.p-d-img-parent {
    width: 100%;
    overflow: hidden;
    margin: 0 1rem 1rem 1rem
}

.p-d-img-parent>img {
    width: 100%;
    transition: transform 1s ease;
}

.p-d-img-parent:hover>img {
    transform: scale(1.5);
}

/* choose-size */
/* list-product-detail */
.list-product-detail{
    width: 100%;
    margin: 0 2rem 2rem 2rem
}
/* btn-add-cart */
.btn-add-cart{
    width: 100%;
    margin: 2rem 0
}
.btn-add-cart>div>button{
    width: 100%;
    margin: .5rem 0
}


/* foot */
.foot-detail{
    font-size: 1rem;
}


/*  color */
.color{
    margin: 0 0 0 1rem;
}
.check-color{
    width:100%;
    border:1px solid rgba(120, 115, 115, 0.414);
    padding: .5rem;
    text-align:center;

}

/* love-product */
#love-product{
    padding: .5rem;
    width: 100%;
    height: 2.4rem;
    background-color: #fff;
    border:none;
    font-size: 1.5rem;
}

/* SIZE */

.size{
    margin: 0 0 0 1rem;
}
.check-size{
    width:100%;
    border:1px solid rgba(120, 115, 115, 0.414);
    padding: .5rem ;
    text-align:center;

}

/* product-quantity */
.product-quantity{
    margin: 0 0 0 1rem;
}

/* active */
.active{
    border:2px solid black
    
}
/* inactive */
.inactive{
    background-color:rgba(131, 125, 125, 0.192)
}

/* validate size */
.product-content{

    border:1px solid red;
    
}

.messager{

    color:red;

}
</style>
