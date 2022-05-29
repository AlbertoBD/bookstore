import _ from "lodash";
import {useState} from "react";

export function paginateBooks(items, genreName, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // return items that match the genreName
    const filteredItems = _.filter(items, (item) => {
        return item.genre === genreName;
    })

    const data = _(filteredItems)
        .slice(startIndex)
        .take(pageSize)
        .value();
    return data
}   