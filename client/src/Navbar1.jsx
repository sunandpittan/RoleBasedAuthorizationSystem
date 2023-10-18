import React from "react";

function Navbar1({ userInfo }) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              {!userInfo ? (
                <>
                  <a className="nav-link" href="/signup">
                    Sign up
                  </a>
                  <a className="nav-link" href="/signin">
                    Sign in
                  </a>
                </>
              ) : userInfo.role === "admin" ? (
                <>
                  <a className="nav-link" href="/team">
                    Team
                  </a>
                  <a className="nav-link" href="/">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => localStorage.clear()}
                    >
                      Sign out
                    </button>
                  </a>
                </>
              ) : userInfo.role === "user" ? (
                <>
                  <a className="nav-link" href="/books">
                    Books
                  </a>
                  <a className="nav-link" href="/">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => localStorage.clear()}
                    >
                      Sign out
                    </button>
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;
