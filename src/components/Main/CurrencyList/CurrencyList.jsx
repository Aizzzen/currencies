import React from 'react';
import Currencies from './Currencies/Currencies';
import './CurrencyList.css';

const CurrencyList = ({filteredCurrencies, apiDate}) => {
    let today = new Date(apiDate)
    let date = today.getDate() + '/' + '0' +(today.getMonth()+1) + '/' + today.getFullYear()

    return (
        <div>
            <h7 style={{marginBottom: '16px'}}>Актуальные данные на {date}</h7>
            <div className='currencyList-container'>
                <div className="currencyList-row">
                    <h4 style={{paddingLeft:'45px'}}>Код</h4>
                    <h4 style={{paddingLeft:'100px'}}>Название</h4>
                    <h4 style={{paddingLeft:'100px'}}>Номинал</h4>
                    <h4>Стоимость в рублях</h4>
                    <h4 style={{paddingRight:'15px'}}>Изменения</h4>
                </div>
            </div>
            <div>
                {filteredCurrencies.map(currency => {
                    return (
                        <Currencies
                            id={currency.ID}
                            charCode={currency.CharCode}
                            currencyValue={currency.Value}
                            currencyName={currency.Name}
                            currencyNominal={currency.Nominal}
                            currencyPreviousValue={currency.Previous}/>
                    )
                })}
            </div>
        </div>
    );
}

export default CurrencyList;
