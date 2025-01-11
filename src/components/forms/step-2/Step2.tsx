import { useState } from "react";
import Heading from "../heading/Heading";
import "./step2.scss";
import Nav from "../../nav/Nav";

function Step2() {
  const [checkbox, setCheckbox] = useState(false)
  const handleCheckbox = () => {
    setCheckbox(!checkbox)
  }

  const h2 = "Select your plan";
  const p = "You have the option of monthly or yearly billing.";
  return (
    <div className="steps-container">

    <div className="form-container">

    <section className="step">
      <Heading heading={h2} text={p}/>

      <form className="form2">

        <label htmlFor="arcade">
          <input type="radio" name="plan" id="arcade" />
            <img src="/icon-arcade.svg" alt="arcade" />
            <div>
              <h4>Arcade</h4>
              <small>{checkbox ? '$90/yr' : '$9/mo'}</small>
              {checkbox && <h5>2 months free</h5>}
            </div>
        </label>

        <label htmlFor="advanced">
          <input type="radio" name="plan" id="advanced" />
            <img src="/icon-advanced.svg" alt="arcade" />
            <div>
              <h4>Advanced</h4>
              <small>{checkbox ? '$120/yr' : '$12/mo'}</small>
              {checkbox && <h5>2 months free</h5>}
            </div>
        </label>

        <label htmlFor="pro">
          <input type="radio" name="plan" id="pro" />
            <img src="/icon-pro.svg" alt="arcade" />
            <div>
              <h4>Pro</h4>
              <small>{checkbox ? '$150/yr' : '$15/mo'}</small>
              {checkbox && <h5>2 months free</h5>}
            </div>
        </label>

        <div className="toggle-div">
          <label className="switch" htmlFor="toggle">
            <input 
            type="checkbox" checked={checkbox}
            name="switch" onChange={handleCheckbox}
            id="toggle" />
            <span className="slider"></span>
          </label>
          <span className="monthly">Monthly</span>
          <span className="yearly">Yearly</span>
        </div>

      </form>

    </section>
      </div>

    <div> <Nav/> </div>



    </div>
  )
}

export default Step2
