// import { useState } from "react";
import Heading from "../heading/Heading";
import "./step3.scss";
import Nav from "../../nav/Nav";

function Step3() {

const h2 = "Pick add-ons";
const p = "Add-ons help enhance your gaming experience.";
    return (
    <div className="steps-container">

        <div className="form-container">

            <section className="step">
                <Heading heading={h2} text={p}/>

                <form className="form3">

                    <label htmlFor="service">
                        <input type="checkbox" name="addOns" id="service" />
                        <div>
                            <h4>Online service</h4>
                            <small>Access to multiplayer games</small>
                        </div>
                        <span>+$1/mo</span>
                    </label>

                    <label htmlFor="storage">
                        <input type="checkbox" name="addOns" id="storage" />
                        <div>
                            <h4>Larger storage</h4>
                            <small>Extra 1TB of cloud save</small>
                        </div>
                        <span>+$2/mo</span>
                    </label>

                    <label htmlFor="profile">
                        <input type="checkbox" name="addOns" id="profile" />
                        <div>
                            <h4>Customizable profile</h4>
                            <small>Custom theme on your profile</small>
                        </div>
                        <span>+$2/mo</span>
                    </label>
                </form>
            </section>
        </div>

        <div> <Nav/> </div>



    </div>
  )
}

export default Step3
