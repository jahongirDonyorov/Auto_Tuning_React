import React, { Component }  from "react";
import { BrowserRouter  as Router , Routes, Route} from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import '@splidejs/react-splide/css';
import './app.scss'

import Header from "../header";
import Footer from "../footer";

import Home from "../../pages/home/home";
import Card from "../../pages/card/card";
import Category from "../pages/category";

export default class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <Router>
           <CookiesProvider>
              <Header/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/product/:id" element={<Card/>}/>
                  <Route path='/category/:id' element={<Category/>}/>
                </Routes>
              <Footer/> 
            </CookiesProvider>
        </Router>
      </div>
    )
  }
} 