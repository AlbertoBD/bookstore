import React from 'react';


const SearchBox = ({onChange, value}) => {
    return (
    <div className="form-group mb-3 search-box">
        <input type="search"
        id="form1" className="form-control" 
        placeholder="Cauta o carte..." 
        aria-label="Search" 
        onChange={onChange} 
        value={value}/>
    </div>
    )
}

export default SearchBox