export function toMoney(totalprice) {
  var formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  // Thay thế ký hiệu tiền tệ VND thành ₫
  return formatter.format(totalprice).replace("VND", "₫");
}
