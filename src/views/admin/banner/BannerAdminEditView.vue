<template>
  <div class="container-fluid m-admin-product-container-design">
    <div class="m-admin-product-action-title text-center border-bottom">
      <h2>Thay đổi banner</h2>
    </div>
    <form id="m-form-admin-add-product" @submit.prevent="bannerCallApi">
      <div class="row mt-4 mb-2">
        <div class="form-group col-6 text-center">
          <label for="m-file-img">
            <img
              :src="banner.img"
              alt=""
              srcset=""
              height="200px"
              id="m-img-parent"
              style="object-fit: contain"
            />
          </label>

          <input
            type="file"
            id="m-file-img"
            @change="addImg"
            hidden
            accept="image/png, image/jpeg, image/webp"
          />
        </div>

        <div class="col-6">
          <!-- product - ma -->
          <div class="row">
            <div class="form-group col-6 form-group-customer">
              <label for="">Tên banner</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập tên banner"
                v-model.trim="$v.banner.bannerName.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.banner.bannerName.required"
              >
                Tên banner không thể để trống
              </div>
            </div>
            <div class="form-group col-6 form-group-customer">
              <label for="">Mã banner</label>
              <input
                type="text"
                class="form-control"
                disabled
                readonly
                v-model="banner.bannerCode"
              />
            </div>
            <div class="form-group col-6 form-group-customer">
              <label for="">Loại banner</label>
              <input
                type="text"
                class="form-control"
                disabled
                readonly
                v-model="banner.bannerType"
              />
            </div>

            <div class="form-group col-6 form-group-customer">
              <label for="">Thứ tự banner</label>
              <input
                type="text"
                class="form-control"
                disabled
                readonly
                v-model="banner.number"
              />
            </div>
            <div class="form-group col-6 form-group-customer">
              <label for="">Link</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập Link"
                v-model.trim="$v.banner.bannerLink.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.banner.bannerLink.required"
              >
                Link không thể để trống
              </div>
            </div>
          </div>

          <!-- button -->
          <div class="form-group d-flex justify-content-around mt-5">
            <div>
              <button
                class="btn btn-outline-primary"
                type="submit"
                v-loading.fullscreen.lock="fullscreenLoading"
              >
                <template> Thay đổi </template>
              </button>
            </div>

            <div>
              <button
                class="btn btn-outline-primary"
                type="button"
                plain
                @click="cancelBanner"
              >
                Quay lại
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

import { getBannerById, editBanner } from "@/service/admin/banner.js";
export default {
  name: "BannerEdit",
  props: ["id"],
  mixins: [validationMixin],
  data() {
    return {
      banner: {
        id: this.id,
        bannerName: "",
        bannerCode: "",
        bannerType: "",
        bannerNumber: "",
        bannerLink: "",
      },
      img: "",
      submitted: false,
      fullscreenLoading: false,
    };
  },
  validations: {
    banner: {
      bannerName: {
        required,
      },
      bannerLink: {
        required,
      },
    },
  },
  created() {
    getBannerById(this.id).then((res) => {
      this.banner = res;
    });
  },
  methods: {
    bannerCallApi(e) {
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        let form = new FormData();
        form.append("id", this.banner.id);
        form.append("bannerName", this.banner.bannerName);
        form.append("bannerLink", this.banner.bannerLink);
        if (this.img != null && this.img != "") {
          form.append("img", this.img);
        }

        this.CallApiEditBanner(form, self);
      }
    },
    CallApiEditBanner(form, self) {
      self.openFullScreen1();
      editBanner(form)
        .then((res) => {
          self.fullscreenLoading = false;
          self.$swal("Thành công", res.data, "success").then(function () {
            self.$router.push("/admin/banner");
          });
        })
        .catch((err) => {
          self.$swal("lỗi", err.response.data.data, "error");
          self.fullscreenLoading = false;
        });
    },
    addImg(e) {
      let readerFile = new FileReader();
      let files = e.target.files;
      this.img = files[0];
      readerFile.readAsDataURL(files[0]);
      readerFile.onload = function (oFREvent) {
        document.getElementById("m-img-parent").src = oFREvent.target.result;
      };
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      if (this.fullscreenLoading == true) {
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2500);
      }
    },
    cancelBanner() {
      let url = "/admin/banner";
      this.$router.push(url);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
