import React,{useState} from "react";
import Home from "../../pages/Home/home";
import { AiOutlineDoubleLeft,AiOutlineDoubleRight  } from "react-icons/ai";
import "./Layout.css";
import Menue from"../menue/menue";

const Layout = () => {
    const [toggle,setToggle] = useState(true);

    function changeToggle(){
        setToggle(!toggle)
    }

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar":"sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={changeToggle}>
                {toggle? (<AiOutlineDoubleLeft size={30} />):(<AiOutlineDoubleRight size={30} />)} 
            </p>
          </div>
          <Menue toggle ={toggle}/>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
