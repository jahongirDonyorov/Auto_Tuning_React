import React, { Component, useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Slider from "../../components/pages/card/slider";
import Info from "../../components/pages/card/info";
import Type from "../../components/pages/card/type";

import banner from '../../assets/img/banner.png'

import'./card.scss'
import { Link, useParams } from "react-router-dom";
import Quote from "../../components/pages/card/quote";
import Sert from "../../components/pages/card/sert";
import axios from "axios";

const Card =()=>{
  const {id} = useParams()  

  const [product, setProduct] = useState({
    category: {
      _id:'0',
      title:''
    }
  })
 
  //endi kirganda tepadan och
  useEffect(()=>{
    window.scrollTo(0,0)
    axios.get(`http://localhost:3003/product/view/${id}`)
    .then(res => {
      if(res.status === 200){
        setProduct(res.data)
      }
    })
  },[id])
  const links = [
    {
      title:product.category.name,
      link: `/category/${product.category._id}`
    },
    {
      title: product.title,
      link: `/product/${product._id}`
    }
  ]
    return(
      <div className="card">
        <div className="container">
          <Breadcrumbs links={links} />
          <div className="card__row">
            <div className="card__pict">
              <Slider imgs={[product.img]}/>
              <Link to='/' className="d-flex mt-20"><img src={banner} alt="" className="full" /></Link>
              <Link to='/' className="d-flex mt-20"><img src={banner} alt="" className="full" /></Link>
            </div>
            <div className="card__info">
                <Info tit={product.title}/>
                <Type/>
                <div className="card__subtitle mt-30">Описание</div>
                <p>В интернет-магазине шин Шины Мигом вы можете купить шины известных брендов. 
                  Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги по 
                  шиномонтажу и сезонному хранению шин. В интернет-магазине шин Шины Мигом вы можете
                   купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто.</p>
            </div>
          </div>
          <div className="mt-80 mb-80">
            <div className="d-flex mb-30 align-items-center justify-content-between">
              <div className="title nomb">Отзывы <span>(12)</span></div>
              <button className="product__add">Написать отзыв</button>
            </div>
              <Quote/>
              <Quote/>
          </div>
          <div className="d-flex justify-content-center">
            <button className="product__add">Показать еще</button>
          </div>
          <hr />
          <Sert/>
        </div>
      </div>
    )
  }
  export default Card