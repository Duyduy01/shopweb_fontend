import SockJS from "sockjs-client";
import Stomp from "stompjs";
import store from '../store/index.js'
import { getHost } from "@/service/get-host";

const url = getHost();

var socket = new SockJS(`${url}/connect`);
var stompClient = Stomp.over(socket);

function connectWS(store) {
  stompClient.connect({}, function (frame) {
    stompClient.subscribe("/topic/messages", function (message) {
      const newBillAdded = JSON.parse(message.body);
      console.log(newBillAdded)
      store.dispatch("addBill", newBillAdded);
    });
  });
}

connectWS(store);

// Gửi tin nhắn tới backend
export function sendBillAdded(billId) {
  if (stompClient != null) {
    stompClient.send("/ws/billAdded", {}, JSON.stringify({ billId: billId }));
  }
}

//dóng kết nối
export function stopTask() {
  if (stompClient != null) {
    stompClient.send("/ws/stop");
  }
}
