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
    details: {
      Aiddetails: {
        patientId: "",
            aidId: "",
            description: "",
            category: "",
            image: "",
            document: "",
            contact_no: "",
            amount: 0,
            urgency: "",
            created_at: "",
            updated_at: "",
            patientDetails: {
                "id": "",
                "fullName": "",
                "accHash": "",
                "email": "",
                "password": "",
                "image": "",
                "created_at": "",
                "updated_at": ""
            },
            "ReqDon": []
      }
    }
  };

  handleSidebar = (boolean) => {
    this.setState({ sidebar: boolean });
  };

  toggleSelectedColor = (color) => this.setState({ selectedColor: color });

  componentDidMount = async () => {
    const details = await this.props.getPersonById(this.props.match.params.id);
    this.setState({details})
  }

  render() {
    const {details} = this.state;
    // const fullName = details.AidDetails.patientDetails.fullName || ""
    console.log(details)
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col className="d-flex flex-column mb-2 mb-md-0" sm="12" md="5">
                <h3>{details.Aiddetails.patientDetails.fullName}</h3>
                <hr />
                <div className="d-flex flex-column">
                  <span className="text-muted">Email: {details.Aiddetails.patientDetails.email|| ""}</span>
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
                  <h3 className="text-primary">{details.Aiddetails.amount}</h3>
                </div>
                <hr />
                <p>
                  {details.Aiddetails.patientDetails.description|| ""}
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
                    {details.Aiddetails.patientDetails.accHash|| ""}
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
