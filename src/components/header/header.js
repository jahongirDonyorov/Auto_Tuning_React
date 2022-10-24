import React, { Component } from "react";
import HeaderCenter from "./header-comp/headerCenter";
import HeaderTop from "./header-comp/headerTop";
import Nav from "./header-comp/nav";
import './header.scss'

export default class Header extends Component{
  constructor() {
    super()
  }
  render(){
    return(
          <div>
            <HeaderTop/>
            <HeaderCenter/>
            <Nav/>
          </div>
    )
  }
}