import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const categories = useSelector((state) => state.news.categories);
  const languages = useSelector((state) => state.news.languages);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/category"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News Category
                </NavLink>
                <ul className="dropdown-menu">
                  {categories.length > 0 &&
                    categories.map((c) => (
                      <li>
                        <Link
                          className="dropdown-item textCapitalized"
                          to={`/category/${c}`}
                        >
                          {c}
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/language"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languages
                </NavLink>
                <ul className="dropdown-menu">
                  {languages.length > 0 &&
                    languages.map((lang) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/language/${lang}`}
                        >
                          {lang}
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
