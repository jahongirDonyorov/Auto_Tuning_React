import React, { Component } from "react";
import './quote.scss'

import star from '../../../../assets/img/Star.png'

 export default class Quote extends Component{
   render(){
      return(
        <div className="quote__box">
          <div className="quote__top">
            <div className="quote__head">
              <img src={require('../../../../assets/img/avatar.jpg')} alt="" />
              <div className="quote__name">Александр о шине Michelin Agilis X-Ice North </div>
            </div>
            <p>Отличное место! Уютный офис, приветливый персонал, все сертификаты в наличии.
              По телефону помогли сориентироваться как добраться. Грамотно подобрали шины, быстро привезли,
                шиномонтаж провели бесплатно, хранение недорого. В общем все супер! Рекомендую. </p>
          </div>
          <div className="quote__center">
            <div className="quote__marks">
              <b>Оценка:</b>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              5.0
            </div>
            <div className="quote__marks">
              <b>Автомобиль:</b>
              Audi Q6
            </div>
            <div className="quote__marks">
              <b>Купите опять?:</b>
              Определенно да!
            </div>
          </div>
          <div className="quote__bottom">
          <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'60%'}}></span></div>
              Управление на сухой дороге
            </div>
            <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'80%'}}></span></div>
              Управление на сухой дороге
            </div>
            <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'calc(100% + 2px)'}}></span></div>
              Управление на сухой дороге
            </div>
            <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'40%'}}></span></div>
              Управление на сухой дороге
            </div>
            <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'25%'}}></span></div>
              Управление на сухой дороге
            </div>
            <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'74%'}}></span></div>
              Управление на сухой дороге
            </div>
            <div className="quote__lvl">
              <div className="quote__line"><span style={{width:'12%'}}></span></div>
              Управление на сухой дороге
            </div>
             
          </div>
          <div className="quote__date">09.11.2020</div>
        </div>
      )
   }
 }