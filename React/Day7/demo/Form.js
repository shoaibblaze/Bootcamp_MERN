import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {emailAddress:"", password:"" ,confirmPassword:"", newsletter:true }
    )
    
    function handleChange(event) {
        const {name,value,type,checked} =event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name]: type ==="checkbox" ? checked:value
            }
        })
     }
    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password===formData.confirmPassword){
            console.log("Successfully signed up");
        }
        else{
            console.log("passwords do not match");
            return
        }


        if(formData.newsletter){
            console.log("Thanks for joining the newsletter");
        }
    }
    return (
        <div className="form-container">
            
            <form className="form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Email address"
                    onChange={handleChange}
                    name="emailAddress"
                    value={formData.emailAddress}
                
                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input
                    type="text"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                />
                <div className="form--marketing">
                <input 
                    type="checkbox" 
                    id="newsletter" 
                    checked={formData.newsletter}
                    onChange={handleChange}
                    name="newsletter"

                />
                <label htmlFor="newsletter">Joined news letter</label>
               
                </div>
            <button className="form--submit">Sign Up</button>   
            </form>
        </div>
    )
}
