import React from "react";


function Stage({currentStage})
{
        return(
            <>
                <div className="background">
                    <div className="step"> 
                        <div className="step-number" id={currentStage === 1 ? 'active-step-number' : ''}> 1 </div>
                        <div className="step-text">
                            <p> step 1</p>
                            <h5> your info </h5>
                        </div>
                    </div>
                    <div className="step">  
                        <div className="step-number" id={currentStage === 2 ? 'active-step-number' : ''} > 2 </div>
                        <div className="step-text">
                            <p> step 2</p>
                            <h5> select plan </h5>
                        </div>
                    </div>
                    <div className="step"> 
                        <div className="step-number" id={currentStage === 3 ? 'active-step-number' : ''} > 3 </div>
                        <div className="step-text">
                            <p> step 3</p>
                            <h5> add ons </h5>
                        </div>
                    </div>
                    <div className="step"> 
                        <div className="step-number" id={currentStage === 4 ? 'active-step-number' : ''} > 4 </div>
                        <div className="step-text">
                            <p> step 4</p>
                            <h5> summary </h5>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Stage;