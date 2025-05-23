import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import { TopHeader } from "../TopHeader/TopHeader";

const AppLayout =()=>{
  return(
    <>
    <TopHeader/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
 
}

export default AppLayout;