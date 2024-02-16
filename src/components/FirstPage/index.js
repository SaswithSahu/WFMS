import { Component } from "react";
import "./index.css"
import { Link } from "react-router-dom";

class FirstPage extends Component{
    render(){
    return(
        <div className="first-page">
        <ul className="first-page-nav">
            <li className="nav-item">
               <Link to = "/home" className="first-link-2">Home</Link> 
            </li>
            <li className="nav-item">
            <Link to = "/home" className="first-link-2">About</Link> 
            </li>
        </ul>
          <h1 className="first-page-header">
          Food Waste Management System
          </h1>
          <p className="first-page-para" >
            a step to save food !
          </p>
          <div className="button-container">
          <button className="button-3" >
            <Link to = "/registration" className="first-link-1">Register</Link>
          </button>
          <button className="button-3">
          <Link to = "/login" className="first-link-1">Login</Link>
          </button>
          </div>
        </div>
    )
    }
}
export default FirstPage