import React from 'react';
import SearchBar from "../../components/SeachBar/SearchBar";
import './Home.scss'

const Home = () => {
    return (
        <div className={'top'}>
            <h1>My Dashboard</h1>
            <SearchBar/>
        </div>
    );
};

export default Home;
