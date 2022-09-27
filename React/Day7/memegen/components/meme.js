// import React from "react";
// import memesData from "../data/memesData";

// function Meme(){
//     const [meme,setMeme]= React.useState({
//         topText:"",
//         bottomText:"",
//         randomImage:"http://i.imgflip.com/1bij.jpg"
//     })
//      const [memeImage , setMemeImage]= React.useState(memesData)
        
//     // function getMemeImage(){
//     //     const memesArray = memesData.data.memes
//     //     const randomNumber = Math.floor(Math.random() * memesArray.length)
      
//     //     const url = memesArray[randomNumber].url
//     //     // console.log(url);
//     //   

//     function getMemeImage(){
//         const memesArray = memeImage.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length) 
//         const url= memesArray[randomNumber].url
//         console.log("hello");
//         setMemeImage(prevMeme =>({
//             ...prevMeme,
//             randomImage:url
//         }))
// }  
//         function handleChange(event){
//             const{name,value}=event.target
           
//             setMeme(prevMeme =>({
               
//                     ...prevMeme,
//                     [name]:value
                   
                
//             }))
//         }
      
//     return(
//         <main>
//             <div className="form">
            
//                 <input
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                     onChange={handleChange}
//                     value={meme.topText}
//                     name="topText"
//                 />
//                  <input
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                     onChange={handleChange}
//                     value={meme.bottomText}
//                     name="bottomText"
//                 />
//                 <button 
//                     className="form--button"
//                     onClick={getMemeImage}                
//                 >
//                     Get a new meme image
//                 </button>
            
//             </div>
//             <div className="meme">

//             <img src={meme.randomImage} alt="" className="meme--image"/>
//             <h2 className="meme--text top">{meme.topText}</h2>
//             <h2 className="meme--text bottom">{meme.bottomText}</h2>
//             </div>
//         </main>
//     )
// }

// export default Meme




import React from "react"
import memesData from "../data/memesData";


export default function Meme() {
   
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    
    return (
        <main>
            <div className="form">
                <input 
                   type="text"
                   placeholder="Top text"
                   className="form--input"
                   name="topText"
                   value={meme.topText}
                   onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}