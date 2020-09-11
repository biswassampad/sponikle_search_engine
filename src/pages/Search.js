import React from 'react'
import './searchPage.css';
import {Link} from 'react-router-dom';

import ImageIcon from '@material-ui/icons/Image';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from "../stateProvider";
import SearchEngine from "../SearchEngine";
import Search from "../components/Search";
// import Response from './response';

function SearchPage() {
    const [{ term },dispatch] = useStateValue();

    const {data} = SearchEngine(term);

    // const data = Response
    console.log(data);

    return (
        <div className="searchPage">
                <div className="search__pageHeader">
                    <Link to="/"><h1 className="search__pageLogo">Sponikle</h1></Link>
                    <div className="searc__pageHeaderBody">
                    <Search hideButtons term/>
                    <div className="search_pageOptions">
                        <div className="search_pageOptionsLeft">
                            <div className="search_pageOption">
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                            </div>
                            <div className="search_pageOption">
                            <ImageIcon/>
                            <Link to="/all">Images</Link>
                            </div>
                        </div>
                        <div className="search_pageOptionsRight">
                        <div className="search_pageOption">
                            <Link to="/report">Report Search</Link>
                            </div>
                            <div className="search_pageOption">
                            <Link to="/help">Help</Link>
                            </div>
                            <div className="search_pageOption">
                            <Link to="/ratings">Ratings</Link>
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
                </div>
                {
                    true     && (
                        
                    <div className="search_pageResults">
                            <p className="search_pageResultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term} 
                                </p>    

                            {data?.items.map(item=>(
                                <div className="search_pageResult">
                                    <a href={item.link} className={"searchPage_resultTitle"}>
                                        {item.pagemap ?.cse_image?.length > 0 && item.pagemap ?.cse_image[0]?.src &&(
                                            <img src={item.pagemap ?.cse_image[0]?.src} alt="" className="searchPage_resultImage"/>
                                        )}
                                        <h2 className="SearchTitle">{item.title}</h2></a>
                            <a href={item.link} className={'searchPage_resultLink'}>{item.displayLink} 😊</a>
                            <p className="searchPage_resultSnippet">{item.snippet}</p>
                                </div>
                            ))}
                    </div>
                    )
                }
        </div>
    )
}

export default SearchPage
