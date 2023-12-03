<template>
  <div>
    <div class="container-fluid">
      <div>
        <h4 class="text-center">Danh sách người dùng</h4>
        <div class="text-center mt-2 mb-3">
          <el-button type="primary" @click="dialogFormVisible = true" plain
            >Thêm người dùng
          </el-button>
        </div>
      </div>
      <el-tabs type="border-card" @tab-click="handleClick" v-model="userIndex">
        <el-tab-pane label="Khách hàng"
          ><div v-if="userIndex == 0"><UserDetail :userIndex="userIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Nhân viên"
          ><div v-if="userIndex == 1"><UserDetail :userIndex="userIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Nhà cung cấp"
          ><div v-if="userIndex == 2"><UserDetail :userIndex="userIndex" /></div
        ></el-tab-pane>
      </el-tabs>
    </div>
    <!-- nhập hàng -->

    <el-dialog
      title="Thông tin người dùng"
      :visible.sync="dialogFormVisible"
      width="50%"
      height="100vh"
      top="5%"
    >
      <div class="container">
        <form class="row" @submit.prevent="addUserApi" id="addUserAdmin">
          <!-- full name -->
          <div class="form-group col-6">
            <label for="fullName">Họ và tên</label>
            <input
              type="text"
              id="fullName"
              class="form-control"
              v-model.trim="$v.user.fullName.$model"
            />
            <div class="error" v-if="submitted && !$v.user.fullName.required">
              Vui lòng nhập họ và tên
            </div>
          </div>
          <!-- full name -->
          <!-- phone -->
          <div class="form-group col-6">
            <label for="phone">Số điện thoại</label>
            <input
              type="text"
              id="phone"
              class="form-control"
              v-model.trim="$v.user.phone.$model"
            />

            <div class="error" v-if="submitted && !$v.user.phone.required">
              Mật khẩu không thể để trống
            </div>
            <div class="error" v-if="!$v.user.phone.minLength">
              Mật khẩu phải có ít nhất
              {{ $v.user.phone.$params.minLength.min }} kí tự.
            </div>
            <div class="error" v-if="!$v.user.phone.maxLength">
              Mật khẩu phải ít hơn
              {{ $v.user.phone.$params.maxLength.max }} kí tự.
            </div>
          </div>
          <!-- phone -->
          <!-- password -->
          <div class="form-group col-6">
            <label for="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.trim="$v.user.password.$model"
            />
            <div class="error" v-if="submitted && !$v.user.password.required">
              Mật khẩu không thể để trống
            </div>
            <div class="error" v-if="!$v.user.password.minLength">
              Mật khẩu phải có ít nhất
              {{ $v.user.password.$params.minLength.min }} kí tự.
            </div>
            <div class="error" v-if="!$v.user.password.maxLength">
              Mật khẩu phải ít hơn
              {{ $v.user.password.$params.maxLength.max }} kí tự.
            </div>
          </div>
          <!-- password -->
          <!-- rePassword -->
          <div class="form-group col-6">
            <label for="repeatPassword">Lập lại mật khẩu</label>
            <input
              type="password"
              id="repeatPassword"
              class="form-control"
              v-model.trim="$v.user.repeatPassword.$model"
            />
            <div
              class="error"
              v-if="submitted && !$v.user.repeatPassword.required"
            >
              Mật khẩu không thể để trống
            </div>
            <div
              class="error"
              v-if="submitted && !$v.user.repeatPassword.sameAsPassword"
            >
              Nhập lại mật khẩu.
            </div>
          </div>
          <!-- rePassword -->
          <!-- email -->
          <div class="form-group col-6">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model.trim="$v.user.email.$model"
            />
            <div class="error" v-if="submitted && !$v.user.email.required">
              Tài khoản không thể để trống
            </div>
            <div class="error" v-if="!$v.user.email.email">
              Trường này phải là email.
            </div>
          </div>
          <!-- email -->
          <!-- birthday -->
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
          <!-- birthday -->
          <!-- type -->
          <div class="form-group col-6">
            <label for="">Chọn loại người dùng</label>
            <div id="address-city"></div>
            <select
              class="form-control"
              id="city"
              v-model.trim="$v.user.type.$model"
            >
              <option value="">--Lựa Chọn--</option>
              <option value="ADMIN">ADMIN</option>
              <option value="MANUFACTURE">MANUFACTURE</option>
            </select>
            <div class="error" v-if="submitted && !$v.user.type.required">
              Vui lòng chọn loại người dùng
            </div>
          </div>
          <!-- type -->
          <!-- gender -->
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
          <!-- gender -->
          <!-- address -->
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
          <!-- address -->
        </form>
      </div>

      <span slot="footer" class="dialog-footer">
        <button
          type="submit"
          form="addUserAdmin"
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
import UserDetail from "@/views/admin/user/AdminUserDetail.vue";
import { getCity, getDistrict, getWard } from "@/service/user/address";
import { addUserManager } from "@/service/admin/userManager";
import { validationMixin } from "vuelidate";
import moment from "moment";
import {
  required,
  minLength,
  maxLength,
  numeric,
  email,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  components: {
    UserDetail,
  },
  mixins: [validationMixin],
  name: "BillView",
  data() {
    return {
      userIndex: 0,
      ListBill: [],
      dialogFormVisible: false,
      // user
      submitted: false,
      listCity: [],
      listDistrict: [],
      listWard: [],
      // user
      user: {
        fullname: "",
        phone: "",
        password: "",
        repeatPassword: "",
        email: "",
        birthday: "",
        gender: "",
        city: " ",
        district: " ",
        ward: " ",
        address: "",
        type: "",
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
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(40),
      },
      repeatPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
      email: {
        required,
        email,
      },
      gender: {
        required,
      },
      type: {
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
  },
  methods: {
    addUserApi(e) {
      console.log(this.user);
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        this.dialogFormVisible = false;
        let birthday = moment(this.birthday).format("YYYY-MM-DD");
        this.user.birthday = birthday;

        this.user.city;
        let data = JSON.stringify(this.user);
        console.log(data);
        addUserManager(data)
          .then((res) => {
            self.$swal("Thành công", res.message, "success");
            self.user = {
              fullname: "",
              phone: "",
              password: "",
              repeatPassword: "",
              email: "",
              birthday: "",
              gender: "",
              city: " ",
              district: " ",
              ward: " ",
              address: "",
              type: "",
            };
            self.birthday = "";
            self.submitted = false
          })
          .catch((err) => {
            self.$swal("Thất bại", err.response.data.message, "error");
          });
      }
    },
    handleClick() {},
    getAllBill() {},

    // user
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
  },
  mounted() {},
};
</script>

<style scoped></style>
