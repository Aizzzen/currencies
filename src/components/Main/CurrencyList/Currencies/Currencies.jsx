import React from 'react';
import './Currencies.css';
import {Link} from "react-router-dom";
import Selected from "../../../Selected/Selected";

const CurrenciesComponent = ({id, charCode, currencyValue, currencyName, currencyNominal, currencyPreviousValue}) => {

    const clickedOn = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    return (
        <Link to={`/selected/${id}`} component={<Selected />} style={{textDecoration: 'none'}} onClick={clickedOn} title={currencyName}>
            <a>
                <div key={id} className='currency-container'>
                    <div className="currency-row">
                        <div className="currency">
                            <h3>{charCode}</h3>
                        </div>
                        <div className='currency-data'>
                            <p className="currency-name">{currencyName}</p>
                            <p className="currency-nominal">{currencyNominal}</p>
                            <p className="currency-price">{currencyValue}</p>
                            <p className="currency-difference">
                                {currencyValue > currencyPreviousValue
                                    ? (<p className="currency-green">+{(currencyValue-currencyPreviousValue).toFixed(1)}</p>)
                                    : (<p className="currency-red">{(currencyValue-currencyPreviousValue).toFixed(1)}</p>)
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default CurrenciesComponent;