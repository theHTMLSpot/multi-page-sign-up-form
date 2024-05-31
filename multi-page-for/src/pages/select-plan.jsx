import SelectPlan from "../components/select-plan-component";

function SelectPlanPage({ setPlan, setMonthly }) {
    return (
        <div className="App">
            <header className="App-header">
                <SelectPlan setPlan1={setPlan} setMonthly1={setMonthly} />
            </header>
        </div>
    );
}

export default SelectPlanPage;