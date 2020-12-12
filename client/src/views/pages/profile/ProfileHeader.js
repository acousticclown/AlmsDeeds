import React from "react"
import {
  Row
} from "reactstrap"
import { Edit2, Settings, Menu, X } from "react-feather"
import coverImg from "../../../assets/img/profile/user-uploads/cover.jpg"
import profileImg from "../../../assets/img/profile/user-uploads/user-13.jpg"

class ProfileHeader extends React.Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="profile-header mb-2">
        <div className="position-relative">
            <div className="profile-img-container d-flex align-items-center justify-content-center">
              <img
                src={profileImg}
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1"
              />
            </div>
          <div className="cover-container profile-header-nav">
              <h4 className="mb-0 pt-md-1 pt-sm-50 pl-2">Acc. Id:<span className="text-success pl-2">udhbkw54brv43bgrvwkjw</span> </h4> <br />
              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Name:<strong className="pl-2">John Doe</strong> </h5> <br />
              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Email:<strong className="pl-2">john@gmail.com</strong> </h5>  <br />

              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Donations:<strong className="pl-2">5</strong> </h5> <br />

              <h5 className="mb-0 pt-md-1 pt-sm-50 pl-2">Transactions:<strong className="pl-2">8</strong> </h5> <br />
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center profile-header-nav">
          {/* <Navbar expand="sm" className="w-100 pr-0">
            <NavbarToggler onClick={this.toggle}>
              {this.state.isOpen ? <X size={20} /> : <Menu />}
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="justify-content-around w-75 ml-sm-auto navbar-nav">
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Timeline
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    About
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Photos
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Friends
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Videos
                  </NavLink>
                </NavItem>
                <NavItem className="px-sm-0">
                  <NavLink tag="a" href="#" className="font-small-3">
                    Events
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar> */}
        </div>
      </div>
    )
  }
}
export default ProfileHeader
