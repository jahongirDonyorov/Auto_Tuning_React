import React, { useEffect, useState }  from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import './product.scss'

 const Product = ({product}) => {
   
   const url = 'http://localhost:3003'
   const [val,setVal] = useState(0)
   const [cookies, setCookie] = useCookies(['cart']);

   const changeVal = (addVal) => {
     if(addVal === -1 && val === 0){
       return false
     }
     setVal(val + addVal)
   }
   const addCart = () => {
    //  val, product._id
    let list = []
    if(cookies.cart){
      list = cookies.cart
    }
    let index = list.findIndex(item => item._id === product._id)
    if(index !== -1){
      list[index].count += val
    }else {
      list.push({
        count: val,
        _id: product._id
      })
    }
    setCookie('cart',list)
    setVal(0)
   }

    return(
     <div className="product__item">
        <div className="product__box">
        <div className="product__btns">
          <button><img src={require('../../assets/img/icons/heart.png')} alt="" /></button>
          <button><img src={require('../../assets/img/icons/compare.png')} alt="" /></button>
        </div>
        <img src={require('../../assets/img/san.png')} className="product__status" />
        <Link to={`/product/${product._id}`} >
            <img src={`${url}/${product.img}`} alt="" className="product__img" />
        </Link>
        <div className="product__rate">
          <img src={require('../../assets/img/Star.png')} alt="" />
          <img src={require('../../assets/img/Star.png')} alt="" />
          <img src={require('../../assets/img/Star.png')} alt="" />
          <img src={require('../../assets/img/Star.png')} alt="" />
          <img src={require('../../assets/img/Star.png')} alt="" className="gray" />
          <span>4.84</span>
        </div>
        <div className="product__price">
          <div className="new">{product.price.toLocaleString()}<span>сум </span></div>
          <div className="old">{(product.price*1.1).toLocaleString()}</div>
        </div>
        <Link to={`/product/${product._id}`} className="product__name">
            {product.title}
        </Link>
        <div className="product__cart">
          <div className="product__count">
            <button onClick={()=>{changeVal(-1)}}>-</button>
            <span className="val">{val}</span>
            <button onClick={()=>{changeVal(1)}}>+</button>
          </div>
          <button 
             onClick={addCart}
             className="product__add">
             В корзину
          </button>
        </div>
      </div>
     </div>
    )
  }

  export default Product