import "./nav.scss";

function Nav({ first = false }: { first?:boolean }) {
  return (
    <nav className="nav">
        <span className={first ? 'hide' : ''}>Go Back</span>
        <button>Next Step</button>
      
    </nav>
  )
}

export default Nav
