<!-- eslint-disable no-prototype-builtins -->
<template>
  <div class="container-fluid m-admin-product-container-design">
    <div class="m-admin-product-action-title text-center border-bottom">
      <h2 v-if="productEdit">Sửa sản phẩm</h2>
      <h2 v-if="!productEdit">Thêm sản phẩm</h2>
    </div>
    <form id="m-form-admin-add-product" @submit.prevent="productCallApi">
      <div class="row mt-4 mb-2">
        <div class="col-8 pl-4">
          <!-- product - ma -->
          <div class="row">
            <div class="form-group col-6 form-group-customer">
              <label for="">Tên sản phẩm</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập tên sản phẩm"
                id="productname"
                name="productname"
                v-model.trim="$v.product.productName.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.product.productName.required"
              >
                Tên sản phẩm không thể để trống
              </div>
            </div>
            <div class="form-group col-6 form-group-customer">
              <label for="">Mã sản phẩm</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập mã sản phẩm"
                id="priceentry"
                name="productcode"
                v-model.trim="$v.product.productCode.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.product.productCode.required"
              >
                Mã sản phẩm không thể để trống
              </div>
            </div>
          </div>
          <!-- price -->
          <div class="row">
            <div class="form-group col-6 form-group-customer">
              <label for="">Giá bán</label>
              <CurrentPrice v-model="product.priceSell"></CurrentPrice>
              <div class="error" v-if="submitted && product.priceSell == 0">
                Vui lòng nhập giá bán
              </div>
            </div>
            <div class="form-group col-6 form-group-customer">
              <label for="price">Giá nhập</label>
              <CurrentPrice v-model="product.price"></CurrentPrice>
              <div class="error" v-if="submitted && product.price == 0">
                Vui lòng nhập giá nhập
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="">Mô tả ngắn</label>
            <textarea
              name="description"
              id="description"
              class="form-control"
              rows="5"
              v-model.trim="$v.product.description.$model"
            ></textarea>

            <div class="error" v-if="!$v.product.description.maxLength">
              Mô tả không quá
              {{ $v.product.description.$params.maxLength.max }} kí tự.
            </div>
          </div>
          <div class="form-group">
            <label for="content">Nội dung</label>
            <ckeditor
              :editor="editor"
              v-model.trim="$v.product.content.$model"
            ></ckeditor>
          </div>

          <div class="row">
            <div class="col-6 form-group-customer">
              <label for="parent">Chọn sản phẩm cha</label>
              <select
                name="parentId"
                id="parent"
                class="form-control"
                v-model="product.parentId"
                @change="getParentSpec"
                :disabled="product.checkChildren"
              >
                <option value="">Chọn sản phẩm cha</option>
                <option
                  v-for="lpp in listProductParent"
                  :value="lpp.id"
                  :key="lpp.id"
                >
                  ------{{ lpp.productName }}
                </option>
              </select>
              <div
                class="error"
                v-if="submitted && !$v.product.parentId.required"
              >
                Vui lòng chọn sản phẩm cha
              </div>
            </div>
          </div>
          <!-- active -->
          <div class="form-group radio">
            <div class="row">
              <div class="col-12 d-flex m-radio">
                <div class="p-2">Vui Lòng chọn kích hoạt:</div>
                <div class="d-flex">
                  <div class="p-2">
                    <input
                      type="radio"
                      name="active"
                      id="yes"
                      value="1"
                      v-model.trim="$v.product.active.$model"
                    />
                    <label for="yes">Có</label>
                  </div>
                  <div class="p-2">
                    <input
                      type="radio"
                      name="active"
                      id="no"
                      value="-1"
                      v-model.trim="$v.product.active.$model"
                    />
                    <label for="no">Không</label>
                  </div>
                </div>
                <div
                  class="error"
                  v-if="submitted && !$v.product.active.required"
                >
                  Vui lòng chọn hoạt động
                </div>
              </div>
            </div>
          </div>
          <!-- đặc trưng -->
          <div class="row">
            <div class="col-12 text-center mt-4">
              <h2>Chọn đặc trưng sản phẩm</h2>
            </div>

            <template v-for="(ls, key, index) in listSpe">
              <div class="col-6 form-group-customer" :key="ls.id">
                <label :for="key">{{ key }}</label>
                <select
                  :name="key"
                  :id="key"
                  class="form-control"
                  @change="addSpeciality(key, index)"
                >
                  <option value="">chọn {{ key }}</option>
                  <!-- addd -->
                  <template v-if="!productEdit">
                    <option
                      v-for="ls2 in listSpe[key]"
                      :key="ls2.id"
                      :value="ls2.id"
                    >
                      {{ ls2.description }}
                    </option>
                  </template>
                  <!-- edit -->
                  <template v-if="productEdit">
                    <option
                      v-for="ls2 in listSpe[key]"
                      :key="ls2.id"
                      :value="ls2.id"
                      :selected="product.mapSpecial[ls2.id][0]"
                    >
                      {{ ls2.description }}
                    </option>
                  </template>
                </select>
                <span class="errorMessage"></span>
              </div>
            </template>
          </div>
          <!-- button -->
          <div class="form-group d-flex justify-content-around mt-5">
            <div>
              <button
                class="btn btn-outline-primary p-2"
                type="submit"
                v-loading.fullscreen.lock="fullscreenLoading"
              >
                <template v-if="!productEdit"> Thêm sản phẩm </template>
                <template v-if="productEdit"> Sửa sản phẩm </template>
              </button>
            </div>

            <div>
              <button
                class="btn btn-outline-primary p-2"
                type="button"
                plain
                @click="cancelProduct"
              >
                Quay lại
              </button>
            </div>
          </div>
        </div>
        <div class="form-group w-50 col-4">
          <label for="m-file-img">
            <img
              :src="
                productEdit == true
                  ? this.imgEdit
                  : 'https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fimg-default.png?alt=media'
              "
              alt=""
              srcset=""
              width="390px"
              style="object-fit: contain"
              id="m-img-parent"
            />
          </label>

          <input
            type="file"
            hidden
            id="m-file-img"
            @change="addImgParent"
            accept="image/png, image/jpeg, image/webp"
          />

          <!-- children img -->
          <!-- add -->
          <div v-if="!productEdit" class="m-img-children container-fluid mt-5">
            <div class="row m-img-main-children">
              <div class="col-4 mt-6" id="m-check-sum-img-1">
                <div class="m-img-children-custom">
                  <div>
                    <img
                      src="@/assets/img/img-default.png"
                      alt=""
                      class="img-children"
                      id="reader-img-children-1"
                    />
                  </div>
                  <label for="img-children-1">
                    <div class="m-img-lable">Thêm ảnh</div>
                  </label>
                  <input
                    type="file"
                    id="img-children-1"
                    hidden
                    @change="addImgChilden"
                    data-id="1"
                    accept="image/png, image/jpeg, image/webp"
                  />
                </div>
              </div>
              <div class="col-4 mt-6" id="m-check-sum-img-2">
                <div class="m-img-children-custom">
                  <div>
                    <img
                      src="@/assets/img/img-default.png"
                      alt=""
                      class="img-children"
                      id="reader-img-children-2"
                    />
                  </div>
                  <label for="img-children-2">
                    <div class="m-img-lable">Thêm ảnh</div>
                  </label>
                  <input
                    type="file"
                    id="img-children-2"
                    hidden
                    @change="addImgChilden"
                    data-id="2"
                    accept="image/png, image/jpeg, image/webp"
                  />
                </div>
              </div>
              <div class="col-4 mt-6" id="m-check-sum-img-3">
                <div class="m-img-children-custom">
                  <div>
                    <img
                      src="@/assets/img/img-default.png"
                      alt=""
                      class="img-children"
                      id="reader-img-children-3"
                    />
                  </div>
                  <label for="img-children-3">
                    <div class="m-img-lable">Thêm ảnh</div>
                  </label>
                  <input
                    type="file"
                    id="img-children-3"
                    hidden
                    @change="addImgChilden"
                    data-id="3"
                    accept="image/png, image/jpeg, image/webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- edit -->
          <div v-if="productEdit" class="m-img-children container-fluid mt-5">
            <div class="row m-img-main-children">
              <template v-for="(ls, key) in product.mapImg">
                <div
                  :key="key"
                  class="col-4 mt-6"
                  :id="'m-check-sum-img-' + key"
                >
                  <div class="m-img-children-custom">
                    <div>
                      <img
                        :src="ls"
                        alt=""
                        class="img-children"
                        :id="'reader-img-children-' + key"
                      />
                    </div>
                    <label :for="'img-children-' + key">
                      <div class="m-img-lable center">Sửa ảnh</div>
                    </label>
                    <input
                      type="file"
                      :id="'img-children-' + key"
                      hidden
                      @change="addImgChilden"
                      :data-id="key"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import Vue from "vue";
