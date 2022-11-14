import React, { useState } from "react";
import url from "../../../helpers/config";
import './newquote.scss'

export const NewQuote = () => {
  const [marks,setMarks] = useState([
    {
      title:'',
      mark:0
    }
  ])
  const send  = (e) => {
    e.preventDefault() 
  }
  return(
    <div className="newquote">
      <div className="newquote__title">Dabavet otzef o tavare</div>
      <form onSubmit={send} >
        <div className="row">
          <div className="col-4 col-md-6">
            <input type="text" name="name" placeholder="Napeshete svoy imya" />
          </div>
          <div className="col-4 col-md-6">
            <textarea name="text" placeholder="opshin svoy menyu" ></textarea>
          </div>
          <div className="col-4 col-md-6">
            <select className="mark">
              <option value="">Veberete iz speka</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-4 col-md-6">
            <input type="text" name="card" placeholder="Modele aftomabel" />
          </div>
          <div className="col-4 col-md-6">
            <input type="text" name="card" placeholder="Kupete opyate" />
          </div>
        </div>
        {
          marks.map((mark,index)=>{
            return(
              <div key={index}>
                <div className="col-4">
                  <input type="text" placeholder="Nazvane ochenke" />
                </div>
                <div className="col-4">
                <select className="mark">
                    <option value="">Veberete iz speka</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </div>
                <div className="col-4">
                  <button type='button'>Udalet </button>
                </div>
              </div>
            )
          })
        }
        <button type='button' onClick={()=>{marks.push({})}}>Dabavet</button>
      </form>
    </div>
  )
}