import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { NewsInitialStateInterface } from "../redux/reducers/news.reducer";

export default function Header() {
  const categories = useSelector(
    (state: NewsInitialStateInterface) => state.categories
  );
  const languages = useSelector(
    (state: NewsInitialStateInterface) => state.languages
  );
  const [selectedCategory, setSelectedCategory] = useState("NewsCategory");
  const [selectedLanguage, setSelectedLanguage] = useState("languageCategory");
  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };
  const handleLanguageChange = (lang: any) => {
    setSelectedLanguage(lang);
  };

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  {`Category: ${selectedCategory}`}
                </NavLink>
                <ul className="dropdown-menu">
                  {categories.length > 0 &&
                    categories.map((category) => (
                      <li >
                        <Link
                          className="dropdown-item textCapitalized"
                          to={`/category/${category}`}
                          onClick={() => handleCategoryChange(category)}
                        >
                          {category}
                        </Link>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
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
                  {`Language: ${selectedLanguage}`}
                </NavLink>
                <ul className="dropdown-menu">
                  {languages.length > 0 &&
                    languages.map((lang) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/language/${lang}`}
                          onClick={() => handleLanguageChange(lang)}
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
