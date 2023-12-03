<template>
  <div>
    <AdminHeaderCampaign :activeValue="1" />
    <div class="product-header">
      <h1>Danh sách chi tiết sự kiện</h1>
      <div class="m-admin-product-action-add">
        <router-link :to="`/admin/campaign/` + campId + `/detail/add`"
          ><button class="btn btn-outline-primary">
            Thêm chi tiết sự kiện
          </button></router-link
        >
      </div>
    </div>
    <div class="between:flex bottom:margin-3">
      <div class="center:flex-items">
        <span class="right:margin-1">Hiển thị</span>

        <select
          v-model="currentEntries"
          class="select"
          @change="paginateEntries"
          style="width: 5rem"
        >
          <option v-for="se in showEntries" :key="se" :value="se">
            {{ se }}
          </option>
        </select>
        <span class="left:margin-1">mục</span>
      </div>
      <div class="end:flex">
        <input
          type="search"
          class="input px:width-25"
          placeholder="Tìm kiếm tại đấy..."
          v-model="searchInput"
          @keyup="searchEvent"
        />
      </div>
    </div>
    <div>
      <!-- <TalbeBase :columns="columns" :entries="filteredEntries"/> -->
      <table class="table table:border secondary-5:border">
        <thead>
          <tr>
            <th v-for="th in tableHeader" :key="th.name">
              <div class="between:flex center:items">
                <span>{{ th.text }}</span>
                <span @click.prevent="sortByColumn(th.name)">
                  <div v-if="check == null">
                    <font-awesome-icon icon="fa-solid fa-sort" />
                  </div>
                  <div v-if="check == false">
                    <font-awesome-icon icon="fa-solid fa-sort-down" />
                  </div>
                  <div v-if="check">
                    <font-awesome-icon icon="fa-solid fa-sort-up" />
                  </div>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>{{ index + 1 }}</td>
            <td>
              <div v-for="pnn in td.productName" :key="pnn.id">
                <div class="text-sm-left">{{ pnn }}</div>
              </div>
            </td>
            <td>{{ td.discount }}%</td>
            <td>
              <div class="action">
                <div class="m-product-cart-button-clear">
                  <button
                    class="clear-test"
                    type="button"
                    id="m-into-choose-product"
                  >
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="between:flex y:margin-3">
      <div>
        Hiển thị từ {{ showInfo.from }} đến {{ showInfo.to }} /
        {{ showInfo.of }}
      </div>
      <!-- end -->
      <div class="end:flex">
        <ul class="pagination:nav">
          <li :class="['nav-item', { disabled: currentPage === 1 }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="(currentPage = 1), paginateEntries()"
              ><font-awesome-icon icon="fa-solid fa-angles-left"
            /></a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === 1 }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="
                currentPage < 1 ? (currentPage = 1) : (currentPage -= 1),
                  paginateEntries()
              "
              ><font-awesome-icon icon="fa-solid fa-angle-left"
            /></a>
          </li>
          <li
            v-for="pagi in showPagination"
            :key="pagi"
            :class="[
              'nav-item',
              { ellipsis: pagi === '...', active: pagi === currentPage },
            ]"
          >
            <a href="#" class="nav-link" @click.prevent="paginateEvent(pagi)">{{
              pagi
            }}</a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === allPages }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="
                currentPage > allPages
                  ? (currentPage = allPages)
                  : (currentPage += 1),
                  paginateEntries()
              "
              ><font-awesome-icon icon="fa-solid fa-angle-right"
            /></a>
          </li>
          <li :class="['nav-item', { disabled: currentPage === allPages }]">
            <a
              href="#"
              class="nav-link"
              @click.prevent="(currentPage = allPages), paginateEntries()"
              ><font-awesome-icon icon="fa-solid fa-angles-right"
            /></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container w-100 text-center">
      <button
        type="button"
        class="btn btn-outline-dark"
        @click="countinueCampaign"
      >
        Tiếp tục
      </button>
    </div>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";
