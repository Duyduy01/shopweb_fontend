<template>
  <div>
    <input
      class="form-control"
      type="text"
      v-model="displayValue"
      @blur="isInputActive = false"
      @focus="isInputActive = true"
      placeholder="Vui lòng nhập giá bán"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInputActive: false,
    };
  },
  props: ["value"],
  computed: {
    displayValue: {
      get: function () {
        if (this.isInputActive) {
          return this.value.toString();
        } else {
          return (
            "VND " +
            this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
          );
        }
      },
      set: function (modifiedValue) {
        let newValue = parseFloat(modifiedValue.replace(/[^\d.]/g, ""));

        if (isNaN(newValue)) {
          newValue = 0;
        }

        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 90%;
  height: 2.5rem;
}
</style>
