<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import {
  planetChartData,
  getTotalPriceBillByMonth,
  getTotalPriceReceiptByMonth,
} from "@/service/admin/chart.js";
export default {
  name: "PlanetChart",
  data() {
    return {
      month: [],
      dataBill: [],
      dataReceipt: [],
    };
  },
  created() {
    getTotalPriceBillByMonth().then((res) => {
      res.forEach((e) => {
        this.month.push("Tháng " + e.month);
        this.dataBill.push(e.totalPrice);
      });
      getTotalPriceReceiptByMonth().then((res) => {
        res.forEach((e) => {
          this.dataReceipt.push(e.totalPrice);
          const ctx = document.getElementById("planet-chart");
          new Chart(
            ctx,
            planetChartData(this.month, this.dataReceipt, this.dataBill)
          );
        });
      });
    });
  },
  mounted() {},
  methods: {
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
  },
};
</script>