import {
  getCampaignDetailById,
  finishCampaign,
} from "@/service/admin/campaign.js";
import moment from "moment";
import AdminHeaderCampaign from "@/views/admin/campaign/AdminHeaderCampaign.vue";
export default {
  name: "admin-campaign-detail-add",
  components: {
    AdminHeaderCampaign,
  },
  props: ["campId"],
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "productName", text: "Sản phẩm" },
        { name: "discount", text: "Phần trăm giảm giá" },
        { name: "#", text: "#" },
      ],
      entries: [],
      showEntries: [5, 10, 15, 25, 50, 72, 100],
      currentEntries: 10,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: "",
      searchEntries: [],
      col: {
        id: "",
        productName: "",
        discount: "",
      },
      sortcol: {
        id: "",
        productName: "",
        discount: "",
      },
      check: null,
      listCampaignDetail: [],
    };
  },
  computed: {
    showInfo() {
      return $array.show(
        this.getCurrentEntries(),
        this.currentPage,
        this.currentEntries
      );
    },
    showPagination() {
      return $array.pagination(this.allPages, this.currentPage, 2);
    },
    tableHeader() {
      return this.columns;
    },
    tableData() {
      return this.filteredEntries;
    },
  },
  created() {
    getCampaignDetailById(this.campId).then((res) => {
      console.log(res);
      this.entries = res;
      this.paginateData(this.entries);
    });
  },
  methods: {
    paginateEntries() {
      if (this.searchInput.length > 0) {
        this.searchEntries = $array.search(this.entries, this.searchInput);
        this.paginateData(this.searchEntries);
      } else {
        this.searchEntries = [];
        this.paginateData(this.entries);
        this.col = {
          id: "",
          productName: "",
          discount: "",
        };
      }
    },
    paginateEvent(page) {
      this.currentPage = page;
      this.paginateEntries();
    },
    searchEvent() {
      (this.currentPage = 1), this.paginateEntries();
    },
    paginateData(data) {
      this.filteredEntries = $array.paginate(
        data,
        this.currentPage,
        this.currentEntries
      );
      this.allPages = $array.pages(data, this.currentEntries);
    },
    getCurrentEntries() {
      return this.searchInput.length <= 0 ? this.entries : this.searchEntries;
    },
    uniqColumData(column) {
      return $array.unique(this.getCurrentEntries(), column);
    },
    filterByColumn() {
      const filterCol = $object.removeBy(this.col, "");

      let filterData = this.getCurrentEntries();
      if (Object.entries(filterCol).length >= 1) {
        filterData = $array.filtered(this.getCurrentEntries(), filterCol);
      }
      this.paginateData(filterData);
    },
    sortByColumn(column) {
      this.col = {
        id: "",
        productName: "",
        discount: "",
      };
      let sortedEntries = this.getCurrentEntries();
      let sortedByColumn = this.sortcol[column];
      if (sortedByColumn === "") {
        this.sortcol[column] = "asc";
        sortedEntries = $array.sorted(this.getCurrentEntries(), column, "asc");
        this.check = false;
      } else if (sortedByColumn === "asc") {
        this.sortcol[column] = "desc";
        sortedEntries = $array.sorted(this.getCurrentEntries(), column, "desc");
        this.check = true;
      } else if (sortedByColumn === "desc") {
        this.sortcol[column] = "";
        this.check = null;
      }
      this.paginateData(sortedEntries);
    },
    formatDate(data) {
      if (data == null) return "Chưa nhận";
      let date = moment(String(data)).format("DD/MM/YYYY");
      return date;
    },
    countinueCampaign() {
      let self = this;
      if (this.tableData.length == 0) {
        this.$swal("Thất bại", "Vui lòng tạo chi tiết chiến dịch", "error");
      } else {
        this.$swal({
          title: "Bạn có chắc chắn muốn tạo chiến dịch không ?",
          text: ``,
          type: "question",
          icon: "question",
          showCancelButton: true,

          confirmButtonText: "Đồng ý",
          cancelButtonText: "Quay lại",
          closeOnConfirm: false,
          closeOnCancel: false,
        }).then((result) => {
          if (result.isConfirmed) {
            finishCampaign(this.campId)
              .then((res) => {
                console.log(res);
                self.$swal("Thành công", res, "success").then(function () {
                  self.$router.push("/admin/campaign/finish");
                });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
.product-header {
  text-align: center;
}
.action {
  display: flex;
  justify-content: center;
}
.action > div {
  padding: 0 0.4rem;
}
.table-value {
  text-align: center;
}

/* customer modal */
.header-modal-customer {
  position: relative;
}

.button-show-modal-out {
  position: absolute;
  left: 100%;
  bottom: 100%;
  transform: translate(-50%, -50%);
}

@import url("@/assets/css/modal.css");
@import url("@/assets/css/admin-product-receipt.css");

.m-admin-product-action-search > form > input {
  width: 30rem;
  height: 3.1rem;
  border: 1px solid rgba(129, 127, 127, 0.329);
  padding: 1rem;
}
</style>
