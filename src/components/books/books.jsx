import React, { useState, useEffect } from 'react'
import "./books.css"
import Navbar from '../landing/navbar'
import SearchBox from '../common/searchBox'
import ListGroup from '../common/listGroup'
import BooksBody from './books-body'
import { getBooks } from './books-data'
import  getGenres from './genre-data'
import Pagination from '../common/pagination'


export default function Books() {
    const [search, setSearch] = useState("");
    
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
        if (genre === "Toate genurile") {
            setBooks(booksCopy);
        }
        else {
            const filteredBooks = booksCopy.filter(book => book.genre === genre);
            setBooks(filteredBooks);
        }
    };


    useEffect(() => {
        const genresData = getGenres();
        setGenres(genresData);
        setGenresCopy(genresData);

        const booksData = getBooks();
        setBooks(booksData);
        setBooksCopy(booksData);
    }, []);


    return (
        <>
            <SearchBox onChange={handleSearch} value={search} />
            <ListGroup currentGenre={currentGenre} onGenreChange={handleGenreChange} genres={genres} />
            <BooksBody books={books} genres={genres} currentGenre={currentGenre} page={page} setPage={setPage} pageSize={pageSize}/>
            <Pagination itemsCount={genres.length} pageSize={pageSize} currentPage={page} onPageChange={setPage} />
        </>
    )
}
