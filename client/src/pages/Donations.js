import React from "react";
import Sidebar from "react-sidebar";
import ShopSidebar from "../components/custom/Sidebar";
import ShopContent from "../components/custom/ShopContent";
import Breacrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";

import "../assets/scss/pages/app-ecommerce-shop.scss";

const mql = window.matchMedia(`(min-width: 992px)`);
class Shop extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false,
  };
  UNSAFE_componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  };

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  };
  render() {
    return (
      <React.Fragment>
        {/* <Breacrumbs
          // breadCrumbActive="Shop"
          // breadCrumbParent="eCommerce"
          breadCrumbTitle="Donate"
        /> */}
        <div className="ecommerce-application">
          {/* <div
            className={`shop-content-overlay ${
              this.state.sidebarOpen ? "show" : ""
            }`}
            onClick={() => this.onSetSidebarOpen(false)}
          ></div> */}
          {/* <div className="sidebar-section">
            <Sidebar
              sidebar={<ShopSidebar />}
              docked={this.state.sidebarDocked}
              open={this.state.sidebarOpen}
              sidebarClassName="sidebar-shop"
              touch={true}
              contentClassName="sidebar-children d-none"
            >
              ""
            </Sidebar>
          </div> */}
          <ShopContent
            // mainSidebar={this.onSetSidebarOpen}
            // sidebar={this.state.sidebarOpen}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default Shop;