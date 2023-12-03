<template>
  <div>
    <div class="container mt-4" v-if="getListComment.length > 0">
      <hr />
      <div><h4>Danh sách đánh giá</h4></div>
      <hr />

      <div v-for="cmt in getListComment" :key="cmt.id">
        <div class="cmt-username">
          <div>
            <h5>{{ cmt.userName }}</h5>
          </div>
          <div>
            <span>{{ formatDate(cmt.cmtDatetime) }}</span>
          </div>
        </div>
        <div>
          <div class="cmt-stars">
            <el-rate v-model="cmt.stars" disabled> </el-rate>
          </div>
          <div class="cmt-title">
            <h6>{{ cmt.title }}</h6>
          </div>
          <div class="cmt-content">
            {{ cmt.context }}
          </div>
        </div>
        <hr />
        <!-- phân trang -->
      </div>
      <div class="col-12">
        <div style="width: 100%; text-align: center">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="comment.totalPages"
            :page-size="1"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="container mt-4" v-if="getListComment.length == 0">
      <hr />
      <div><h4>Danh sách đánh giá</h4></div>
      <hr />
      <h6>Chưa có đánh giá nào !</h6>
      <hr />
    </div>
  </div>
</template>

<script>
import { getAllComment } from "@/service/user/product-detail";
import moment from "moment";
export default {
  props: ["productId"],
  created() {
    this.callApiGetComment(1, 3);
  },
  data() {
    return {
      listComment: [],
      comment: {},
    };
  },
  computed: {
    getListComment() {
      return this.listComment;
    },
  },
  methods: {
    callApiGetComment(page, limit) {
      let data = `/${this.productId}?page=${page}&limit=${limit}`;
      getAllComment(data)
        .then((res) => {
          this.comment = res;
          this.listComment = res.content;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCurrentChange(val) {
      this.callApiGetComment(val, 3);
    },
    formatDate(data) {
      if (data == null) return "Chưa nhận";
      let date = moment(String(data)).format("DD/MM/YYYY HH:mm:ss");
      return date;
    },
  },
};
</script>

<style lang="css" scoped></style>
