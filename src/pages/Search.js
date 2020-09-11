import React from 'react'
import './searchPage.css';

import {useStateValue} from "../stateProvider";
import SearchEngine from "../SearchEngine";

function Search() {
    const [{ term },dispatch] = useStateValue();

    const {data} = SearchEngine(term);
    console.log(data);

    return (
        <div className="searchPage">
                <div className="search__pageHeader">
                    <h1>{term}</h1>
                </div>
                <div className="search_pageResult">

                </div>
        </div>
    )
}

export default Search
