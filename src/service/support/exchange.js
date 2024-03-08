export function toMoney(totalprice) {
  var formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(totalprice);
}
