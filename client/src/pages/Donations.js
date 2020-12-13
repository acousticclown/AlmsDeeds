import React from "react";
import ShopContent from "../components/custom/ShopContent";
import {connect} from "react-redux"
import "../assets/scss/pages/app-ecommerce-shop.scss";
import { getDonations } from "../redux/actions/donations";

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

  componentDidMount() {
    getDonations();
  }

  render() {
    const {donations} = this.props;
    return (
      <React.Fragment>
        {/* <Breacrumbs
          // breadCrumbActive="Shop"
          // breadCrumbParent="eCommerce"
          breadCrumbTitle="Donate"
        /> */}
        <div className="ecommerce-application">
          <ShopContent donations={donations}/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps= (state) => ({
  donations: state.donations.donations.data
})

export default connect(mapStateToProps, {getDonations})(Shop);
