import React,{useState} from 'react'
import './Search.css';
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import {Button} from '@material-ui/core';
import {useStateValue} from '../stateProvider';
import {actionTypes} from "../reducer";

function Search({hideButtons = false,value}) {
    const [{},dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault()
        console.log('search query',input);

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })

        history.push('/search');
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className='search__inputIcon' />
                    <input value={input} onChange={e=>setInput(e.target.value)} value={value} placeholder="What's in your mind today...."/>
            </div>
            {!hideButtons ? (
                
            <div className="search__buttons">
            <Button type="submit" onClick={search}>Search</Button>
        </div>
            ):(
              <div className="search__buttonsHidden">
            <Button type="submit" onClick={search}>Search</Button>
        </div>
            )}
        </form>
    )
}

export default Search
