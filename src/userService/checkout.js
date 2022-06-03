import http from "./httpService";
import  apiUrl  from "../config.json";

export async function checkout(order) {
  const cart = order.map(item => {
    return {
      _id: item._id,
      quantity: item.quantity
    };
  })
  const response = await http.post(apiUrl.apiUrl + "/cart", {cart}, {withCredentials: true});
  return response.data;
}