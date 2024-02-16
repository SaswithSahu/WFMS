import { Component } from "react";
import "./index.css"

class Login extends Component{
    render(){
        return(
            <div className="LoginPage">
                <form>
                    <h1 className="login-header">Login</h1>
                <div className="user-name-container">
                    <label className="label">UserName</label>
                    <input type="text" className="login-inputs"/>.
                </div>
                <div className="password-container">
                    <label className="label">Password</label>
                    <input type="password" className="login-inputs"/>.
                </div>
                <p className="show-password">show password</p>
                <button className="login-button">Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login