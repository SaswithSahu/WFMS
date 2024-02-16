import { Component } from "react";
import "./index.css"

class DonarRegistration extends Component{
    render(){
        return(
            <div className="donar-registration-page">
                <form className="donar-form">
                <h1 className="header-donar">Donar Registration</h1>
                <div className="container-1">
                    <label className="label-1">Name of the Org</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-1">
                    <label className="label-1">UserName</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-1">
                    <label className="label-1">Password</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-1">
                    <label className="label-1">Contact No</label>
                    <input type="number" className="donar-reg-inputs"/>.
                </div>
                <div className="container-1">
                    <label className="label-1">Mail</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-1">
                    <label className="label-1">Address</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <button className="register-button">Register</button>
                </form>
            </div>
        )
    }
}

export default DonarRegistration