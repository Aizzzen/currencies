import React from 'react';
import './SelectedPrevData.css';
import {useParams} from "react-router-dom";

const SelectedPrevData = ({currentDate, valutes}) => {
    let today = new Date(currentDate)
    let date = today.getDate() + '/' + '0' +(today.getMonth()+1) + '/' + today.getFullYear()

    const params = useParams();
    const currentValuteID = params.id
    const currentCurrency = Object.values(valutes).filter(currency => currency.ID === currentValuteID)
    let currentCurrencyObj = {...currentCurrency}

    return (
        <div className='selectedPrevData-container'>
            <div className="selectedPrevData-row">
                <div className='selectedPrevData'>
                    <h3>{date}</h3>
                </div>
                <div>
                    <div className='selectedPrevData-data'>
                        <p className='selectedPrevData-price'>{currentCurrencyObj[0].Value}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelectedPrevData;