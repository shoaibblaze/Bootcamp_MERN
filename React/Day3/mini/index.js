import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import MainContent from "./maincontent";
import Footer from "./footer";
function Page(){
    return(
    <div>
       <Header/>
       <MainContent/>    
        <Footer/>
        
       
    </div>
    )
}

ReactDOM.render(<Page/>,document.getElementById("root"))