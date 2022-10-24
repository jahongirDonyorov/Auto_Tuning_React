import React  from "react";
import { Link } from "react-router-dom";
import './product.scss'

 const Product = ({product}) => {
   
   const url = 'http://localhost:3003'
    return(
     <div className="product__item">
        <div className="product__box">
        <div className="product__btns">
          <button><img src={require('../../assets/img/icons/heart.png')} alt="" /></button>
          <button><img src={require('../../assets/img/icons/compare.png')} alt="" /></button>
        </div>
        <img src={require('../../assets/img/san.png')} className="product__status" />
        <img src={`${url}/${product.img}`} alt="" className="product__img" />
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
            <button>-</button>
            <span className="val">1</span>
            <button>+</button>
          </div>
          <button className="product__add">
             В корзину
          </button>
        </div>
      </div>
     </div>
    )
  }

  export default Product