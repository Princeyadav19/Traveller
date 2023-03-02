import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
const nav__Links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tours",
  },
];
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* logo */}

            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* Menu strat */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__Links.map((item, index) => (
                  <li className="nav__items" key={index}>
                    <NavLink to={item.path}
                    className={navClass=> navClass.isActive?"active__Link":""}
                    >{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* Menu end */}

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className="btn primary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
