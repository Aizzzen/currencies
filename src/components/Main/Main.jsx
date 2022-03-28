import React from 'react';
import Search from "./Search/Search";
import CurrencyList from "./CurrencyList/CurrencyList";

const Main = ({handleSearch, filteredCurrencies, apiDate}) => {
    return (
        <div>
            <Search handleSearch={handleSearch}/>
            <CurrencyList filteredCurrencies={filteredCurrencies} apiDate={apiDate}/>
        </div>
    );
};

export default Main;