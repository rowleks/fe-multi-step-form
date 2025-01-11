import "./step1.scss";
import "../heading/Heading";
import Heading from "../heading/Heading";
import Nav from "../../nav/Nav";

function Step1() {

  const h2 = "Personal info";
  const p = "Please provide your name, email address and phone number";

  return (
    <div className="steps-container">
      <div className="form-container">
        <section className="step">
          <Heading heading={h2} text={p} />

          <form id="form" className="form1">
            <label htmlFor="user-name">
              <div>Name</div>
              <input type="text" id="user-name" name="user-name" autoComplete="off" placeholder="e.g. Stephen King" />
            </label>

            <label htmlFor="user-mail">
              <div>Email Address</div>
              <input type="email" id="user-mail" name="user-mail" autoComplete="new-password" placeholder="e.g. stephenking@lorem.com" />
            </label>

            <label htmlFor="number">
              <div>Phone Number</div>
              <input type="text" id="number" name="number" autoComplete="off" placeholder="e.g. +1 234 567 890" />
            </label>
          </form>
        </section>
      </div>

      <div> <Nav first={true}/> </div>
    

      
    </div>
  )
}

export default Step1
