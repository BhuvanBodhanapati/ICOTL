import React from "react";
import "./navbar.css";
import { appConstants } from "../../constants/appConstants";
import mits_logo from "../../assets/mitsLogo.jpeg";
import Typography from "@mui/material/Typography";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const pathname = useLocation();
  console.log(pathname, "fwfw");
  const upperNavItemsList = [
    {
      name: "Home",
      path: `${appConstants.HOME}`,
      className: "upperNavItems",
    },
    {
      name: "Important Dates",
      path: `${appConstants.IMPORTANT_DATES}`,
      className: "upperNavItems",
    },
    {
      name: "Venue",
      path: `${appConstants.VENUE}`,
      className: "upperNavItems",
    },
    {
      name: "Committee",
      path: `${appConstants.ORGANIZING_COMMITTEE}`,
      className: "upperNavItems",
    },
  ];

  const lowerNavItemsList = [
    {
      name: "Call for Paper",
      path: `${appConstants.CALL_FOR_PAPER}`,
      className: "lowerNavItems",
    },
    {
      name: "Call For Special Session",
      path: `${appConstants.CALL_FOR_SPECIAL_SESSION}`,
      className: "lowerNavItems",
    },
    {
      name: "Submission",
      path: `${appConstants.SUBMISSION}`,
      className: "lowerNavItems",
    },

    {
      name: "Program",
      path: `${appConstants.PROGRAM}`,
      className: "lowerNavItems",
    },
    {
      name: "Registration",
      path: `${appConstants.REGISTRATION}`,
      className: "lowerNavItems",
    },
    {
      name: "Access",
      path: `${appConstants.ACCESS}`,
      className: "lowerNavItems",
    },
    {
      name: "Visa",
      path: `${appConstants.VISA}`,
      className: "lowerNavItems",
    },
  ];

  const handleMenuIcon = () => {
    document.querySelector(".lowerNavbar")?.classList.toggle("open");
    document.querySelector(".navbar")?.classList.toggle("open");
    document.querySelector(".upperNavbar")?.classList.toggle("open");
    document.querySelector(".container").classList.toggle("change");
  };

  return (
    <div>

      <div className="navbar" id="navbar">
        <div className="upperNavbar" id="upperNavbar">
          <div className="upperNavBarLogo">
            <img className="mits_logo" src={mits_logo} />
            {/* <img className='ieee_logo' src={ieee_logo} /> */}
            <label className="titleText">ICOTL 2k26</label>
            <div></div>
          </div>
          <div>
            <div className="upperNavItemsList">
              {upperNavItemsList.map((navItem, index) => (
                <NavLink
                  to={navItem.path}
                  key={index}
                  className={
                    pathname.pathname === navItem.path
                      ? "upperNavItems_active"
                      : "upperNavItems"
                  }
                  onClick={handleMenuIcon}
                >
                  {navItem.name}
                </NavLink>
              ))}
            </div>
            <div className="container" id="container" onClick={handleMenuIcon}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
        <div className="lowerNavbar" id="lowerNavbar">
          <div className="lowerNavItemsList" id="lowerNavItemsList">
            {lowerNavItemsList.map((navItem, index) => (
              <NavLink
                to={navItem.path}
                key={index}
                className={
                  pathname.pathname === navItem.path
                    ? "lowerNavItems_active"
                    : "lowerNavItems"
                }
                onClick={handleMenuIcon}
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