import {
  getAllProductByActive,
  addProduct,
  getOneProductById,
  editProduct,
} from "@/service/admin/product";
import {
  getAllSpe,
  getAllChildSpeByParentId,
} from "@/service/admin/speciality";
import { validationMixin } from "vuelidate";
import { required, maxLength, numeric } from "vuelidate/lib/validators";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CurrentPrice from "@/lib/CurrentPrice.vue";
export default {
  name: "product-add",
  mixins: [validationMixin],
  components: {
    CurrentPrice,
  },
  props: ["id"],
  data() {
    return {
      listProductParent: [],
      listSpe: {},
      listSpecChild: {},
      product: {
        productName: "",
        price: 0,
        priceSell: 0,
        productCode: "",
        description: "",
        content: "",
        categoryId: "",

        parentId: "",
        img: "",
        active: null,
      },
      listSpeObject: {},
      listSpeObjectBefore: {},
      listImgChildren: {},
      submitted: false,
      editor: ClassicEditor,
      fullscreenLoading: false,
      productEdit: false,
      listIdDelete: {},
      listSpeChild: {},
      imgEdit: null,
    };
  },
  validations: {
    product: {
      productName: {
        required,
      },
      price: {
        required,
        numeric,
      },
      priceSell: {
        required,
        numeric,
      },
      productCode: {
        required,
      },
      description: {
        // required,
        maxLength: maxLength(10000),
      },
      content: {
        // required,
      },
      categoryId: {
        // required,
      },
      parentId: {
        required,
      },
      active: {
        required,
      },
    },
  },
  created() {
    getAllProductByActive().then((res) => {
      this.listProductParent = res;
    }),
    getAllSpe().then((res) => {
      console.log(res);
      this.listSpe = {
        "Màu sắc": res["Màu sắc"] || [],
        "Kích thước": res["Kích thước"] || [],
      };

      console.log(this.listSpe);
    }),
    this.checkProductEdit(this.id);
    window.scrollTo(0, 0);
  },
  computed: {
    getId() {
      return this.id;
    },
  },
  watch: {
    getId() {
      this.checkProductEdit(this.id);
    },
  },
  methods: {
    productCallApi(e) {
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        if (this.product.price > this.product.priceSell) {
          self.$swal("lỗi", "Giá nhập phải nhỏ hơn giá bán", "error");
          self.fullscreenLoading = false;
          return;
        }
        let form = new FormData();

        let listKeys = Object.keys(this.product);

        listKeys.forEach((e) => {
          if (e != "img" && e != "brandId") {
            form.append(e, this.product[e]);
          }
        });

        // speciality
        let listSpeciality = Object.values(this.listSpeObject);
        console.log(listSpeciality);
        if (
          (listSpeciality.length != 2 || listSpeciality.includes("")) &&
          !this.productEdit
        ) {
          this.$swal("Yêu cầu", "Chọn đầy đủ đặc trưng!", "error");
          return;
        } else if (
          (listSpeciality.length != 2 || listSpeciality.includes("")) &&
          this.productEdit
        ) {
          this.$swal("Yêu cầu", "Chọn đầy đủ đặc trưng!", "error");
          return;
        } else if (this.checkIsSpecChildExist(listSpeciality)) {
          this.$swal(
            "Yêu cầu",
            "Kích thước và màu sắc đã tồn tại, vui lòng kiểm tra lại!",
            "error"
          );
          return;
        }
        listSpeciality.forEach((e) => {
          if (e != "") {
            form.append("specialityId", e);
          }
        });
        // listImgChild
        let listImgChild = Object.values(this.listImgChildren);
        if (
          (listImgChild == null || listImgChild.length != 3) &&
          !this.productEdit
        ) {
          this.$swal("Yêu cầu", "Chọn đầy đủ ảnh !", "error");
          return;
        }
        listImgChild.forEach((e) => {
          if (e != null) form.append("listImg", e);
        });

        // call api add product
        if (!this.productEdit) {
          self.addProduct(form, self);
        } else {
          self.editProduct(form, self);
        }
      }
    },
    addProduct(form, self) {
      //img
      if (this.product.img == "") {
        this.$swal("Yêu cầu", "Chọn đầy đủ ảnh !", "error");
        return;
      }
      form.append("img", this.product.img);
      self.fullscreenLoading = true;
      addProduct(form)
        .then((res) => {
          if (res.statusCode == 200) {
            self.fullscreenLoading = false;
            self.$swal("Thành công", res.data, "success").then(function () {
              // self.$router.push("/admin/product");
            });
          }
        })
        .catch((err) => {
          self.$swal("lỗi", err.response.data.data, "error");
          self.fullscreenLoading = false;
        });
    },

    editProduct(form, self) {
      if (this.product.img != null) {
        form.append("img", this.product.img);
      }
      // img change
      let listIdDelete = Object.values(this.listIdDelete);

      if (listIdDelete.length > 0) {
        listIdDelete.forEach((e) => {
          form.append("listIdDelete", e);
        });
      }

      self.fullscreenLoading = true;
      // console.log("FormData content:");
      // for (var pair of form.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      editProduct(form)
        .then((res) => {
          if (res.status == 200) {
            self.fullscreenLoading = false;
            self.$swal("Thành công", res.data, "success").then(function () {
              // self.$router.push("/admin/product");
            });
          }
        })
        .catch((err) => {
          self.$swal("lỗi", err.response.data.data, "error");
          self.fullscreenLoading = false;
        });
    },

    async getParentSpec() {
      console.log(this.product.parentId);
      this.listSpecChild = await getAllChildSpeByParentId(
        this.product.parentId
      );
      console.log("123", this.listSpecChild);
    },

    addSpeciality(e, index) {
      let specialityId = document.getElementById(e);
      this.listSpeObject[index] = specialityId.value;
      console.log(this.listSpeObject[index], specialityId.value);
    },
    addImgChilden(e) {
      let readerFile = new FileReader();
      let files = e.target.files;
      let dataId = e.currentTarget.getAttribute("data-id");

      readerFile.readAsDataURL(files[0]);

      let imgCurrent = e.target
        .closest(".m-img-children-custom")
        .querySelector(".img-children")
        .getAttribute("id");

      this.listImgChildren[dataId] = files[0];
      // check img delete
      if (this.productEdit) {
        this.listIdDelete[dataId] = dataId;
      }

      readerFile.onload = function (oFREvent) {
        document.getElementById(imgCurrent).src = oFREvent.target.result;
      };
    },
    addImgParent(e) {
      let readerFile = new FileReader();
      let files = e.target.files;
      this.product.img = files[0];
      readerFile.readAsDataURL(files[0]);
      readerFile.onload = function (oFREvent) {
        document.getElementById("m-img-parent").src = oFREvent.target.result;
      };
    },

    checkIsSpecChildExist(listSpec) {
      let listSpecBefore = Object.values(this.listSpeObjectBefore);
      let checkColor = true;
      let checkSize = true;
      if (listSpecBefore.length > 0) {
        Object.entries(this.listSpecChild).forEach(([key, values]) => {
          console.log(key, values);

          if (key === "Kích thước") {
            if (
              values.some(
                (value) => String(value.id) === String(listSpec[1])
              ) &&
              listSpec[1] !== listSpecBefore[1]
            ) {
              checkSize = false;
            }
          } else if (key === "Màu sắc") {
            if (
              values.some(
                (value) => String(value.id) === String(listSpec[0])
              ) &&
              listSpec[0] !== listSpecBefore[0]
            ) {
              checkColor = false;
            }
          }
        });
        console.log(checkColor, checkSize);
        if (checkColor && checkSize) {
          return false;
        } else {
          return true;
        }
      } else {
        Object.entries(this.listSpecChild).forEach(([key, values]) => {
          if (key === "Kích thước") {
            if (
              values.some((value) => String(value.id) === String(listSpec[1]))
            ) {
              checkSize = false;
            }
          } else if (key === "Màu sắc") {
            if (
              values.some((value) => String(value.id) === String(listSpec[0]))
            ) {
              checkColor = false;
            }
          }
        });
        console.log(checkColor, checkSize);
        if (!checkColor && !checkSize) {
          return true;
        } else {
          return false;
        }
      }
    },

    checkProductEdit(id) {
      if (id != null) {
        getOneProductById(id).then((res) => {
          this.product = res;
          this.productEdit = true;
          let index = 0;
          this.getParentSpec(this.product.parentId);

          // speciality
          let getKeys = Object.keys(this.product.mapSpecial);
          let spe = this.product.mapSpecial;

          getKeys.forEach((e) => {
            if (spe[e][0] == true) {
              this.listSpeObject[index] = e;
              this.listSpeObjectBefore[index] = e;
              console.log(
                this.listSpeObject[index],
                this.listSpeObjectBefore[index]
              );
              index++;
            }
          });

          //img parent
          let getImgKeys = Object.keys(this.product.mapImg);

          getImgKeys.forEach((e) => {
            this.listImgChildren[e] = null;
          });
          // set url vào biến khác
          this.imgEdit = this.product.img;
          this.product.img = null;

          //parentId
          if (this.product.parentId == null) this.product.parentId = "";
        });
      } else {
        (this.product = {
          productName: "",
          price: 0,
          priceSell: 0,
          productCode: "",
          description: "",
          content: "",
          categoryId: "",
          parentId: "",
          img: "",
          active: null,
        }),
          (this.listSpeObject = {}),
          (this.listImgChildren = {}),
          (this.submitted = false),
          (this.productEdit = false);
      }
    },
    cancelProduct() {
      this.$router.push("/admin/product");
    },
  },
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}

