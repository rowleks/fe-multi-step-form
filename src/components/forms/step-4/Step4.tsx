import Heading from "../heading/Heading";
import "./step4.scss"
import Nav from "../../nav/Nav";

function Step4() {

    const h2 = "Finishing up";
    const p = "Double-check everything looks OK before confirming.";
    return (
        <div className="steps-container">

        <div className="form-container">

            <section className="step">
                <Heading heading={h2} text={p}/>

                <div className="checkout-container">
                    <div className="plan">
                        <div>
                            <h4>Arcade (Monthly)</h4>
                            <span>Change</span>
                        </div>
                        <h5>$9/mo</h5>
                    </div>
                    <hr />

                    <div className="add-ons">
                        <span>Online service</span>
                        <h5>$1/mo</h5>
                    </div>

                    <div className="add-ons">
                        <span>Larger storage</span>
                        <h5>$2/mo</h5>
                    </div>

                </div>

                <div className="total">
                    <span>Total (per month)</span>
                    <h4>$12/mo</h4>
                </div>
            </section>
        </div>

        <div> <Nav last={true}/> </div>

    </div>
    )
}

export default Step4
