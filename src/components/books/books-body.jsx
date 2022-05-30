import React, { useState } from 'react'
import Pagination from '../common/pagination'
import { paginate } from '../../utils/paginate'
import PaginateProducts from '../../utils/paginated'



export default function BooksBody({ books, genres, currentGenre }) {
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const paginatedGenres = paginate(genres, page, pageSize)

    // when user search, if no product meets critearia
    if (books.length === 0) {
        return <div className="empty_books">Nu a fost gasita nici o carte!</div>
    }

    // showing only a cattegory of product
    if (currentGenre !== "Toate genurile") {
        return (
            <div className="books-body">
                <h2 className="product_name">{currentGenre}</h2>
                <PaginateProducts products={books} category={currentGenre} />
            </div>
        )
    }

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
