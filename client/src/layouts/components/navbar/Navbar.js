import React from "react";
import { Navbar } from "reactstrap";
import { connect } from "react-redux";
import classnames from "classnames";
import { useAuth0 } from "../../../authServices/auth0/auth0Service";
// import {
//   logoutWithJWT,
//   logoutWithFirebase,
//   logoutWithEmailAndPassword,
// } from "../../../redux/actions/auth/loginActions";
import NavbarBookmarks from "./NavbarBookmarks";
import NavbarUser from "./NavbarUser";
import userImg from "../../../assets/img/portrait/small/avatar-s-11.jpg";

const UserName = (data) => {
  let username = "";
  if (data !== undefined) {
    username = data.name;
  } else if (data.user.login.values !== undefined) {
    username = data.user.login.values.name;
    if (
      data.user.login.values.loggedInWith !== undefined &&
      data.user.login.values.loggedInWith === "emailAndPassword"
    ) {
      username = data.user.login.values.loggedInUser.fullName;
    }
  } else {
    username = "John Doe";
  }

  return username;
};
const ThemeNavbar = (props) => {
  const { user } = useAuth0();
  const colorsArr = ["primary", "danger", "success", "info", "warning", "dark"];
  const navbarTypes = ["floating", "static", "sticky", "hidden"];
  return (
    <React.Fragment>
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <Navbar
        className={classnames(
          "header-navbar navbar-expand-lg navbar navbar-with-menu navbar-shadow",
          {
            "navbar-light":
              props.navbarColor === "default" ||
              !colorsArr.includes(props.navbarColor),
            "navbar-dark": colorsArr.includes(props.navbarColor),
            "bg-primary":
              props.navbarColor === "primary" && props.navbarType !== "static",
            "bg-danger":
              props.navbarColor === "danger" && props.navbarType !== "static",
            "bg-success":
              props.navbarColor === "success" && props.navbarType !== "static",
            "bg-info":
              props.navbarColor === "info" && props.navbarType !== "static",
            "bg-warning":
              props.navbarColor === "warning" && props.navbarType !== "static",
            "bg-dark":
              props.navbarColor === "dark" && props.navbarType !== "static",
            "d-none": props.navbarType === "hidden" && !props.horizontal,
            "floating-nav":
              (props.navbarType === "floating" && !props.horizontal) ||
              (!navbarTypes.includes(props.navbarType) && !props.horizontal),
            "navbar-static-top":
              props.navbarType === "static" && !props.horizontal,
            "fixed-top": props.navbarType === "sticky" || props.horizontal,
            scrolling: props.horizontal && props.scrolling,
          }
        )}
      >
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div
              className="navbar-collapse d-flex justify-content-between align-items-center"
              id="navbar-mobile"
            >
              <div className="bookmark-wrapper">
                <NavbarBookmarks
                  // sidebarVisibility={props.sidebarVisibility}
                  // handleAppOverlay={props.handleAppOverlay}
                />
              </div>
              {/* {props.horizontal ? (
                <div className="logo d-flex align-items-center">
                  <div className="brand-logo mr-50"></div>
                  <h2 className="text-primary brand-text mb-0">Vuexy</h2>
                </div>
              ) : null} */}
              <NavbarUser
                handleAppOverlay={props.handleAppOverlay}
                // changeCurrentLang={props.changeCurrentLang}
                userName={() => UserName(user)}
                 userImg={
                  props.user.login.values !== undefined &&
                  props.user.login.values.loggedInWith !== "jwt" &&
                  props.user.login.values.photoUrl
                    ? props.user.login.values.photoUrl
                    : user !== undefined && user.picture
                    ? user.picture
                    : userImg
                }
                loggedInWith={
                  props.user !== undefined &&
                  props.user.login.values !== undefined
                    ? props.user.login.values.loggedInWith
                    :null
                }
                logoutWithEmailAndPassword={props.logoutWithEmailAndPassword}
                logoutWithJWT={props.logoutWithJWT}
                logoutWithFirebase={props.logoutWithFirebase}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps, {
    // logoutWithJWT,
    // logoutWithFirebase,
    // logoutWithEmailAndPassword,
  useAuth0,
})(ThemeNavbar);
