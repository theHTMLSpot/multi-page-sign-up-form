import React from "react";


class MainInfoForm extends React.Component
{
    render()
    {
        
        return(
            <div className="form-background">
               
                <h2>Personal Info </h2>
                <form className="form-body" >
                    <label htmlFor="name"> Name </label>
                    <input id="name" required placeholder="e.g. Stephen King" />
                    <label htmlFor="email"> Email </label>
                    <input id="email" type="email" required placeholder="e.g. stephenking@loem.com" />
                    <label htmlFor="phone-number"> Phone Number </label>
                    <input id="phone-number" type="phoneNumber" required placeholder="e.g. +1 2 345678 " />

                    <button type="submit" className="submit"> Next Step </button>
                </form>
            </div>
        );
    }
}

export default MainInfoForm;