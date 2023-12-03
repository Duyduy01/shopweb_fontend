<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12"><h4 class="text-center">Thông tin cá nhân</h4></div>

        <form class="row" @submit.prevent="updateProfileCallApi">
          <div class="form-group col-6">
            <label for="">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              placeholder="Vui lòng nhập họ và tên"
              id="fullName"
              name="fullName"
              v-model.trim="$v.user.fullName.$model"
            />
            <div class="error" v-if="submitted && !$v.user.fullName.required">
              Vui lòng nhập họ và tên
            </div>
          </div>
          <div class="form-group col-6">
            <label for="">Số điện thoại</label>
            <input
              type="text"
              class="form-control"
              placeholder="Vui lòng nhập số điện thoại"
              id="phone"
              name="phone"
              v-model.trim="$v.user.phone.$model"
            />
            <div class="error" v-if="submitted && !$v.user.phone.required">
              Vui lòng nhập số điện thoại
            </div>
          </div>
          <div class="form-group col-6">
            <label for="">Email</label>
            <input
              type="text"
              class="form-control"
              placeholder="Vui lòng nhập email"
              id="email"
              name="email"
              value=""
              disabled
              v-model.trim="$v.user.email.$model"
            />
            <div class="error" v-if="submitted && !$v.user.email.required">
              Vui lòng nhập địa chỉ email
            </div>
          </div>
          <div class="form-group col-6">
            <label for="" class="d-block">Ngày sinh</label>
            <el-date-picker
              style="width: 100%"
              size="small"
              name="birthDay"
              v-model.trim="$v.birthday.$model"
              type="datetime"
              placeholder="dd/MM/yyyy"
              :picker-options="pickerOptions"
              format="dd/MM/yyyy"
            >
              >
            </el-date-picker>
            <div class="error" v-if="submitted && !$v.birthday.required">
              Vui lòng chọn ngày sinh
            </div>
          </div>
          <div class="form-group col-12 d-flex">
            <div class="custom-control custom-radio mr-3">
              <input
                type="radio"
                id="male"
                name="gender"
                class="custom-control-input"
                value="1"
                v-model.trim="$v.user.gender.$model"
              />
              <label class="custom-control-label" for="male">Nam</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="female"
                name="gender"
                class="custom-control-input"
                value="2"
                v-model.trim="$v.user.gender.$model"
              />
              <label class="custom-control-label" for="female">Nữ</label>
            </div>

            <div
              class="error ml-2"
              v-if="submitted && !$v.user.gender.required"
            >
              Vui lòng chọn giới tính
            </div>
          </div>
          <div class="form-group col-6">
            <label for="">Tỉnh / Thành phố</label>
            <div id="address-city"></div>
            <select
              class="form-control"
              id="city"
              v-model.trim="$v.user.city.$model"
              @change="chooseCity"
            >
              <option value=" ">--Lựa Chọn--</option>
              <option
                v-for="city in listCity"
                :key="city.ProvinceID"
                :value="city.ProvinceID"
              >
                {{ city.ProvinceName }}
              </option>
            </select>
            <div class="error" v-if="submitted && !$v.user.city.required">
              Vui lòng chọn Tỉnh / Thành Phố
            </div>
          </div>
          <div class="form-group col-6">
            <label for="">Quận / Huyện</label>
            <select
              class="form-control"
              id="district"
              v-model.trim="$v.user.district.$model"
              @change="chooseDistrict"
            >
              <option value=" ">--Lựa Chọn--</option>
              <option
                v-for="district in listDistrict"
                :key="district.DistrictID"
                :value="district.DistrictID"
              >
                {{ district.DistrictName }}
              </option>
            </select>
            <div class="error" v-if="submitted && !$v.user.district.required">
              Vui lòng chọn Quận / Huyện
            </div>
          </div>
          <div class="form-group col-6">
            <label for="">Phường / Xã</label>
            <select
              class="form-control"
              id="ward"
              v-model.trim="$v.user.ward.$model"
              @change="chooseWard"
            >
              <option value=" ">--Lựa Chọn--</option>
              <option
                v-for="ward in listWard"
                :key="ward.WardCode"
                :value="ward.WardCode"
              >
                {{ ward.WardName }}
              </option>
            </select>
            <div class="error" v-if="submitted && !$v.user.ward.required">
              Vui lòng chọn Phường / Xã
            </div>
          </div>
          <div class="form-group col-6">
            <label for="address">Địa chỉ</label>
            <input
              type="text"
              class="form-control"
              placeholder="Vui lòng địa chỉ "
              id="address"
              name="address"
              value=""
              v-model.trim="$v.user.address.$model"
            />
            <div class="error" v-if="submitted && !$v.user.address.required">
              Vui lòng nhập địa chỉ nhà
            </div>
          </div>
          <div class="form-group col-12 d-flex justify-content-center mt-5">
            <button type="submit" class="btn btn-outline-dark">Cập nhập</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getCity, getDistrict, getWard } from "@/service/user/address";
import { getUserDetail, updateUserInfo } from "@/service/user/user";
import { validationMixin } from "vuelidate";
import moment from "moment";
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";
export default {
  components: {},
  name: "ManagerUserInfoView",
  mixins: [validationMixin],
  data() {
    return {
      submitted: false,
      listCity: [],
      listDistrict: [],
      listWard: [],
      // user
      user: {
        fullname: "",
        phone: "",
        email: "",
        birthday: "",
        gender: "",
        city: "",
        district: "",
        ward: "",
        address: "",
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "Hiện tại",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "Hôm qua",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "1 tuần trước",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      birthday: "",
    };
  },
  validations: {
    user: {
      fullName: {
        required,
      },
      phone: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(12),
      },
      email: {
        required,
      },
      gender: {
        required,
      },
      city: {
        required,
      },
      district: {
        required,
      },
      ward: {
        required,
      },
      address: {
        required,
      },
    },
    birthday: {
      required,
    },
  },
  created() {
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
        console.log(res);
        this.birthday = new Date(res.birthday)
        this.user = res;
        this.user.city = this.user.city == null ? " " : +this.user.city;
        this.user.district =
          this.user.district == null ? " " : +this.user.district;
        this.user.ward = this.user.ward == null ? " " : this.user.ward;
        if (this.user.city != " " && this.user.district != " ")
          this.activeAddress();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    updateProfileCallApi(e) {
    
      // let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        let birthday = moment(this.birthday).format("YYYY-MM-DD");
        this.user.birthday = birthday

        this.user.city;
        let data = JSON.stringify(this.user);
        updateUserInfo(data)
          .then((res) => {
            this.$swal("Thành công", res.data, "success").then((reuslt) => {
              if (reuslt) {
                this.$store.commit("LOGOUT");
                window.location = "/dang-nhap";
              }
            });
          })
          .catch((err) => {
            this.$swal("lỗi", err.data, "error");
          });
      }
    },
    chooseCity() {
      this.listDistrict = [];
      this.listWard = [];
      this.user.district = " ";
      this.user.ward = " ";
      let dataDistrict = {
        province_id: this.user.city,
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
      this.user.ward = " ";
      if (this.user.district == " ") return;

      let dataWard = {
        district_id: this.user.district,
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
    activeAddress() {
      let dataDistrict = {
        province_id: this.user.city,
      };
      dataDistrict = JSON.stringify(dataDistrict);
      getDistrict(dataDistrict)
        .then((res) => {
          this.listDistrict = res;
        })
        .catch((err) => {
          console.log(err);
        });
      let dataWard = {
        district_id: this.user.district,
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
  },
  mounted() {},
};
</script>

<style scoped></style>
