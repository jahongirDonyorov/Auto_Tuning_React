import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './footer.scss'

 const Footer = () => {
   const [category , setCategory] = useState([])
   
   useEffect(() => {
     axios.get('http://localhost:3003/category/catall')
     .then(res => {
       if(res.status === 200) {
          setCategory(res.data)
       }
     })
   }, [])
    
   const links = category.map(link => {
    return(
      <li key={link._id}>
        <Link  to={`/category/${link._id}`}>{link.name.toLowerCase()}</Link>
      </li>
    )
  })
    return(
      <footer className="footer">
        <div className="container flex">
          <div className="footer__box">
            <div className="footer__title">Каталог</div>
            <ul>
              {links}
            </ul>
          </div>
          <div className="footer__box">
            <div className="footer__title">О магазине</div>
            <ul>
              <li><Link to='/'>Оплата и доставка</Link></li>
              <li><Link to='/'>Гарантия</Link></li>
              <li><Link to='/'>Акцииc</Link></li>
              <li><Link to='/'>Блог</Link></li>
            </ul>
          </div>
          <div className="footer__box">
            <div className="footer__title">Контакты</div>
              <div className="footer__contact">
                <img src={require('../../assets/img/icons/Phone.png')} alt="" />
                998 (71) 200-44-44
              </div>
              <div className="footer__contact">
                <img src={require('../../assets/img/icons/Email.png')} alt="" />
                info@tuning.uz
              </div>
              <div className="footer__contact">
                <img src={require('../../assets/img/icons/Instagram.png')} alt="" />
                Мы в инстаграм 
              </div>
            </div>
          <div className="footer__box">
            <ul>
              <li><Link to='/' className="tdu">Политика конфидециальности</Link></li>
              <li><Link to='/' className="tdu">Договор оферты</Link></li>
              <li><Link to='/' className="tdu">Карта сайта</Link></li>
              <li><Link to='/' className="tdu">DATSKY - создание и продвижение сайтов</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="container">
          <p>
            Обращаем ваше внимание на то, что данный сайт носит исключительно информационный характер 
            и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2)
            Гражданского кодекса Российской Федерации. Наличие товара и его стоимость может отличаться от 
            заявленной на данном сайте. Указанное выше наличие в нашем интернет-магазине является ориентировочным 
            и не учитывает бронирование товара при оплате по безналичному расчету, а также продажи, которые произошли 
            с момента последнего обновления данных. Вы можете оставить заявку на резерв товара оформив
              заказ на сайте. Бронирование товара осуществляется после подтверждения заказа менеджером.
          </p>
        </div>
        <div className="footer__copy">
         <div className="container flex">
         <div className="copy">2022 © "AutoTuning"</div>
          <div className="copy">XYZ</div>
         </div>
        </div>
      </footer>
    )
}
export default Footer