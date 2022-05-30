import React, { useState, useEffect } from 'react'
import "./books.css"
import Navbar from '../landing/navbar'
import SearchBox from './searchBox'
import ListGroup from './listGroup'
import BooksBody from './books-body'
import { getBooks } from './books-data'
import  getGenres from './genre-data'


export default function Books() {
    const [search, setSearch] = useState("");
    const [currentGenre, setCurrentGenre] = useState("Toate genurile");
    const [genres, setGenres] = useState([]);
    const [genresCopy, setGenresCopy] = useState([]);
    const [books, setBooks] = useState([]);
    const [booksCopy, setBooksCopy] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        let lowerCase = e.target.value.toLowerCase();

        // when user types in search box modify the currentGenre to all genres
        if (lowerCase.length > 0) {
            setCurrentGenre("Toate genurile");
        };

        if (lowerCase.length === 0) {
            setBooks(booksCopy);
            setCurrentGenre("Toate genurile");
        }

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
            <Navbar />
            <SearchBox onChange={handleSearch} value={search} />
            <ListGroup currentGenre={currentGenre} onGenreChange={handleGenreChange} genres={genres} />
            <BooksBody books={books} genres={genres} currentGenre={currentGenre}/>
        </>
    )
}
