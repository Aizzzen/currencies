import React from 'react';
import './Search.css';

const Search = ({handleSearch}) => {
    return (
        <div className="currency-search">
            <h2 className="currency-text">Поиск валюты</h2>
            <form>
                <input type='text' placeholder='Введите название' className='currency-input' onChange={handleSearch}/>
            </form>
        </div>
    );
};

export default Search;