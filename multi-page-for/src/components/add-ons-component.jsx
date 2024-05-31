import Stage from "./stage";
import { useNavigate } from 'react-router-dom';
import { useNavigation } from './navigation-context';
import { useState } from "react";

function AddOnsComponent() {
    const navigate = useNavigate();
    const { goToNextStep } = useNavigation();

    const [addOns, setAddOns] = useState({
        onlineServices: false,
        largerStorage: false,
        customizableProfile: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setAddOns(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Handle the add-ons submission logic here
        // For example, you can pass addOns to a parent component or store them in a global state
        
        goToNextStep();
        navigate('/summary'); // Navigate to the summary or next step
    };

    return (
        <div className="form-background">
            <Stage currentStage={3}/>
            <form className="form-body" onSubmit={handleSubmit}>
                <h2>Add-Ons</h2>

                <ul className="add-ons">
                    <li className="add-ons-item">
                        <input 
                            type="checkbox" 
                            name="onlineServices" 
                            checked={addOns.onlineServices}
                            onChange={handleCheckboxChange} 
                        />
                        
                        <div>
                            <h3>Online Services</h3>
                            <p>Access to multiplayer games</p>
                        </div>

                        <p>+$1/mo</p>
                    </li>
                    <li className="add-ons-item">
                        <input 
                            type="checkbox" 
                            name="largerStorage" 
                            checked={addOns.largerStorage}
                            onChange={handleCheckboxChange} 
                        />
                        
                        <div>
                            <h3>Larger Storage</h3>
                            <p>Extra 1TB of cloud save</p>
                        </div>

                        <p>+$2/mo</p>
                    </li>
                    <li className="add-ons-item">
                        <input 
                            type="checkbox" 
                            name="customizableProfile" 
                            checked={addOns.customizableProfile}
                            onChange={handleCheckboxChange} 
                        />
                        
                        <div>
                            <h3>Customizable Profile</h3>
                            <p>Custom theme for your profile</p>
                        </div>

                        <p>+$2/mo</p>
                    </li>
                </ul>

                <button type="button" className="go-back" onClick={() => navigate('/select-plan')}>Go Back</button>
                <button type="submit" className="submit">Next Step</button>
            </form>
        </div>
    );
}

export default AddOnsComponent;