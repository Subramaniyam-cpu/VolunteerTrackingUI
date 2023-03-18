
import React, {useState} from "react";
import Bootstrap from "./Bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export  default function  Form(){
    const navigate = useNavigate()
     const [name,setName]=useState("");
    const [location,setLocation]=useState("");
    const [contact,setContact]=useState("");
    const [dob,setDob]=useState(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    });
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    const handleDobChange = (event) => {
        setDob(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const birthYear = new Date(dob).getFullYear();
        const age = currentYear - birthYear;
        if (age < 10 ) {
            alert("Sorry, you must be at least 10 years old to submit this form.");
            return;
        }
        if(name.length<1 || location.length < 1  || contact.length<1){
            alert("Enter all the details ")
        }
        else{
         const   userData = {
                name:name,
                location:location,
                contact:contact,
                dob:dob

            }
            axios
                .post('http://127.0.0.1:8000/register/', userData)
                .then((response) => {

                  console.log("its connected ")
                    navigate("/login")
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
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder={location ? location : "Enter your location"}
                            value={location}
                            onChange={handleLocationChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="contact"
                            placeholder={contact ? contact : "Enter your contact number"}
                            value={contact}
                            onChange={handleContactChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            value={dob}
                            onChange={handleDobChange}
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