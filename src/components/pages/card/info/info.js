import React  from "react";
import './info.scss'

import snow from '../../../../assets/img/icons/snow.svg'
import rubl from '../../../../assets/img/icons/ruble.svg'

const Info = ({title})=>{
    return(
      <>
      <div className="card__title "> {title} </div>
        <div className="card__details  tablet-4">
          <div className="detail--title tablet">Xarakteresteka</div>
          <div className="detail">
            <b>Производитель:</b>
            <span>Michelin</span>
          </div>
          <div className="detail">
            <b>Размеры:</b>
            <span>от 32/0 R10 до 305/55 R20</span>
          </div>
          <div className="detail">
            <b>Сезон:</b>
            <span>Зима <img src={snow} alt="" /></span>
          </div>
          <div className="detail">
            <b>Цены:</b>
            <span>от 2 999 до 10 000 <img src={rubl} alt="" /></span>
          </div>
          <div className="detail">
            <b>Тип:
              <div className="detail__info">
                ?
                <div className="detail__content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam
                  eum nostrum eligendi nesciunt, odio ab delectus totam perspiciatis 
                  consequatur laboriosam ipsam id quis rerum voluptates error? Aliquid, dicta assumenda?
                </div>
              </div>
            </b>
            <span>Легковая</span>
          </div>
        </div>
      </>
    )
}
export default Info