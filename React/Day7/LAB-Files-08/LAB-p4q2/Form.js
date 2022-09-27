import React from "react"

export default function Form() {
    const[formData,setFormDate] = React.useState(
       {firstName:"", lastName:""}
    )

    console.log(formData);
    function handleChange(event){
       setFormDate( prevFormData =>{
        return{
            ...prevFormData,
            [event.target.name]: event.target.value
        }
       })
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
            />
        </form>
    )
}
