import { Component } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css"

class Registration extends Component{
    render(){
    return(
        <div className="registration-page">
            <div className="registration-inner-container">
                <h1 className="reg-header">Register As</h1>
            <div className="container-3">

                <Link to = "/registration/donar" className="container-5">
                    <MdAccountCircle className="icon"/>
                    <h3>Donor</h3>
                </Link>
                <Link to = "/registration/receiver" className="container-5">
                    <MdAccountCircle className="icon"/>
                    <h3>Reciever</h3>
                </Link>
            </div>
            </div>
        </div>
    )
    }
}

export default Registration