import {Link, NavLink} from 'react-router-dom'
import {useAuth} from '../../contexts'

export default function NavigationBar() {
  const {loggedUser} = useAuth()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark min-h-2.5">
      <div className="container px-lg-5">
        <Link className="navbar-brand" to="/">📑 Journal You Think</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            {!loggedUser && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            {loggedUser && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/myjournal">
                  MyJournal
                </NavLink>
              </li>
            )}
            {loggedUser && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
