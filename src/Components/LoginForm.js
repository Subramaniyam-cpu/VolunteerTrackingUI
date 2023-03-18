
import React, {useState} from "react";
import Bootstrap from "./Bootstrap";
import axios from "axios";
export  default function  LoginForm(){
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePasswordchange = (event) => {
        setPassword(event.target.value);
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        if(name.length<1 ||password.length < 1  ){
            alert("Enter all the details ")
        }
        else{
            const   userData = {
                name:name,
                password:password,


            }
            axios
                .post('http://127.0.0.1:8000/register/idkletc', userData)
                .then((response) => {

                    console.log("its connected ")
                })
                .catch((error) => {
                    console.log('u failed ')
                });
        }
    }
    return(
        <div>
            <div className="container">
                <Bootstrap/>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder={name ? name : "Enter your name"}
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">
                            Location
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="location"
                            placeholder={password ? password : "Enter the password "}
                            value={password}
                            onChange={handlePasswordchange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    )


}