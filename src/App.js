import { BrowserRouter, Routes,Route } from "react-router-dom"
import FirstPage from "./components/FirstPage"
import Home from "./components/Home"
import Registration from "./components/Registration"
import DonarRegistration from "./components/DonarRegistration"
import ReceiverRegistration from "./components/ReceiverRegistration"
import DonarDashboard from "./components/DonarDashboard"
import Login from "./components/Login"
import AdminDashboard from "./components/AdminDashboard"
const App = () =>(

   <BrowserRouter>
   <Routes>
   <Route path = "/home" Component={Home}/>
   <Route path="/" Component={FirstPage}/>
   <Route path = "/registration" Component={Registration}/>
   <Route path = "/registration/donar" Component={DonarRegistration}/>
   <Route path = "/registration/receiver" Component={ReceiverRegistration}/>
   <Route path= "/donar/dashboard" Component={DonarDashboard}/>
   <Route path="login" Component={Login}/>
   <Route path= "/admin/dashboard" Component={AdminDashboard}/>
  </Routes>
 </BrowserRouter>
  
  //<ReceiverRegistration/>
)

export default App