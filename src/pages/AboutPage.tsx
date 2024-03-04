import React from "react";
import { useNavigate } from "react-router-dom";

 
export const AboutPage: React.FC = () => {

    const navigate = useNavigate();

    return(
        <>
            <h1>Page Info</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos distinctio nam, a eaque suscipit porro temporibus omnis veniam. 
                Saepe necessitatibus odit praesentium, quae ea expedita mollitia accusantium sequi facilis magni.</p>
            <button className="btn" onClick={() => navigate('/')}>Back</button>
        </>
    )
}