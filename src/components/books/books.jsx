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
    const [books, setBooks] = useState([]);
    const [booksCopy, setBooksCopy] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        let lowerCase = e.target.value.toLowerCase();

        if (lowerCase.length > 0) {
            setCurrentGenre("Toate genurile");
            setBooks(booksCopy);
        };

        const result = booksCopy.filter(m => m.title.toLowerCase().includes(lowerCase));
        if (result.length === 1) {
            setCurrentGenre(result[0].genre);
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
            const filteredGenres = booksCopy.filter(book => book.genre === genre);
            setBooks(filteredGenres);
        }
    };

    useEffect(() => {
        setGenres(getGenres());

        const data = getBooks();
        setBooks(data);
        setBooksCopy(data);
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
