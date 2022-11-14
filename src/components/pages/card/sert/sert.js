import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import './sert.scss'

export default class Sert extends Component{
  render(){
    return(
      <div className="sert">
        <div className="d-flex mb-30 aligh-items-center justify-content-between">
          <div className="title nomb">Сертификаты</div>
          <Link to='/' className="products__more">
              Смотреть все
              <img src={require('../../../../assets/img/icons/right.png')} alt="" />
          </Link>
        </div>
        <Splide options={{
            type:'loop',
            perPage:5,
            autoplay:true,
            arrows:false,  
            pagination:false,
            gap:18,
            breakpoints:{
              768:{
                perPage:3,
              }
            }
         }} >
          <SplideSlide>
              <img src={require('../../../../assets/img/sert.png')} alt="" />
          </SplideSlide>
          <SplideSlide>
              <img src={require('../../../../assets/img/sert.png')} alt="" />
          </SplideSlide>
        </Splide>
      </div>
    )
  }
}