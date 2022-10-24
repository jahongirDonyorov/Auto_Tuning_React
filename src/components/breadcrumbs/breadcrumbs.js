import React from "react";
import { Link } from "react-router-dom";
import'./breadcrumbs.scss'

const Breadcrumbs = ({links = []}) => {
    const list  = links.map((item,index) => {
      return(
        <li>
          <Link to={item.link}>{item.title}</Link>
        </li>
      )
    })
    return(
      <div className="breadcrumbs">
        <li><Link to='/'>Главная</Link></li>
        {list}
      </div>
    )
}
export default Breadcrumbs