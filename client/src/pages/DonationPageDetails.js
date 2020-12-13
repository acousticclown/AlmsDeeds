import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import {
  Truck,
  DollarSign,
} from "react-feather";
import {connect} from "react-redux"
import Sidebar from "../components/custom/DataListSidebar";
import classnames from "classnames";
import SessionByDevice from "../components/custom/SessionByDevice";
import "swiper/css/swiper.css";
import "../assets/scss/pages/app-ecommerce-shop.scss";
import {getPersonById} from "../redux/actions/donations/";

import "../assets/scss/plugins/extensions/react-paginate.scss";
import "../assets/scss/pages/data-list.scss";

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292";

class DetailPage extends React.Component {
  state = {
    selectedColor: 1,
    sidebar: false,
  };

  handleSidebar = (boolean) => {
    this.setState({ sidebar: boolean });
  };

  toggleSelectedColor = (color) => this.setState({ selectedColor: color });

  componentDidMount() {
    this.props.getPersonById(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col className="d-flex flex-column mb-2 mb-md-0" sm="12" md="5">
                <h3>Aman Khubani</h3>
                <hr />
                <div className="d-flex flex-column">
                  <span className="text-muted">Email: aman.khubani@gmail.com</span>
                  <span className="text-muted">Contact: 9131299848</span>
                </div>
                <SessionByDevice
                  primary={$primary}
                  warning={$warning}
                  danger={$danger}
                  primaryLight={$primary_light}
                  warningLight={$warning_light}
                  dangerLight={$danger_light}
                />
              </Col>
              <Col md="7" sm="12">
                <div className="d-flex flex-wrap">
                  <h3 className="text-primary">500000</h3>
                </div>
                <hr />
                <p>
                  Simplify your everyday life with the Google Home, a
                  voice-activated speaker powered by the Google Assistant. Use
                  voice commands to enjoy music, get answers from Google and
                  manage everyday tasks. Google Home is compatible with Android
                  and iOS operating systems, and can control compatible smart
                  devices such as Chromecast or Nest.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-50">
                    <Truck size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      Collected: $160
                    </span>
                  </li>
                  <li>
                    <DollarSign size={15} />
                    <span className="align-middle font-weight-bold ml-50">
                      Left: $40
                    </span>
                  </li>
                </ul>
                <hr />
                <p className="my-50">
                  <span>Account ID</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">
                    0x1fDa7f9bB9a55F26e33Dd957605A0474883e7DbD
                  </span>
                </p>
                <div className="action-btns">
                  <Button.Ripple
                    onClick={() => this.handleSidebar(true)}
                    className="mr-1 mb-1"
                    color="primary"
                  >
                    <span className="align-middle ml-50">Donate</span>
                  </Button.Ripple>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardBody>
          </CardBody>
        </Card>
        <div
          className={`data-list ${
            this.props.thumbView ? "thumb-view" : "list-view"
          }`}
        >
          <Sidebar
            show={this.state.sidebar}
            handleSidebar={this.handleSidebar}
            dataParams={this.props.parsedFilter}
          />
          <div
            className={classnames("data-list-overlay", {
              show: this.state.sidebar,
            })}
            onClick={() => this.handleSidebar(false)}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps =(dispatch) => ({
  getPersonById: (id) => getPersonById(id)
})

export default connect(null, mapDispatchToProps)(DetailPage);
