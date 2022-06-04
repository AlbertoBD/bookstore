import http from "../userService/httpService";
import apiUrl  from "../config.json";


export async function updateOrder(id) {
    try {
        await http.put(apiUrl.apiUrl+ "/orders/" + id, {}, {
            withCredentials: true
        });
        window.location.reload();
    }
    catch (error) {
        return null
    }
}

export async function getOrders() {
    try {
        const { data: orders } = await http.get(apiUrl.apiUrl+ "/orders", {
            withCredentials: true
        });
        return orders;
    }
    catch (error) {
        return null
    }
}