import React from 'react'
import _ from 'lodash';

export default function Pagination({ itemsCount, pageSize, currentPage, onPageChange }) {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1)

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination paginate">
                {pages.map(page =>
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
                    </li>)}
            </ul>
        </nav>
    );
}
