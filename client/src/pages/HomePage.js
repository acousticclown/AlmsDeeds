import React from "react";
import { Row, Col } from "reactstrap";
import SalesCard from "../components/custom/SalesCard";
import Registrations from "../components/custom/SubscriberGained";
import Transactions from "../components/custom/Transactions";
import RevenueChart from "../components/custom/Revenue";
import GoalOverview from "../components/custom/GoalOverview";
import TableContent from "../components/custom/TableContent";
import RevenueGenerated from "../components/custom/RevenueGenerated";
import QuaterlySales from "../components/custom/QuaterlySales";
import DonationsSlider from "../extensions/swiper/CenteredSlidesStyle1";
import RequiredDonations from "../components/custom/RequiredDonations";
import {getAidData, getDashboardData} from "../redux/actions/home-page";
import {getRecentDonations} from "../redux/actions/donations";
import {getTopDonators} from "../redux/actions/donations";

import "../assets/scss/pages/dashboard-analytics.scss";
import "../assets/scss/pages/faq.scss";
import "swiper/css/swiper.css";
import "../assets/scss/plugins/extensions/swiper.scss";

import { connect } from "react-redux";

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger_light = "#f29292",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7";

class AnalyticsDashboard extends React.Component {

  componentDidMount = async () => {
    this.props.getAidData(); 
    this.props.getDashboardData(); 
    this.props.getRecentDonations(); 
    this.props.getTopDonators();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.userRole === "admin" && (
          <Row className="match-height">
            <Col lg="12" md="12">
              <SalesCard />
            </Col>
          </Row>
        )}
        <Row className="match-height">
          <Col lg="3" md="6" sm="6">
            <Registrations />
          </Col>
          <Col lg="3" md="6" sm="6">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="6">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="6">
            <Transactions />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
           < DonationsSlider />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="8" md="6" sm="12">
            <RevenueChart
              primary={$primary}
              dangerLight={$danger_light}
              strokeColor={$stroke_color}
              labelColor={$label_color}
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <GoalOverview strokeColor={$stroke_color} success={$success} />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="faq">
              <Row>
                <Col lg="3" md="5" sm="12">
                  <TableContent />
                </Col>
                <Col lg="9" md="7" sm="12">
                  <RequiredDonations />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userRole: state.auth.login.userRole,
});

export default connect(mapStateToProps, { getAidData, getDashboardData, getRecentDonations,getTopDonators })(AnalyticsDashboard);
