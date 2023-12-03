<template>
  <div>
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
          <tr>
            <td></td>
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc tên ...."
                v-model="col.fullName"
                @keyup="filterByColumn"
              />
            </td>
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc số điện thoại ...."
                v-model="col.phone"
                @keyup="filterByColumn"
              />
            </td>
            <td>
              <input
                type="search"
                class="input"
                placeholder="Lọc email ...."
                v-model="col.email"
                @keyup="filterByColumn"
              />
            </td>
            <!-- <td><input type="search" class="input" placeholder="Filter name...." v-model="col.productCode"></td> -->

            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.gender"
                @change="filterByColumn"
              >
                <option value="">--Lọc giới tính--</option>
                <option
                  v-for="ac in uniqColumData('gender')"
                  :key="ac"
                  :value="ac"
                >
                  <div v-if="ac == null">Chưa cập nhập</div>
                  <div v-if="ac == 1">Nam</div>
                  <div v-if="ac == 2">Nữ</div>
                </option>
              </select>
            </td>
            <td></td>
            <td></td>
            <td>
              <select
                name=""
                class="select"
                id=""
                v-model="col.status"
                @change="filterByColumn"
              >
                <option value="">--Lọc trạng thái--</option>
                <option
                  v-for="ac in uniqColumData('status')"
                  :key="ac"
                  :value="ac"
                >
                  <div v-if="ac == 1">Hoạt động</div>
                  <div v-if="ac == -1">Không hoạt động</div>
                </option>
              </select>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(td, index) in tableData" :key="td.id">
            <td>{{ index + 1 }}</td>
            <td>{{ td.fullName }}</td>
            <td>{{ td.phone }}</td>
            <td>{{ td.email }}</td>
            <td>{{ renderGender(td.gender) }}</td>
            <td>{{ formatDate(td.birthday) }}</td>
            <td v-html="renderType(td.type, td.status)"></td>
            <td>
              <el-switch v-model="td.boolActive" @change="updateStatus(td)">
              </el-switch>
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
  </div>
</template>

<script>
import { $array, $object } from "alga-js";
import { getUserManager, updateUserManager } from "@/service/admin/userManager";
import moment from "moment";
export default {
  props: ["userIndex"],
  name: "AdminProduct",
  components: {
    // TalbeBase,
  },
  data() {
    return {
      columns: [
        { name: "id", text: "ID" },
        { name: "fullName", text: "Họ và tên" },
        { name: "phone", text: "Số điện thoại" },
        { name: "email", text: "Email" },
        { name: "gender", text: "Giới tính" },
        { name: "birthday", text: "Ngày sinh" },
        { name: "type", text: "Xác nhận" },
        { name: "status", text: "Trạng thái" },
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
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        birthday: "",
        type: "",
        status: "",
      },
      sortcol: {
        id: "",
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        birthday: "",
        type: "",
        status: "",
      },
      check: null,
      listEntriesChild: [],
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
      console.log(this.filteredEntries);
      return this.filteredEntries;
    },
  },
  created() {
    getUserManager(this.userIndex).then((res) => {
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
          fullName: "",
          phone: "",
          email: "",
          gender: "",
          birthday: "",
          type: "",
          status: "",
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
        fullName: "",
        phone: "",
        email: "",
        gender: "",
        birthday: "",
        type: "",
        status: "",
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
    renderGender(gender) {
      if (gender == null) return "Chưa cập nhập";
      if (gender == 1) return "Nam";
      if (gender == 2) return "Nữ";
    },
    formatDate(data) {
      if (data == null) return "Chưa cập nhập";
      let date = moment(String(data)).format("DD/MM/YYYY");
      return date;
    },
    renderType(type, status) {
      if (type == "ACTIVE" && status == 1)
        return `<button type="button" class="btn btn-success">ACTIVE</button>`;
      else
        return `<button type="button" class="btn btn-warning">INACTIVE</button>`;
    },
    updateStatus(user) {
      let self = this;
      updateUserManager(user.id)
        .then((res) => {
          user.status = res;
          // console.log(res.data);
        })
        .catch((err) => {
          self.$swal("Thất bại", err.response.data.message, "error");
        });
    },
  },
  mounted() {},
};
</script>

<style lang="css" scoped></style>
