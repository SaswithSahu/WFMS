import { Component } from "react"
import AdminSidebar from "../AdminSideNav"
import Header from "../Navbar"
import AdminDashboardReadings from "../AdminDashboardReadings/indx"

class AdminDashboard extends Component{
    render(){
        return(
            <>
            <Header/>
            <div className="donar-dashboard">
                <AdminSidebar/>
                <AdminDashboardReadings/>
            </div>
            </>
        )
    }
}
export default AdminDashboard