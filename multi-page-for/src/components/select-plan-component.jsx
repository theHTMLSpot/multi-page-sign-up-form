import Stage from "./stage";
import { ReactComponent as Arcade} from '../icon-arcade.svg'
import { ReactComponent as Advanced} from '../icon-advanced.svg'
import { ReactComponent as Pro} from '../icon-pro.svg'


function SelectPlan()
{
    const handleClick = ( ) => 
        {

        }
    return (
        <div className="form-background">
            <Stage currentStage={2} />
            
            <form className="form-body" onSubmit={handleClick}>
                <h2>Select plan</h2>

                <div className="select-plan-container">
                    <label htmlFor="arcade" className="select-plan"><Arcade /> arcade</label>
                    <input type="radio" id="arcade" name="plan" value={1} className="hidden"/>
                    <label htmlFor="advanced" className="select-plan"><Advanced /> advanced</label>
                    <input type="radio" id="advanced" name="plan" value={2} className="hidden"/>
                    <label htmlFor="pro" className="select-plan"><Pro /> pro</label>
                    <input type="radio" id="pro" name="plan" value={3} className="hidden"/>
                </div>

                
            </form>
        </div>
    );
}

export default SelectPlan;