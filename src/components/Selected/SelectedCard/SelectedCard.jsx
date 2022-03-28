import React from 'react';
import './SelectedCard.css';
import SelectedPrevData from "./SelectedPrevData/SelectedPrevData";

const SelectedCard = ({id, charCode, name, nominal, previous, value, apiDate, prevDataObjects}) => {

    let today = new Date(apiDate)
    let date = today.getDate() + '/' + '0' +(today.getMonth()+1) + '/' + today.getFullYear()
    return (
        <>
            <h7 style={{marginBottom: '16px'}}>Актуальные данные на {date}</h7>
            <div className='selected-currencyList-container'>
                <div className="selected-currencyList-row">
                    <h4 style={{paddingLeft:'45px'}}>Код</h4>
                    <h4 style={{paddingLeft:'100px'}}>Название</h4>
                    <h4 style={{paddingLeft:'100px'}}>Номинал</h4>
                    <h4>Стоимость в рублях</h4>
                    <h4 style={{paddingRight:'15px'}}>Изменения</h4>
                </div>
            </div>
            <div key={id} className='selected-container' title={name}>
                <div className="selected-row">
                    <div className="selected">
                        <h3>{charCode}</h3>
                    </div>
                    <div className='selected-data'>
                        <p className="selected-name">{name}</p>
                        <p className="selected-nominal">{nominal}</p>
                        <p className="selected-price">{value}</p>
                        <p className="selected-difference">
                            {value > previous
                                ? (<p className="selected-green">{(value-previous).toFixed(1)}</p>)
                                : (<p className="selected-red">{(value-previous).toFixed(1)}</p>)
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4>Стоимость за последние дни:</h4>
                    {prevDataObjects.map(prevDataObj => (
                        <SelectedPrevData currentDate={prevDataObj.currentDate} valutes={prevDataObj.valutes} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SelectedCard;