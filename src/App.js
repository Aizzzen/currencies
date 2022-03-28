import React, {useEffect, useState} from 'react';
import {Routes, Route, Redirect, Navigate} from 'react-router-dom';
import './App.css';
import Selected from "./components/Selected/Selected";
import axios from "axios";
import Main from "./components/Main/Main";

export default function App() {
    const [apiDate, setApiDate] = useState({})
    const [valutes, setValutes] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
            .get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => {
                setApiDate(response.data.Date)
                setValutes(response.data.Valute)
            })
            .catch(error => console.log(error))
    },[])

    const handleSearch = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const filteredCurrencies = Object.values(valutes).filter(currency =>
        currency.Name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="App">
            <div className='currency-app'>
                <Routes>
                    <Route path='/' element={<Main handleSearch={handleSearch} filteredCurrencies={filteredCurrencies} apiDate={apiDate}/>} />
                    <Route path='/selected/:id' element={<Selected filteredCurrencies={filteredCurrencies} apiDate={apiDate} />}/>
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
                <div className='api-container'>
                    <a href="https://www.cbr-xml-daily.ru/" target="_blank">Курсы валют, API</a>
                </div>
            </div>
        </div>
    );
}
