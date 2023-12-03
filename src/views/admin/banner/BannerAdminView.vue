<template>
  <div>
    <div class="product-header">
      <h1>Quản lý Banner</h1>
      <div class="m-admin-product-action-add button-show-modal" id="one"></div>
    </div>

    <el-tabs type="card" @tab-click="handleClick" v-model="bannerIdx">
      <el-tab-pane v-for="e in getListTitle" :key="e.id" :label="e.code">
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
                  </div>
                </th>
              </tr>
            </thead>
            <!-- content -->
            <tbody>
              <tr v-for="(td, index) in tableData" :key="td.id">
                <td>{{ index + 1 }}</td>
                <td>{{ td.bannerName }}</td>
                <td class="text-center">
                  <img
                    :src="td.img"
                    alt=""
                    height="200px"
                    style="object-fit: contain"
                  />
                </td>
                <td>
                  {{ td.bannerType }}
                </td>
                <td>
                  {{ td.number }}
                </td>
                <td>
                  {{ td.bannerLink }}
                </td>
                <td>
                  <div class="action">
                    <div
                      class="m-product-cart-button-clear m-admin-product-action-add button-show-modal"
                      id="one"
                    >
                      <button
                        class="clear-test"
                        type="button"
                        id="m-into-choose-product"
                        @click="editBanner(td)"
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
                <a
                  href="#"
                  class="nav-link"
                  @click.prevent="paginateEvent(pagi)"
                  >{{ pagi }}</a
                >
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { $array, $object } from "alga-js";

import { getAllAdminBanner } from "@/service/admin/banner.js";

export default {
  name: "AdminBanner",

  components: {
    // TalbeBase,
  },
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "bannerName", text: "Tên banner" },
        { name: "img", text: "Ảnh" },
        { name: "bannerType", text: "Loại" },
        { name: "bannerNumber", text: "Vị trí banner" },
        { name: "bannerLink", text: "Link" },
        { name: "#", text: "Hành động" },
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
        bannerName: "",
        img: "",
        bannerType: "",
        bannerNumber: "",
        bannerLink: "",
      },
      sortcol: {
        id: "",
        bannerName: "",
        img: "",
        bannerType: "",
        bannerNumber: "",
        bannerLink: "",
      },
      check: null,
      submitted: false,
      //   thay đổi
      // list parent cate
      listTitle: [],
      bannerIdx: "",

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
    getListTitle() {
      return this.listTitle;
    },
  },
  created() {
    getAllAdminBanner().then((res) => {
      this.listTitle = res;
      this.entries = this.listTitle[0].bannerEntities;
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
          bannerName: "",
          img: "",
          bannerType: "",
          bannerNumber: "",
          bannerLink: "",
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
        bannerName: "",
        img: "",
        bannerType: "",
        bannerNumber: "",
        bannerLink: "",
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
    // click
    handleClick() {
      this.entries = this.listTitle[this.bannerIdx].bannerEntities;
      this.paginateData(this.entries);
    },
    editBanner(banner) {
      let url = "/admin/banner/edit/" + banner.id;
      this.$router.push(url);
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
