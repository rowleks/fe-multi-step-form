import Heading from "../heading/Heading";
import "./step4.scss"
import Nav from "../../nav/Nav";

interface Step4Props {
    nextStep?: () => void
    prevStep?: () => void
    gotoStep: (step: number) => void

    plan: {
        name: string
        value: string
        checked: boolean
    };

    addOns: { name: string, value: string }[]

  }

function Step4({nextStep, prevStep, plan, addOns, gotoStep}:Step4Props) {

    const h2 = "Finishing up";
    const p = "Double-check everything looks OK before confirming.";

    const timeFrame = plan.checked ? 'yr' : 'mo'

    // const calculateTotal = () => {
        
    // }

    const handleNext = () => {
        if(nextStep) { nextStep()}
    }
    
    const handlePrev = () => {
    if(prevStep) { prevStep()}
    }

    const calculateTotal = () => {
        const planCost = parseFloat(plan.value);
        const addOnsCost = addOns.reduce((total, addOn) => {
            return total + parseFloat(addOn.value);
        }, 0)
        
        const grandTotal = plan.checked 
          ? (planCost + (addOnsCost * 12)) 
            : (planCost + addOnsCost);

        return grandTotal.toFixed();
    }

    

    return (
        <div className="steps-container">

        <div className="form-container">

            <section className="step">
                <Heading heading={h2} text={p}/>

                <div className="checkout-container">
                    <div className="plan">
                        <div>
                            <h4>{plan.name} {plan.checked ? '(yearly)' : '(monthly)'}</h4>
                            <span onClick={() => gotoStep(2)}>Change</span>
                        </div>
                        <h5>{`$${plan.value}/${timeFrame}`}</h5>
                    </div>
                    
                    { addOns.length > 0 && <hr />}

                    { 
                    addOns.length > 0 ? addOns.map((addOn, index) => (
                        <div key={index} className="add-ons">
                            <span>{addOn.name}</span>
                            <h5>{`+$${addOn.value}/mo`}</h5>
                        </div>
                    )) : null
                    }
                </div>

                <div className="total">
                    <span>Total {plan.checked ? '(per year)' : '(per month)'}</span>
                    <h4>{`+$${calculateTotal()}/${timeFrame}`}</h4>
                </div>

            </section>
        </div>

        <div> <Nav next={handleNext} prev={handlePrev} last/> </div>

    </div>
    )
}

export default Step4
