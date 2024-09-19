import React, { useState } from 'react'
import '../css/Currency.css';
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_15lVA5veKzMtV55JDU1avNqbK1cvGylX23jc1BqJ";



function Cureency() {

    //çevirmek istediğimiz değer için
    const [amount, setAmount] = useState();
    //çevirmek istediğimiz sayının para birimi için 
    const [fromCurrency, setFromCurrency] = useState('USD');
    //istediğimiz sayının para birimi için
    const [toCurrency, setToCurrency] = useState('TRY');
    //sonuç için 
    const [result, setResult] = useState();

    const excahnge = async () => {
        // console.log(amount);
        // console.log(fromCurrency);
        // console.log(toCurrency);
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);



    }


    return (
        <div className='cureency-div'>
            <div style={{ fontFamily: 'arial', backgroundColor: "black", color: "#fff", width: "100%", textAlign: "center" }}>
                <h3 >DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div style={{ marginTop: "25px" }}>
                <input
                    value={amount}
                    //amount değeri girdiğimizde anchange çalışıcak e.target.value girdiğmiz değeri alıcak ve setAmounta setlnicek
                    onChange={(e) => setAmount(e.target.value)}
                    type='number' className='amount'></input>
                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option >USD</option>
                    <option >TRY</option>
                    <option >EUR</option>
                </select>

                <FaArrowCircleRight style={{ fontSize: '25px', marginRight: '10px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option >TRY</option>
                    <option >USD</option>
                    <option >EUR</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />



            </div>
            <button
                onClick={excahnge}
                className='excahnge-button'>Çevir</button>

        </div>
    )
}

export default Cureency
