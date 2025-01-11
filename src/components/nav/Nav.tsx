import "./nav.scss";


interface NavProps {
  first?: boolean
  last?: boolean
}
function Nav({ first = false, last = false }: NavProps) {
  return (
    <nav className="nav">
        <span className={first ? 'hide' : ''}>Go Back</span>
        <button>{last ? 'Confirm' : 'Next Step'}</button>
      
    </nav>
  )
}

export default Nav
