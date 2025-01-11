import Heading from "../heading/Heading";
import "./step2.scss";

function Step2() {

  const h2 = "Select your plan";
  const p = "You have the option of monthly or yearly billing.";
  return (
    <section className="step">
      <Heading heading={h2} text={p}/>

      <form className="form2">

        <label htmlFor="arcade">
          <input type="radio" name="plan" id="arcade" />
            <img src="/icon-arcade.svg" alt="arcade" />
            <div>
              <h4>Arcade</h4>
              <small>$9/mo</small>
            </div>
        </label>

        <label htmlFor="advanced">
          <input type="radio" name="plan" id="advanced" />
            <img src="/icon-advanced.svg" alt="arcade" />
            <div>
              <h4>Advanced</h4>
              <small>$12/mo</small>
            </div>
        </label>

        <label htmlFor="pro">
          <input type="radio" name="plan" id="pro" />
            <img src="/icon-pro.svg" alt="arcade" />
            <div>
              <h4>Pro</h4>
              <small>$15/mo</small>
            </div>
        </label>

        <div className="toggle-div">
          <label className="switch" htmlFor="toggle">
            <input type="checkbox" name="switch" id="toggle" />
            <span className="slider"></span>
          </label>
          <span className="monthly">Monthly</span>
          <span className="yearly">Yearly</span>
        </div>

      </form>

    </section>
  )
}

export default Step2
