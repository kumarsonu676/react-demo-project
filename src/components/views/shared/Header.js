import { Link, useLocation, useNavigate } from "react-router-dom";
import { authenticationService } from "../../../services/authentication.service";

export default function Header() {
  let navigate = useNavigate();
  let location = useLocation();

  function logout(e) {
    e.preventDefault();
    authenticationService.logout();
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about-us" ? "active" : ""
                  }`}
                  to="/about-us"
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact-us" ? "active" : ""
                  }`}
                  to="/contact-us"
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/teams" ||
                    location.pathname.startsWith("/teams/")
                      ? "active"
                      : ""
                  }`}
                  to="/teams"
                >
                  Teams
                </Link>
              </li>

              {authenticationService.getCurrentUserName() === "" ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/app/login">
                    Login
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <a href="#" className="nav-link" onClick={logout}>
                      Logout
                    </a>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">
                      {authenticationService.getCurrentUserName()}
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
