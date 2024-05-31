import Stage from './stage'

function SummaryComponent()
{
    return(
        <div className='form-background' >
            <Stage currentStep ={4} />
            <form className='form-body' >
                <h1 > Summary </h1>
                <p>double check everthing is okay before confirming</p>
                <div className='summary' >
                    <h4>Arcade(Monthly)</h4>
                    <a href='/'> change </a>

                    <ul>
                        <li> extra storage <h6>+$2/mo</h6></li>
                        <li> custom profile <h6>+$2/mo</h6></li>
                    </ul>
                </div>

                <button className='go-back' > go back </button>
                <button type='submit' className='submit' >finnish up</button>
            </form>
        </div>
    );
}

export default SummaryComponent;