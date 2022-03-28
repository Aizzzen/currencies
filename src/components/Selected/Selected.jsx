import React from 'react';
import {useParams} from "react-router-dom";
import SelectedCard from "./SelectedCard/SelectedCard";
import arrObjWithData from './index';

const SelectedCurrency = ({filteredCurrencies, apiDate}) => {
    const params = useParams();
    const currentCurrency = params.id
    const currency = filteredCurrencies.filter(currency => currency.ID === currentCurrency)

    return (
        <div style={{marginTop:'64px'}}>
            {currency.map(curr => (
                <SelectedCard
                    id={curr.ID}
                    charCode={curr.CharCode}
                    name={curr.Name}
                    nominal={curr.Nominal}
                    previous={curr.Previous}
                    value={curr.Value}
                    apiDate={apiDate}
                    prevDataObjects={arrObjWithData}
                />
            ))}
        </div>
    );
};

export default SelectedCurrency;