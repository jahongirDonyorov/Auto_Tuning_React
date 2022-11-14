import React, { Component } from "react";
import './type.scss'

import rubl from '../../../../assets/img/icons/bruble.svg'
import { Link } from "react-router-dom";

export default class Type extends Component{
  render() {
    return(
      <div className="card__sort tablet-3">
        <div className="card__sort--nav">
          <button className="active">R14</button>
          <button>R16</button>
          <button>R17</button>
          <button>R18</button>
          <button>R19</button>
        </div>
        <div className="card__sort--content">
          <table>
            <thead>
              <tr>
                  <th>Типоразмер</th>
                  <th>Срок</th>
                  <th>Цена</th>
                  <th>Наличие</th>
                  <th></th>
                  <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdu">215/60 R14</td>
                <td>Завтра</td>
                <td className="price">2 500 <img src={rubl} alt="" /></td>
                <td>
                  <div className="card__sort--status no">3 шт</div>
                </td>
                <td width='150'>
                  <button className="product__add">В корзину</button>
                </td>
                <td width='90'><Link to='/'>В кредит </Link></td>
              </tr>
              <tr>
                <td className="tdu">215/60 R14</td>
                <td>Завтра</td>
                <td className="price">2 500 <img src={rubl} alt="" /></td>
                <td>
                  <div className="card__sort--status">3 шт</div>
                </td>
                <td width='150'>
                  <button className="product__add">В корзину</button>
                </td>
                <td width='90'><Link to='/'>В кредит </Link></td>
              </tr>
              <tr>
                <td className="tdu">215/60 R14</td>
                <td>Завтра</td>
                <td className="price">2 500 <img src={rubl} alt="" /></td>
                <td>
                  <div className="card__sort--status no">3 шт</div>
                </td>
                <td width='150'>
                  <button className="product__add">В корзину</button>
                </td>
                <td width='90'><Link to='/'>В кредит </Link></td>
              </tr>
              <tr>
                <td className="tdu">215/60 R14</td>
                <td>Завтра</td>
                <td className="price">2 500 <img src={rubl} alt="" /></td>
                <td>
                  <div className="card__sort--status ">3 шт</div>
                </td>
                <td width='150'>
                  <button className="product__add">В корзину</button>
                </td>
                <td width='90'><Link to='/'>В кредит </Link></td>
              </tr>
              <tr>
                <td className="tdu">215/60 R14</td>
                <td>Завтра</td>
                <td className="price">2 500 <img src={rubl} alt="" /></td>
                <td>
                  <div className="card__sort--status ">3 шт</div>
                </td>
                <td width='150'>
                  <button className="product__add">В корзину</button>
                </td>
                <td width='90'><Link to='/'>В кредит </Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}