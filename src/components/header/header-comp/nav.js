import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


 const Nav = () => {
    const [category,setCategory] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3003/category/catall')
      .then(res => {
        if(res.status === 200){
          setCategory(res.data)
        }
      })

    },[])

    const links = category.map(link => {
      return(
        <Link key={link._id} to={`/category/${link._id}`}>{link.name}</Link>
      )
    })
    return(
      <nav className="header__nav">
      <div className="container"> 
        {links}
        <Link to='/'>ПУНКТЫ ВЫДАЧИ</Link>
        <Link to='/'>АКЦИИ</Link>
        <Link to='/'>КОНТАКТЫ</Link>
      </div>
    </nav>
    )
}

export default Nav