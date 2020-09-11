import React,{useState} from 'react'
import './Search.css';

import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';

function Search() {

    const [input,setInput] = useState("");
    const search = e => {
        e.preventDefault()
    }
    return (
        <div className="search">
            <h1>Sponikle</h1>
            <div className="search__input">
                <SearchIcon className='search__inputIcon' />
                    <input value={input} onChange={e=>setInput(e.target.value)}/>
            </div>
            <div className="search__buttons">
                <Button onClick={search}>Search</Button>
            </div>
        </div>
    )
}

export default Search
