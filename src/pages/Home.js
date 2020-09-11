import React from 'react';
import './Home.css';

import {Link} from 'react-router-dom';

import Search from '../components/Search';

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerleft">
                <Link to="/about">About</Link>
                <Link to="/apps">Apps</Link>
                </div>
                <div className="home_headerright">
                <Link to="/email">Email</Link>
                <Link to="/images">Images</Link>
                {/*Icon*/}
                {/*Avatar*/}
                </div>
            </div>
            <div className="home_body">
                <div className="home_inputContainer">
                    <Search hideButtons></Search>
                </div>
            </div>
        </div>
    )
}

export default Home
