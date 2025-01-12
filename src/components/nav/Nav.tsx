import "./nav.scss";


interface NavProps {
  first?: boolean;
  last?: boolean;
  next?: () => void
}
function Nav({ first = false, last = false, next }: NavProps) {

  const handleClick = () => {
    if (next) { next()}
  }
  return (
    <nav className="nav">
        <span className={first ? 'hide' : ''}>Go Back</span>
        <button onClick={handleClick} className={last ? 'last': ''}>{last ? 'Confirm' : 'Next Step'}</button>
      
    </nav>
  )
}

export default Nav
