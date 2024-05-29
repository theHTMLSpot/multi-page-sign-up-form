import React from "react";
import MainInfoForm from "../components/main-info-sign-in";

function YourInfo({setName, setEmail, setPhoneNumber})
{
    return(
        <>
            <MainInfoForm setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}/>
                
        </>
    );
}

export default YourInfo;