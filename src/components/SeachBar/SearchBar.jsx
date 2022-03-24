import React, {useState} from 'react';
import './SearchBar.scss'
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
    const [value,setValue] = useState("");
    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={'Search book titles, authors, publishers...'}
                    value={value}
                    onChange={(e)=> setValue(e.target.value)}
                />
                <div className="searchIcon">
                    <button type={'submit'} onClick={()=>console.log(value)}>
                        <FaSearch/>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SearchBar;
