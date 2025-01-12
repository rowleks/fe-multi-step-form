import "./nav.scss";


interface NavProps {
  first?: boolean;
  last?: boolean;
  next?: () => void
  prev?: () => void
}
function Nav({ first = false, last = false, next, prev }: NavProps) {

  const handleClickNext = () => {
    if (next) { next()}
  }

  const handleClickPrev = () => {
    if (prev) { prev()}
  }
  return (
    <nav className="nav">
        <span onClick={handleClickPrev} className={first ? 'hide' : ''}>Go Back</span>
        <button onClick={handleClickNext} className={last ? 'last': ''}>{last ? 'Confirm' : 'Next Step'}</button>
      
    </nav>
  )
}

export default Nav
