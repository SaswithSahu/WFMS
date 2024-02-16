import { Component } from "react";
import ImageCarousel from "../ImageCarousel";
import MissionComponent from "../OurMissionComponent";
import Header from "../Navbar";
import "./index.css"
class Home extends Component{
    render(){
        return(
            <>
             <Header/>
             <ImageCarousel/>
             <MissionComponent/>
            </>
        )
    }
}

export default Home