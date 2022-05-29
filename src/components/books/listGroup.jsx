import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function ListGroup({ currentGenre, onGenreChange, genres }) {
    return (
        <>
            <DropdownButton id="dropdown-basic-button" className="list-group" title={currentGenre}>
                {genres.map(genre => {
                    return (
                        <Dropdown.Item key={genre._id} onClick={() => onGenreChange(genre.name)}>{genre.name}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </>
    );
}
