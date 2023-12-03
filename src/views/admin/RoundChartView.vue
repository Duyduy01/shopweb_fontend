<template>
  <div>
    <canvas id="round-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import { roundChartData } from "@/service/admin/chart.js";
export default {
  name: "RoundChart",
  data() {
    return {
      month: [],
      dataBill: [],
      dataReceipt: [],
    };
  },
  created() {},
  mounted() {
    const ctx = document.getElementById("round-chart");
    new Chart(ctx, roundChartData());
  },
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
