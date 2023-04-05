import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import url from "../../../helpers/config";
import Modal from "../modal/modal";

const HeaderCenter = () => {
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);

  // const addToggle = () => {
  //   //    useState() dagi qiymat keladi va 1 quwiladi
  //   // setToggle(toggle + 1)//chiqqan javob togglega boradi va useState(2)bulib tushadi
  //   setMenu([...menu, 'Test'])
  // }

  // const listMenu = menu.map((item, index)=> {
  //   return(
  //     <li key={index}>
  //       <Link to='/'>{item}</Link>
  //     </li>
  //   )
  // })

  const searchProduct = (e) => {
    let v = e.target.value;
    setTitle(v);
    if (v) {
      axios.get(`${url}/product/search/${v}`).then((res) => {
        if (res.status === 200) {
          setList(res.data);
        } else {
          setList([]);
        }
      });
    }
    if (v === "") {
      setList([]);
    }
  };
  const clear = () => {
    setList([]);
    setTitle("");
  };
  const resultSearch = list.map((product) => {
    return (
      <li key={product._id} onClick={clear}>
        <img src={`${url}/${product.img}`} alt="" />
        <Link to={`/product/${product._id}`} className="header__result--title">
          {product.title}
          <span>{product.price}сум</span>
        </Link>
        <Link
          to={`/category/${product.category._id}`}
          className="header__result--category"
        >
          {product.category.name}
        </Link>
      </li>
    );
  });

  return (
    <div className="header__center">
      <div className="container">
        <Link to="/" className="header__logo">
          Auto <span>Tuning</span>
        </Link>
        <div className="header__time">
          Режим работы:
          <b>Пн-Вс: с 09:00-20:00</b>
        </div>

        <div className="header__call">
          <b>998 (71) 200-00-00</b>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Заказать звонок
          </button>
        </div>

        <div className="header__btns">
          <Link to="/">
            <img src={require("../../../assets/img/icons/heart.png")} alt="" />
          </Link>

          <Link to="/">
            <img
              src={require("../../../assets/img/icons/compare.png")}
              alt=""
            />
          </Link>

          <div className="header__cart">
            <div className="header__cart--left">
              <img src={require("../../../assets/img/icons/cart.png")} alt="" />
              <span>9</span>
            </div>
            <div className="header__cart--right">
              Корзина
              <b>9 товаров</b>
            </div>
          </div>
        </div>
      </div>
      <Modal
        toggle={toggle}
        closeModal={() => {
          setToggle(false);
        }}
      />
      <div className="header__search searchmobail">
        <input
          type="text"
          placeholder="Поиск по сайту"
          onInput={searchProduct}
          value={title}
        />
        <button>
          <img src={require("../../../assets/img/icons/Search.png")} alt="" />
        </button>
        <ul className="header__result">{resultSearch}</ul>
      </div>
    </div>
  );
};
export default HeaderCenter;
