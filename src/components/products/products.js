import React, { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from "react-router-dom";
import Product from "../product";
import'./products.scss'
import { render } from "@testing-library/react";

 const Products = ({title, products = []}) => {

  const productList = products.map(product => {
    return(
        <SplideSlide key={product._id}>
          <Product product={product}/>
        </SplideSlide>
    )
  })
    return(
      <div className="products">
        <div className="container">
          <div className="products__head">
            <div className="title">{title}</div>
            <Link to='/' className="products__more">
              Смотреть все
              <img src={require('../../assets/img/icons/right.png')} alt="" />
            </Link>
          </div>
 

          <Splide options={{
            type:'loop',
            perPage:4,
            autoplay:true,
            gap:30,
            breakpoints: {
              768:{
                perPage:3,
              },
              600:{
                perPage:2,
                arrows:false,
              },
              425:{
                perPage:1,
              }
            }
          }} >
            {productList}
            
          </Splide>

        </div>
      </div>
    )
  }
export default Products