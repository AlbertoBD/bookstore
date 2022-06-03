import React, { useState, useEffect } from 'react'
import "./books.css"
import { Spinner } from 'react-bootstrap'
import SearchBox from '../common/searchBox'
import ListGroup from '../common/listGroup'
import BooksBody from './books-body'
import { getBooks } from "../../userService/books"
import {getGenres} from '../../userService/genres'
import Pagination from '../common/pagination'


export default function Books() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const [currentGenre, setCurrentGenre] = useState("Toate genurile");
    const [genres, setGenres] = useState([]);
    const [genresCopy, setGenresCopy] = useState([]);

    const [books, setBooks] = useState([]);
    const [booksCopy, setBooksCopy] = useState([]);

    const [page, setPage] = useState(1);
    const pageSize = 2;


    const handleSearch = (e) => {
        setSearch(e.target.value);

        let lowerCase = e.target.value.toLowerCase();

        if (lowerCase.length > 0) {  // when user types in search box modify the currentGenre to all genres
            setCurrentGenre("Toate genurile");
            setPage(1);
        };

        if (lowerCase.length === 0) {
            setBooks(booksCopy);
            setCurrentGenre("Toate genurile");
        };

        const result = booksCopy.filter(m => m.title.toLowerCase().includes(lowerCase));

        if (result.length === 1) {
            setCurrentGenre(result[0].genre);
        }
        else {
            let genreInSearch = result.map(m => m.genre);
            let uniqueGenresInSearch = genreInSearch.filter((v, i, a) => a.indexOf(v) === i);
            let uniqueGenres = genresCopy.filter(g => uniqueGenresInSearch.includes(g.name));
            setGenres(uniqueGenres);
        }
        setBooks(result);
    };


    const handleGenreChange = (genre) => {
        setCurrentGenre(genre);
        setSearch("");
        setPage(1);
        if (genre === "Toate genurile") {
            setBooks(booksCopy);
        }
        else {
            const filteredBooks = booksCopy.filter(book => book.genre === genre);
            setBooks(filteredBooks);
        }
    };


    useEffect(() => {
        (async () => {
            try {
                const books = await getBooks();
                const genres = await getGenres();
                setBooks(books);
                setBooksCopy(books);
                setGenres(genres);
                setGenresCopy(genres);
                
                setTimeout(() => {
                    setLoading(false);
                }, 300)
            }
            catch (error) {}
        })()
    }, []);

    if (loading) {
        return (
            <div className="cart-spinner">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }


    return (
        <>
            <SearchBox onChange={handleSearch} value={search} />
            <ListGroup currentGenre={currentGenre} onGenreChange={handleGenreChange} genres={genres} />
            <BooksBody books={books} genres={genres} currentGenre={currentGenre} page={page} setPage={setPage} pageSize={pageSize} />
            <Pagination itemsCount={genres.length} pageSize={pageSize} currentPage={page} onPageChange={setPage} />
        </>
    )
}
