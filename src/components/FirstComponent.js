import React from 'react';
import FirstComponentCSS from './FirstComponent.module.css';
 const FirstComponent = () => {
               
         return (
           <div className='card'>
            <h1>Main Title</h1>
            <p>Some text</p>
            <button className={FirstComponentCSS.btn}>Buy now!</button>
           </div>

    )
 }

 export default FirstComponent;