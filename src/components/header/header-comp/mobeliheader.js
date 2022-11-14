import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import url from '../../../helpers/config';
const MobileHeader = () => {
  const [category,setCategory] = useState([])
  const [toggle,setToggle] = useState(false)

    useEffect(()=>{
      axios.get(`${url}/category/catall`)
      .then(res => {
        if(res.status === 200){
          setCategory(res.data)
        }
      })

    },[])


    const links = category.map(link => {
      return(
        <Link key={link._id} to={`/category/${link._id}`} onClick={()=>{setToggle(!toggle)}} >{link.name}</Link>
      )
    })
  return(
    <div className="mheader">
      <div className={`mside ${toggle?'active':''}`}>
        {links}
        <Link onClick={()=>{setToggle(!toggle)}} to='/'>Доставка</Link>
        <Link onClick={()=>{setToggle(!toggle)}} to='/'>Отзывы</Link>
        <Link onClick={()=>{setToggle(!toggle)}} to='/'>Покупателям</Link>
        <Link onClick={()=>{setToggle(!toggle)}} to='/'>ПУНКТЫ ВЫДАЧИ</Link>
        <Link onClick={()=>{setToggle(!toggle)}} to='/'>АКЦИИ</Link>
        <Link onClick={()=>{setToggle(!toggle)}} to='/'>КОНТАКТЫ</Link> 
      </div>
      <div className="mnav">
        <Link to='/'>
          <img src={require('../../../assets/img/icons/heart.png')} alt="" />
        </Link>
        <Link to='/'>
          <img src={require('../../../assets/img/icons/heart.png')} alt="" />
        </Link>
        <Link to='/'>
          <img src={require('../../../assets/img/icons/heart.png')} alt="" />
        </Link>
        <Link to='/'>
          <img src={require('../../../assets/img/icons/heart.png')} alt="" />
        </Link>
        <button onClick={()=>{setToggle(!toggle)}} to='/'>
          <span></span>
        </button>
      </div>
    </div>
  )
}  
export default MobileHeader