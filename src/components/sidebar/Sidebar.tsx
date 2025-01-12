import "./sidebar.scss";
function Sidebar( { step }: { step: number}) {
  return (
    <>
    <aside className="sidebar" >

      <div className="step">
        <span className={step===1 ? 'active' : ''}>1</span>
        <div className="step-info">
          <small>STEP 1</small>
          <span>YOUR INFO</span>
        </div>
      </div>

      <div className="step">
        <span className={step===2 ? 'active' : ''}>2</span>
        <div className="step-info">
          <small>STEP 2</small>
          <span>SELECT PLAN</span>
        </div>

      </div>
      <div className="step">
        <span className={step===3 ? 'active' : ''}>3</span>
        <div className="step-info">
          <small>STEP 3</small>
          <span>ADD-ONS</span>
        </div>
      </div>

      <div className="step">
        <span className={step>=4 ? 'active' : ''}>4</span>
        <div className="step-info">
          <small>STEP 4</small>
          <span>SUMMARY</span>
        </div>
      </div>
    </aside>
    </>
  )
}

export default Sidebar
