import { Component } from "react";
import "./index.css"
import Sidebar from "../SideNavBar";
import DashboardReadings from "../DonarDashBoardReadings";
import Header from "../Navbar";
class DonarDashboard extends Component{

render(){
        return(
            <>
            <Header/>
            <div className="donar-dashboard">
                <Sidebar/>
                <DashboardReadings/>
            </div>
            </>
        )
    }
}

export default DonarDashboard