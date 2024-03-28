import SockJS from "sockjs-client";
import Stomp from "stompjs";
import store from "../store/index.js";
import { getHost } from "@/service/get-host";

const url = getHost();

var stompClient = null;

//connect ws
export function connectWS(store) {
  let socket = new SockJS(`${url}/connect`);
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
    stompClient.subscribe("/topic/new-billAdded", function (message) {
      const newBillAdded = JSON.parse(message.body);
      store.dispatch("addBill", newBillAdded);
    });
  });
}

// Gửi tin nhắn tới backend
export function sendBillAdded(billId) {
  if (stompClient !== null) {
    stompClient.send("/ws/billAdded", {}, JSON.stringify({ billId: billId }));
  }
}

//disconnect ws
export function stopTask() {
  if (stompClient !== null) {
    stompClient.send("/ws/stop");
  }
}

export function disconnectWS() {
  if (stompClient !== null) {
    stompClient.disconnect();
  }
}
