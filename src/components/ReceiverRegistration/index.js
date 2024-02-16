import { Component } from "react";
import "./index.css"

class ReceiverRegistration extends Component{
    render(){
        return(
            <div className="donar-registration-page">
                <form className="donar-form">
                <h1 className="header-reg">Receiver Registration</h1>
                <div className="container-2">
                    <label className="label-2">Name of the Org</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-2">
                    <label className="label-2">UserName</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-2">
                    <label className="label-2">Password</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-2">
                    <label className="label-2">Contact No</label>
                    <input type="number" className="donar-reg-inputs"/>.
                </div>
                <div className="container-2">
                    <label className="label-2">Mail</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <div className="container-2">
                    <label className="label-2">Address</label>
                    <input type="text" className="donar-reg-inputs"/>.
                </div>
                <button className="register-button">Register</button>
                </form>
            </div>
        )
    }
}

export default ReceiverRegistration