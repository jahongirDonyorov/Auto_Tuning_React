import axios from "axios";
import React, { useState, useEffect } from "react";
import Catnav from "../../components/pages/home/catnav";
import Partner from "../../components/pages/home/partners";
import Slider from "../../components/pages/home/slider";
import Products from "../../components/products";
import './home.scss'

const Home = () => {

  const[newProducts, setNewProducts] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3003/product/productall')
    .then(res => {
      if(res.status === 200){setNewProducts(res.data)}
    })
  },[])
    return(
      <div className="wrapper">
        <Slider/>
        <Catnav/>
        <Products title=' Популярные товары' products={newProducts} />
        <Products title='Популярные запчасти' />
        <Products title='Популярные диски' />
        <Partner/>
        <hr/>
        <div className="container">
          <div className="title">Интернет-магазин Автотюнинг</div>
          <p className="mb-200">
          В интернет-магазине шин Тюнинг вы можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, 
          так и по марке авто. Предоставляем услуги по шиномонтажу и сезонному хранению шин. В интернет-магазине Тюнинг вы 
          можете купить шины известных брендов. Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги 
          по шиномонтажу и сезонному хранению шин.В интернет-магазине  Тюнинг вы можете купить шины известных брендов.
           Подбор осуществляется как по типоразмеру, так и по марке авто. Предоставляем услуги по шиномонтажу и сезонному хранению шин.
          </p>
        </div>
      </div>
    )
  }

export default Home