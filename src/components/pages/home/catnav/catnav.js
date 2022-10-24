import React, { Component } from "react";
import { Link } from "react-router-dom";
import'./catnav.scss'

export default class Catnav extends Component{
  render(){
    return(
      <div className="catnav">
        <div className="container">
           <div className="row">

             <div className="col-40">
                <Link to='/' className="catnav__link">
                    <img src={require('../../../../assets/img/comp1.png')} alt="" />
                    <span>
                      Шины
                      <img src={require('../../../../assets/img/icons/right.png')} alt="" />
                    </span>
                </Link>

                <Link to='/' className="catnav__link">
                    <img src={require('../../../../assets/img/comp2.png')} alt="" />
                    <span>
                      Диски
                      <img src={require('../../../../assets/img/icons/right.png')} alt="" />
                    </span>
                </Link>
             </div>

             <div className="col-30">
             <Link to='/' className="catnav__link big">
                    <span>
                    Запчасти
                      <img src={require('../../../../assets/img/icons/right.png')} alt="" />
                    </span>
                    <img src={require('../../../../assets/img/comp3.png')} alt="" />
                </Link>
             </div>

             <div className="col-30">
             <Link to='/' className="catnav__link big">
                    <span>
                    Запчасти
                      <img src={require('../../../../assets/img/icons/right.png')} alt="" />
                    </span>
                    <img src={require('../../../../assets/img/comp4.png')} alt="" />
                </Link>
             </div>
           </div>
        </div>
      </div>
    )
  }
}