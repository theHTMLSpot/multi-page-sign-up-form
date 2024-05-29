import React from "react";
import MainInfoForm from "../components/main-info-sign-in";

function YourInfo({setName, setEmail, setPhoneNumber})
{
    return(
        <div className="App">
            <header className="App-header">
                <MainInfoForm setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}/>
            </header> 
        </div>
    );
}

export default YourInfo;