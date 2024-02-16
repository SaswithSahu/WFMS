
import "./index.css"
import { Link } from "react-router-dom"
const Header = () =>(
    <nav className="navbar">
    <div className="nav-container">
       <h1 className="nav-header">
        FWMS
       </h1>
      <ul className="nav-links">
        <li className="nav-list-item">
        <Link to = "/home" className="head-link">Home</Link> 
        </li>
        <li className="nav-list-item">
        <Link to = "/about" className="head-link">About</Link> 
        </li>
        <li className="nav-list-item">
        <Link to = "/contacts" className="head-link">Contacts</Link> 
        </li>
        <li className="nav-list-item">
        <Link to = "/donar/dashboard" className="head-link">Donar</Link> 
        </li>
        <li className="nav-list-item">
        <Link to = "/admin/dashboard" className="head-link">Admin</Link> 
        </li>
      </ul>
    </div>
  </nav>
)

export default Header