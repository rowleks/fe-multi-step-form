import "./sidebar.scss";
function Sidebar() {
  return (
    <>
    <aside className="sidebar" >

      <div className="step">
        <span className="active">1</span>
        <div className="step-info">
          <small>STEP 1</small>
          <span>YOUR INFO</span>
        </div>
      </div>

      <div className="step">
        <span>2</span>
        <div className="step-info">
          <small>STEP 2</small>
          <span>SELECT PLAN</span>
        </div>

      </div>
      <div className="step">
        <span>3</span>
        <div className="step-info">
          <small>STEP 3</small>
          <span>ADD-ONS</span>
        </div>
      </div>

      <div className="step">
        <span>4</span>
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
