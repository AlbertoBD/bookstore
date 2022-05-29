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
    const [currentGenre, setCurrentGenre] = useState("AllGenre");
    const [genres, setGenres] = useState([]);
    const [books, setBooks] = useState([]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleGenreChange = (genre) => {
        setCurrentGenre(genre);
    };

    useEffect(() => {
        setGenres(getGenres());
        setBooks(getBooks());
    }, []);

    return (
        <>
            <Navbar />
            <SearchBox onChange={handleSearch} value={search} />
            <ListGroup currentGenre={currentGenre} onGenreChange={handleGenreChange} genres={genres} />
            <BooksBody books={books} genres={genres}/>
        </>
    )
}
