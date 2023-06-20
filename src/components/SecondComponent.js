import React from "react";
import SecondComponentCSS from './SecondComponent.module.css';
const SecondComponent = () => {
    return (
        <div className="card">
        <h1>SecondComponent</h1>
        <p>Some text</p>
        <button className={SecondComponentCSS.btn}>Sell now!</button>
        </div>
    );
    }
export default SecondComponent;