
import Heading from "../heading/Heading";
import "./step3.scss";
import Nav from "../../nav/Nav";

interface Step3Props {
    nextStep?: () => void
    prevStep?: () => void

    checked: {
        service: boolean
        storage: boolean
        profile: boolean
    }

    setChecked: React.Dispatch<React.SetStateAction<{
        service: boolean
        storage: boolean
        profile: boolean
    }>>

    addOns: { name: string, value: string }[]
    setAddOns: React.Dispatch<React.SetStateAction<{ name: string, value: string }[]>>
  }

function Step3({nextStep, prevStep, checked, setChecked, addOns, setAddOns }:Step3Props) {

const h2 = "Pick add-ons";
const p = "Add-ons help enhance your gaming experience.";


const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target
    setChecked(prev => ({...prev, [id]: checked}))
    handleAddOns(e)
}


const handleAddOns = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const option = { name, value }
    setAddOns((prev) => {
        if(e.target.checked) 
        {
            return [...prev, option]
        } else {
            return prev.filter(addOn => addOn.name !== name)
        }
    })
}

const handleNext = () => {
    if(nextStep) { nextStep()}
  }

  const handlePrev = () => {
    if(prevStep) { prevStep()}
  }

  console.log(addOns)
    return (
    <div className="steps-container">

        <div className="form-container">

            <section className="step">
                <Heading heading={h2} text={p}/>

                <form className="form3">

                    <label htmlFor="service">
                        <input 
                        type="checkbox" name="Online service" id="service" value={1}
                        checked={checked.service}
                        onChange={handleChange}/>
                        <div>
                            <h4>Online service</h4>
                            <small>Access to multiplayer games</small>
                        </div>
                        <span>+$1/mo</span>
                    </label>

                    <label htmlFor="storage">
                        <input 
                        type="checkbox" name="Larger storage" id="storage" value={2}
                        checked={checked.storage}
                        onChange={handleChange}/>
                        <div>
                            <h4>Larger storage</h4>
                            <small>Extra 1TB of cloud save</small>
                        </div>
                        <span>+$2/mo</span>
                    </label>

                    <label htmlFor="profile">
                        <input 
                        type="checkbox" id="profile"
                        name="Customizable profile"
                        value={2}
                        checked={checked.profile}
                        onChange={handleChange}/>
                        <div>
                            <h4>Customizable profile</h4>
                            <small>Custom theme on your profile</small>
                        </div>
                        <span>+$2/mo</span>
                    </label>
                </form>
            </section>
        </div>

        <div> <Nav next={handleNext} prev={handlePrev}/> </div>



    </div>
  )
}

export default Step3
