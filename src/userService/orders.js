import http from "./httpService";
import apiUrl  from "../config.json";

export async function getOrders() {
    const response = await http.get(apiUrl.apiUrl + "/orders/me", {withCredentials: true});
    return response.data;
}

export async function getOrder(id) {
    const response = await http.get(apiUrl.apiUrl + "/orders/" + id, {withCredentials: true});
    return response.data;
}