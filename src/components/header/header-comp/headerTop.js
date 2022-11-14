//              hoke blan ishlashda
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import url from '../../../helpers/config'


 const HeaderTop = (props) => {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     toggle : 1
  //   }
  //   this.addToggle = this.addToggle.bind(this)
  // }

  // addToggle(){
  //   this.setState(state=>({
  //     toggle: state.toggle + 1
  //   }))
  // }

  //hooke
  //                     eski qiymat hisoblanadi va pasga togglega boradi
  // const [toggle, setToggle] = useState(1)
  const [menu, setMenu] = useState(['Доставка','Отзывы','Покупателям'])
  const [title,setTitle] = useState('')
  const [list,setList] = useState([])
 
  // const addToggle = () => {
  //   //    useState() dagi qiymat keladi va 1 quwiladi
  //   // setToggle(toggle + 1)//chiqqan javob togglega boradi va useState(2)bulib tushadi
  //   setMenu([...menu, 'Test'])
  // }

  const listMenu = menu.map((item, index)=> {
    return(
      <li key={index}>
        <Link to='/'>{item}</Link>
      </li>
    )
  })

  const searchProduct = (e)=>{
    let v = e.target.value
     setTitle(v)
     if(v){
       axios.get(`${url}/product/search/${v}`)
       .then(res => {
         if(res.status === 200){
           setList(res.data)
         }else{
           setList([])
         }
       })
     }
     if(v === ''){
      setList([])
    }
  }
  const clear = () => {
    setList([])
    setTitle('')
    
  }
  const resultSearch = list.map(product => {
    return(
      <li key={product._id} onClick={clear}>
       <img src={`${url}/${product.img}`} alt="" />
        <Link to={`/product/${product._id}`} className="header__result--title"  >
         {product.title}
         <span>{product.price}сум</span>  
        </Link>
        <Link to={`/category/${product.category._id}`} className="header__result--category" >
         {product.category.name}
       </Link>
     </li>
    )
  })

    return(
      <div className="header__top">
        <div className="container">
          <div className="header__location">
            <button>
                Ташкент 
            <img src={require('../../../assets/img/icons/down.png')}
             alt="" /></button>
            <i className="bi bi-window"></i>
          </div>
          <ul className="header__menu">
            {listMenu}
          </ul>
          <div className="header__search searchdesk">
            <input type="text" placeholder="Поиск по сайту" onInput={searchProduct} value={title} />
            <button>
            <img src={require('../../../assets/img/icons/Search.png')} alt="" />
            </button>
            <ul className="header__result">
              {resultSearch}
            </ul>
          </div>
          <button className="header__login">
            <img src={require('../../../assets/img/icons/Login.png')} alt="" />
            <span>Войти</span>
          </button>
        </div>
      </div>
    )
  }
  export default HeaderTop