/* .m-admin-product-container-design {
} */

/* top */
.m-admin-product-action {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
}

/* search */

.m-admin-product-action-search > form > input {
  width: 16rem;
  height: 3.1rem;
  border: 1px solid rgba(129, 127, 127, 0.329);
  padding: 1rem;
}

.m-admin-search-sumbit {
  width: 10rem;
  height: 3.1rem;
  background-color: #fff;
  border: 1px solid rgba(129, 127, 127, 0.329);
  outline: none;
}

.m-admin-search-sumbit:hover {
  background-color: black;
  color: #fff;
}

/* select */
#m-admin-product-sort {
  width: 10rem;
  height: 3.1rem;
  background-color: #fff;
  border: 1px solid rgba(129, 127, 127, 0.329);
  text-align: center;
}

#m-admin-product-sort:hover {
  background-color: black;
  color: #fff;
}

/* bottm */
.m-admin-product {
  display: flex;
  width: 100%;
  justify-content: center;
}

.m-admin-product > div > button {
  border: none;
  background: none;
  margin-left: 1rem;
  outline: none;
}

.m-admin-table-prodcut img {
  width: 5rem;
  height: 5rem;
}

.m-admin-table-prodcut-tbody > tr > td {
  vertical-align: middle;
}

/* clear */
.m-product-cart-button-clear > button {
  width: 15rem;
  height: 3rem;
}

.m-product-cart-button-clear {
  padding: 1rem 0 1rem 1rem;
}

.form-group {
  width: 95%;
  margin: 1rem 0;
}

.form-group-customer > input,
.form-group-customer > select {
  width: 90%;
  height: 2.5rem;
}

#m-brand {
  padding: 0 0 0 7.9rem;
}

.m-img-main-children {
  height: 10rem;
}

.m-img-children-custom {
  width: 8rem;
  height: 8rem;
}

.img-children {
  width: 8rem;
  height: 8rem;
}

/* button */
.m-btn-children-main {
  display: flex;
  margin: 8rem auto;
}

.m-btn-img-children > i {
  color: blue;
  font-size: 2rem;
}

.m-img-children-custom > label {
  width: 100%;
  border: 1px solid #007bff;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;

  padding: 0 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.m-img-lable {
  color: #007bff;
  text-align: center;
  padding: 0.5rem 0;
}

.m-img-children-custom > label:hover {
  background-color: #007bff;
}

.m-img-children-custom > label:hover > .m-img-lable {
  color: #fff;
}
</style>
