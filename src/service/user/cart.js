var axios = require("axios");
import { getHost } from "@/service/get-host";
let url = getHost();

export async function getAll() {
  try {
    const res = await axios.get(url + "/api/v3/user/cart", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// get all cart no login
export function getAllNologin(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v1/user/cart",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}
// add product local into cart
export async function addCartIntoLocal(data, token) {
  try {
    const res = await axios.post(url + "/api/v3/user/cart/localStorage", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

///

export function addCart(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v3/user/cart",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

export async function changQuantity(data) {
  try {
    const res = await axios.post(
      url + "/api/v3/user/cart/change/quantity",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function deleteProductByCart(data) {
  return new Promise((res, rej) => {
    var config = {
      method: "post",
      url: url + "/api/v3/user/cart/remove/product",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

// total element

export function getAllTotalitem() {
  return new Promise((res, rej) => {
    var config = {
      method: "get",
      url: url + "/api/v3/user/cart/total",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then(function (response) {
        res(response.data.data);
      })
      .catch(function (error) {
        rej(error);
      });
  });
}

export function sumMoney(listProduct) {
  let totalBill = 0;
  let totalBillPay = 0;
  let shippingCost = 0;

  listProduct.forEach((e) => {
    totalBill += e.totalPrice;
  });
  if (totalBill < 5000000 && totalBill > 0) {
    shippingCost = 30000;
    totalBillPay += shippingCost;
  }
  totalBillPay += totalBill;
  return { totalBill, shippingCost, totalBillPay };
}
