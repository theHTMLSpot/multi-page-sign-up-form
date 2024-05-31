import Stage from "./stage";
import { ReactComponent as Arcade } from '../icon-arcade.svg';
import { ReactComponent as Advanced } from '../icon-advanced.svg';
import { ReactComponent as Pro } from '../icon-pro.svg';
import { useNavigate } from 'react-router-dom'; // Correct hook from react-router-dom
import { useNavigation } from './navigation-context';
import { useState } from "react";

function SelectPlan({ setPlan1, setMonthly1 }) {
    const navigate = useNavigate(); // Correct usage of navigate
    const { goToNextStep } = useNavigation();

    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isMonthly, setIsMonthly] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (selectedPlan !== null) {
            setPlan1(selectedPlan);
            setMonthly1(isMonthly);
            goToNextStep();
            navigate('/add-ons');
        } else {
            alert('Please select a plan');
        }
    };

    const getPrice = (pricePerMonth) => {
        return isMonthly ? `$${pricePerMonth}/mo` : `$${pricePerMonth * 10}/yr`;
    };

    return (
        <div className="form-background">
            <Stage currentStage={2} />
            
            <form className="form-body" onSubmit={handleSubmit}>
                <h2>Select Plan</h2>

                <div className="select-plan-container">
                    <label htmlFor="arcade" className={selectedPlan === 1 ? 'active-select-plan' : 'select-plan'}>
                        <Arcade className="select-plan-icon" />
                        <div className="select-plan-text">
                            <p>Arcade</p>
                            <p className="price">{getPrice(9)}</p>
                        </div>
                    </label>
                    <input 
                        type="radio" 
                        id="arcade" 
                        name="plan" 
                        value={1} 
                        className="hidden" 
                        onChange={(e) => setSelectedPlan(Number(e.target.value))} 
                    />
                    
                    <label htmlFor="advanced" className={selectedPlan === 2 ? 'active-select-plan' : 'select-plan'}>
                        <Advanced className="select-plan-icon" />
                        <div className="select-plan-text">
                            <p>Advanced</p>
                            <p className="price">{getPrice(12)}</p>
                        </div>
                    </label>
                    <input 
                        type="radio" 
                        id="advanced" 
                        name="plan" 
                        value={2} 
                        className="hidden" 
                        onChange={(e) => setSelectedPlan(Number(e.target.value))} 
                    />
                    
                    <label htmlFor="pro" className={selectedPlan === 3 ? 'active-select-plan' : 'select-plan'}>
                        <Pro className="select-plan-icon" />
                        <div className="select-plan-text">
                            <p>Pro</p>
                            <p className="price">{getPrice(15)}</p>
                        </div>
                    </label>
                    <input 
                        type="radio" 
                        id="pro" 
                        name="plan" 
                        value={3} 
                        className="hidden" 
                        onChange={(e) => setSelectedPlan(Number(e.target.value))} 
                    />
                </div>
                
                <div className="monthly-yearly">
                    <p id="monthly" className={isMonthly ? 'active' : ''}>Monthly</p>

                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={!isMonthly} 
                            onChange={() => setIsMonthly(!isMonthly)} 
                        />
                        <span className="slider round" />
                    </label>

                    <p id="yearly" className={!isMonthly ? 'active' : ''}>Yearly</p>   
                </div>

                <button type="button" className="go-back" onClick={() => navigate('/')}>Go Back</button>
                <button type="submit" className="submit">Next Step</button>
            </form>
        </div>
    );
}

export default SelectPlan;