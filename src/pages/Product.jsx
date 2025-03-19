import React from 'react';
import IMAGES from "../assets/images/images.js";

function Product() {
    return (
        <div>
            <img src={IMAGES.room3} alt="" style={{width:'100%'}} />
            <h2>제품소개</h2> 
        </div>         
           
    );
  }

  export default Product;