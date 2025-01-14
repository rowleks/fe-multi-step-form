import "./success.scss"

function Success() {
    return (
<div className="steps-container">

    <div className="form-container last">

        <section className="step success">

            <div className="success-container">
                <img src="/icon-thank-you.svg" alt="checkmark" width="60px" />
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@rolexgaming.com</p>

            </div>
        </section>

    
    </div>

    <nav>
        <button onClick={() => window.location.reload()}>Return Home</button>
    </nav>


</div>
)
}

export default Success
