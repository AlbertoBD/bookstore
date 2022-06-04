import http from "../userService/httpService";
import apiUrl  from "../config.json";
import { toast } from "react-toastify";


export async function addBook(book) {
    const { data } = await http.post(apiUrl.apiUrl + "/products", book, {
        withCredentials: true
    });
    return data;
}

export async function updateBook(id, book) {
    const { data } = await http.put(apiUrl.apiUrl + "/products/" + id, book, {
        withCredentials: true
    });
    return data;
}

export async function deleteBook(bookId) {
    try {
        const { data } = await http.delete(apiUrl.apiUrl + "/products/" + bookId, {
            withCredentials: true
        });
        window.location.reload();
    }
    catch (ex) {
        toast.error("Error deleting book");
    }
}