import React, {useEffect, useState} from "react";
import axios from "axios";
import Breadcrumbs from "../../breadcrumbs";
import { useParams } from "react-router-dom";
import Product from "../../product";
import './category.scss'

const Category = () => {
  //            id ni oladi 
  const { id } = useParams()
  
  const [category,setCategory] = useState({})
  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3003/product/getbycat/${id}`)
    .then(res => {
      if(res.status === 200){
        setCategory(res.data.category)
        setProducts(res.data.products)
      }
    })
  }, [id])

  const productList = products.map(product => {
    return(
      <div className="col-4 col-sm-6" key={product._id} >
        <Product product={product}/>
      </div>
    )
  })

  const bread = [{title:category.name,link:`/category/${category._id}`}]

  return(
    <div className="cat">
      <div className="container">
        <Breadcrumbs links={bread} />
        <h1 className="cat__title">{category.name}</h1>
        <div className="row">
          <div className="col-3 col-md-12">
            <div className="act__filter">
              <div className="cat__filter--title">Цена</div>
              <div className="cat__row">
                <div className="cat__input">
                от <input type="text" />
                </div>
                <div className="cat__input">
                до <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 col-md-12">
            <div className="row">
              {productList}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Category 