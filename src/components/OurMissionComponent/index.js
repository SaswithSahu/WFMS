import { FaHandsHelping } from "react-icons/fa";
import "./index.css"
const MissionComponent = () =>(
    <div className="mission-com-container">
        <h1 className="Mission-com-heading">Our Mission</h1>
        <div className="inner-container">
            <img src = "https://www.shutterstock.com/image-photo/close-asian-woman-scraping-food-260nw-2121565823.jpg" alt = "our-mission" className="image"/>
        <ul className="services">
            <li className="mission-com-list-item">
                <div className="container">
                <FaHandsHelping className="icons"/>
                <h3 className="header">Help</h3>
                </div>
                <p>We helped Lot of people</p>
            </li>
            <li className="mission-com-list-item">
                <div className="container">
                <FaHandsHelping className="icons"/>
                <h3 className="header">Services</h3>
                </div>
                <p>We helped Lot of people</p>
            </li>
        </ul>
    </div>
    </div>
)

export default MissionComponent