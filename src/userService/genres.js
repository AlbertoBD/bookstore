import http from "./httpService";
import apiUrl  from "../config.json";

export async function getGenres() {
    const response = await http.get(apiUrl.apiUrl + "/genres");
    return response.data;
};

export async function getGenre(genreId) {
    const response = await http.get(apiUrl.apiUrl + "/genres/" + genreId);
    return response.data;
};