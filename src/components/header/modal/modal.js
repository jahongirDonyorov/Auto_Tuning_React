import axios from "axios";
import React, { useState } from "react";
import url from "../../../helpers/config";
import "./modal.scss";

const Modal = ({ toggle, closeModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const send = () => {
    if (name && phone) {
      axios
        .post(`${url}/product/feedback/`, {
          name,
          phone,
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data === "ok") {
              setMsg("сообшение отправлено!");
              setName("");
              setPhone("");
              setTimeout(() => {
                closeModal();
                setMsg("");
              }, 3000);
            }
          }
        });
    } else {
      setMsg("заполните все поля!");
    }
  };

  return (
    <div className={`modal ${toggle ? "open" : ""}`}>
      <div className="modal__box">
        <button
          className="modal__close"
          //  onClick={()=>{closeModal}}
          onClick={closeModal}
        ></button>
        <div className="modal__title">Заказат зиванок</div>
        <input
          type="text"
          onInput={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Ваш емя"
        />
        <input
          type="text"
          onInput={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          placeholder="Номер телефон"
        />
        {msg}
        <button className="product__add" onClick={send}>
          Отпиравети
        </button>
      </div>
    </div>
  );
};
export default Modal;
