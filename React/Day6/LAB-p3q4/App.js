import React from "react"

export default function App() {
    function handleClick(){
        console.log("I was clicked!");
    }
    function handleHover(){
        console.log("it is working");
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" alt="" />
            <button onClick={handleClick} onMouseEnter={handleHover}>Click me</button>
        </div>
    )
}
