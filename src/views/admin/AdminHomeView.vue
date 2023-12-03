<template>
  <div>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ info.billCount }}</h3>
                <p>Đơn đặt</p>
              </div>
              <div class="icon">
                <font-awesome-icon icon="fas fa-money-bill" />
              </div>
              <a href="#" class="small-box-footer"
                >Xem chi tiết <i class="fas fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>{{ info.ratio }}<sup style="font-size: 20px">%</sup></h3>

                <p>Giao hàng thành công</p>
              </div>
              <div class="icon">
                <font-awesome-icon icon="fas fa-percentage" />
              </div>
              <a href="#" class="small-box-footer"
                >Xem chi tiết <i class="fas fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>{{ info.quantity }}</h3>
                <p>Kho</p>
              </div>
              <div class="icon">
                <font-awesome-icon icon="fas fa-warehouse" />
              </div>
              <a href="#" class="small-box-footer"
                >Xem chi tiết <i class="fas fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>{{ info.userCount }}</h3>

                <p>Khách hàng</p>
              </div>
              <div class="icon">
                <font-awesome-icon icon="fas fa-users" />
              </div>
              <a href="#" class="small-box-footer"
                >Xem chi tiết <i class="fas fa-arrow-circle-right"></i
              ></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-7 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-chart-pie mr-1"></i>
                   Biểu đồ doanh số theo tháng
                </h3>
                <div class="card-tools">
                  <ul class="nav nav-pills ml-auto">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#revenue-chart"
                        data-toggle="tab"
                        >{{ year.getFullYear() }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content p-0">
                  <!-- Morris chart - Sales -->
                  <div
                    class="chart tab-pane active"
                    id="revenue-chart"
                    style="position: relative; height: 400px"
                  >
                    <PlanetChart />
                  </div>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <section class="col-lg-5 connectedSortable">
            <!-- Map card -->
            <div class="card bg-gradient-primary">
              <div class="card-header border-0">
                <h3 class="card-title">
                  <i class="fas fa-map-marker-alt mr-1"></i>
                  Biểu đồ tình trạng đơn hàng theo tháng
                </h3>
                <!-- card tools -->
                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm daterange"
                    title="Date range"
                  >
                    <i class="far fa-calendar-alt"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <!-- /.card-tools -->
              </div>
              <div class="card-body">
                <div
                  id="world-map"
                  style="height: 400px; width: 100%; background-color: #fff"
                >
                  <RoundChart />
                </div>
              </div>
              <!-- /.card-body-->
            </div>
            <!-- /.card -->

            <!-- solid sales graph -->
          
            <!-- /.card -->

            <!-- Calendar -->
            <div class="card bg-gradient-success">
              <div class="card-header border-0">
                <h3 class="card-title">
                  <i class="far fa-calendar-alt"></i>
                  Lịch
                </h3>
                <!-- tools card -->
                <div class="card-tools">
                  <!-- button with a dropdown -->
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-success btn-sm dropdown-toggle"
                      data-toggle="dropdown"
                      data-offset="-52"
                    >
                      <i class="fas fa-bars"></i>
                    </button>
                    <div class="dropdown-menu" role="menu">
                      <a href="#" class="dropdown-item">Add new event</a>
                      <a href="#" class="dropdown-item">Clear events</a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">View calendar</a>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-card-widget="remove"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <!-- /. tools -->
              </div>
              <!-- /.card-header -->
              <div class="card-body pt-0">
                <!--The calendar -->
                <div id="calendar" style="width: 100%">
                       <el-calendar v-model="datanow">
                      </el-calendar>
                </div>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </section>
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import { getInforHomeAdmin } from "@/service/admin/homeAdmin";
import PlanetChart from "@/views/admin/PlanetChart.vue";
import RoundChart from "@/views/admin/RoundChartView.vue";
export default {
  components: {
    PlanetChart,
    RoundChart,
  },
  data() {
    return {
      info: {},
      year: new Date(),
      datanow: new Date()
    };
  },
  created() {
    getInforHomeAdmin()
      .then((res) => {
        console.log(res)
        this.info = res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    name() {
      return this.data;
    },
  },
  methods: {},
};
</script>

<style scoped>
/* @import url("@/assets/plugins/fontawesome-free/css/all.min.css");
@import url("@/assets/dist/css/adminlte.css");
@import url("@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css");
@import url("@/assets/plugins/daterangepicker/daterangepicker.css");
@import url("@/assets/plugins/summernote/summernote-bs4.min.css"); */
</style>
