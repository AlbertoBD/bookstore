import React, { useState } from 'react'
import Pagination from '../common/pagination'
import { paginate } from '../../utils/paginate'
import PaginateProducts from '../../utils/paginated'



export default function BooksBody({ books, genres }) {
    const [page, setPage] = useState(1);
    const pageSize = 3;

    const paginatedGenres = paginate(genres, page, pageSize);

    return (
        <>
            <div className="books-body">
                {paginatedGenres.map(genre => {
                    return (
                        <>
                            <h2 className="product_name">{genre.name}</h2>
                            <PaginateProducts products={books} category={genre.name}/>
                        </>
                    )
                })}
            </div>
            <Pagination itemsCount={genres.length} pageSize={pageSize} currentPage={page} onPageChange={setPage} />
        </>
    )
}
