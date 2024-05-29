import React, { useState } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Stage from './stage';

function MainInfoForm({ setName, setEmail, setPhoneNumber }) {   
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleClick = (event) => {
        event.preventDefault();

        // Validate phone number
        const phoneNumberObject = parsePhoneNumberFromString(inputPhoneNumber, 'US');
        if (phoneNumberObject && phoneNumberObject.isValid()) {
            setError('');
            setName(inputName);
            setEmail(inputEmail);
            setPhoneNumber(inputPhoneNumber);

            alert(`Submitted: ${inputName}, ${inputEmail}, ${inputPhoneNumber}`);
        } else {
            setError('Invalid phone number.');
        }
    };
    
    return (
        <div className="form-background">
            <Stage currentStage={1} />
            
            <form className="form-body" onSubmit={handleClick}>
                <h2>Personal Info</h2>

                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    required 
                    placeholder="e.g. Stephen King" 
                    onChange={(e) => setInputName(e.target.value)} 
                />

                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="e.g. stephenking@loem.com" 
                    onChange={(e) => setInputEmail(e.target.value)} 
                />

                <label htmlFor="phone-number">Phone Number</label>
                <input 
                    id="phone-number" 
                    type="tel" 
                    required 
                    placeholder="e.g. +1 2345678" 
                    value={inputPhoneNumber}
                    onChange={(e) => {setInputPhoneNumber(e.target.value)}} 
                />

                <button type="submit" className="submit">Next Step</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default MainInfoForm;