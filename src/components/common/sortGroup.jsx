import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function SortGroup({ onSort }) {
    const options = [
        {path: "title", order: "asc", label: "Titlu (asc)"},
        {path: "title", order: "desc", label: "Titlu (desc)"},
        {path: "price", order: "asc", label: "Pret (asc)"},
        {path: "price", order: "desc", label: "Pret (desc)"},
    ]
    return (
        <>
            <DropdownButton id="dropdown-basic-button" className="list-group" title="Sorteaza">
                {options.map(option => {
                    return <Dropdown.Item key={option.label} onClick={() => onSort(option)}>{option.label}</Dropdown.Item>
                })}
            </DropdownButton>
        </>
    );
}