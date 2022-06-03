import http from "./httpService";
import apiUrl  from "../config.json";


export async function getBooks() {
  const response = await http.get(apiUrl.apiUrl + "/products");
  return response.data;
};

export async function getBook(bookId) {
  const response = await http.get(apiUrl.apiUrl + "/products/" + bookId);
  return response.data;
};