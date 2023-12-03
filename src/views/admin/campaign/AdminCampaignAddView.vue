<template>
  <div>
    <AdminHeaderCampaign :activeValue="0" />
    <div class="m-admin-product-action-title text-center border-bottom">
      <h2>Thêm chiến dịch</h2>
    </div>
    <form id="m-form-admin-add-product" @submit.prevent="campaginCallApi">
      <div class="container">
        <div class="row">
          <!-- tên chiến dịch-->
          <div class="col-12">
            <div class="form-group">
              <label for="">Tên sự kiện</label>
              <input
                type="text"
                class="form-control"
                placeholder="Vui lòng nhập tên chiến dịch"
                id="campaignName"
                name="campaignName"
                v-model.trim="$v.campaign.campaignName.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.campaign.campaignName.required"
              >
                Tên sự kiện không thể để trống
              </div>
            </div>
          </div>
          <!-- ngày bắt đầu chiến dịch -->
          <div class="col-6">
            <div class="form-group">
              <label for="">Ngày bắt đầu sự kiện</label>

              <el-date-picker
                style="width: 100%"
                size="small"
                name="birthDay"
                v-model.trim="$v.startDay.$model"
                type="datetime"
                placeholder="dd/MM/yyyy"
                :picker-options="pickerOptions"
                format="dd/MM/yyyy"
              >
                >
              </el-date-picker>
              <div class="error" v-if="submitted && !$v.startDay.required">
                Ngày bắt đầu không được để trống
              </div>
              <div
                class="error"
                v-if="
                  submitted && $v.startDay.required && new Date(startDay) < now
                "
              >
                Ngày bắt đầu không được nhỏ hơn hoặc bằng ngày hiên tại
              </div>
              <div
                class="error"
                v-if="
                  submitted &&
                  $v.startDay.required &&
                  new Date(endDay) < new Date(startDay)
                "
              >
                Ngày bắt đầu không được lớn hơn ngày kết thúc
              </div>
            </div>
          </div>
          <!-- ngày kết thúc chiến dịch -->
          <div class="col-6">
            <div class="form-group">
              <label for="">Ngày kết thúc sự kiện</label>

              <el-date-picker
                style="width: 100%"
                size="small"
                name="birthDay"
                v-model.trim="$v.endDay.$model"
                type="datetime"
                placeholder="dd/MM/yyyy"
                :picker-options="pickerOptions"
                format="dd/MM/yyyy"
              >
                >
              </el-date-picker>
              <div class="error" v-if="submitted && !$v.endDay.required">
                Ngày kết thúc không được để trống
              </div>
              <div
                class="error"
                v-if="submitted && $v.endDay.required && new Date(endDay) < now"
              >
                Ngày kết thúc không được nhỏ hoặc bằng ngày hiên tại
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="content">Nội dung</label>
              <ckeditor
                :editor="editor"
                v-model.trim="$v.campaign.content.$model"
              ></ckeditor>
              <div
                class="error"
                v-if="submitted && !$v.campaign.content.required"
              >
                Nội dung không thể để trống
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="d-flex justify-content-around mt-5">
              <div>
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                  id="m-into-choose-product"
                >
                  <template> Tạo sự kiện </template>
                </button>
              </div>

              <div>
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  plain
                  @click="cancelCampaign"
                >
                  Quay lại
                </button>
              </div>
            </div>
          </div>
          <!-- button -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AdminHeaderCampaign from "@/views/admin/campaign/AdminHeaderCampaign.vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { addCampaign } from "@/service/admin/campaign.js";
import moment from "moment";
export default {
  components: {
    AdminHeaderCampaign,
  },
  name: "campaign-add",
  mixins: [validationMixin],
  data() {
    return {
      submitted: false,
      editor: ClassicEditor,
      now: new Date(),
      campaign: {
        campaignName: "",
        content: "",
        startDay: "",
        endDay: "",
      },
      startDay: "",
      endDay: "",
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
    };
  },
  validations: {
    campaign: {
      campaignName: {
        required,
      },
      content: {
        required,
      },
    },
    startDay: {
      required,
    },
    endDay: {
      required,
    },
  },
  methods: {
    campaginCallApi(e) {
      let self = this;
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("error validate");
      } else {
        let startDay = moment(this.startDay).format("YYYY-MM-DD");
        this.campaign.startDay = startDay;

        let endDay = moment(this.endDay).format("YYYY-MM-DD");
        this.campaign.endDay = endDay;
        let data = JSON.stringify(this.campaign);
        console.log(data)
        addCampaign(data)
          .then((res) => {
            self
              .$swal("Thành công", "Tạo chiến dịch thành công", "success")
              .then(function () {
                self.$router.push(`/admin/campaign/${res}/detail`);
              });
          })
          .catch((err) => {
            console.log(err);
            self.$swal("Thất bại", "Tạo chiến dịch thất bại", "error");
          });
      }
    },
    cancelCampaign() {
      this.$router.push("/admin/campaign");
    },
  },
};
</script>

<style lang="scss" scoped></style>
