import React, { useState } from 'react'
import _ from 'lodash'
import Pagination from '../common/pagination'
import { paginate } from '../../utils/paginate'
import SliderProducts from './sliderProducts'


export default function BooksBody({ books, genres, currentGenre }) {
    const [page, setPage] = useState(1);
    const pageSize = 5;

    const paginatedGenres = paginate(genres, page, pageSize);

    function filterProducts(products, category) {
        return _.filter(products, (product) => {
            return product.genre === category;
        })
    };

    // when user search, if no product meets critearia
    if (books.length === 0) {
        return <div className="empty_books">Nu a fost gasita nici o carte!</div>
    };

    // showing only a cattegory of product
    if (currentGenre !== "Toate genurile") {
        return (
            <div className="books-body">
                <h2 className="product_name">{currentGenre}</h2>
                <SliderProducts products={books} category={currentGenre} />
            </div>
        )
    };

    return (
        <>
            <div className="books-body">
                {paginatedGenres.map(genre => {
                    return (
                        <div key={genre._id}>
                            <h2 className="product_name">{genre.name}</h2>
                            <SliderProducts products={filterProducts(books, genre.name)} category={genre.name}/>
                        </div>
                    )
                })}
            </div>
            <Pagination itemsCount={genres.length} pageSize={pageSize} currentPage={page} onPageChange={setPage} />
        </>
    )
}
