import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Image from "../img/iContribute_Animation.gif"
import Notification from "./Notifcation"

toast.configure()
const Main = () => {

    // Later on we will have specfic ones to handle errors
    const notfiy = () => {
        toast(<Notification/>, { 
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000
        })
    }

  return (
    <div>
        <div className="main-container">
            <div className="info-block">
                <h1>Caring for Our Community</h1>
                <h2>Launching Spring 2021</h2>
                <div className="email-block">
                    <form className="email-form">
                        <input 
                            type="text"
                            className="email-input"
                            placeholder="Your Email">
                        </input>
                    </form>
                    <button className="signup-button" onClick={notfiy}>Sign Up</button>
                </div>
            </div>
            <div className="main-image-container">
             <img id="main-image" src={Image}/> 
            </div>
        </div>
    </div>
  );
};

export default Main;