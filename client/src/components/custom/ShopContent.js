import React from "react";
import Select from "react-select";
import {
  Row,
  Col,
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { ChevronLeft, ChevronRight} from "react-feather";
import { Link } from "react-router-dom";

import CustomersChart from "./Customers";

import "../../assets/scss/plugins/forms/react-select/_react-select.scss";

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292";
class ShopContent extends React.Component {
  state = {
    inCart: [],
    inWishlist: [],
    view: "grid-view",
  };

  render() {
    console.log(this.props.donations);
    let renderProducts = this.props.donations && this.props.donations.map((person, i) => {
      console.log(person)
      return (
        <Link to={`/support/${person.aidId}`}>
          <CustomersChart
            primary={$primary}
            warning={$warning}
            danger={$danger}
            primaryLight={$primary_light}
            warningLight={$warning_light}
            dangerLight={$danger_light}
            name={person.patientDetails.fullName}
            urgency={person.urgency}
            collectedAmount={5000}
            remainingAmount={2000}
          />
        </Link>
      );
    });
    return (
      <div className="shop-content">
        <Row>
          <Col  sm="12" >
            <div className="ecommerce-header-items">
              <div className="result-toggler w-25 d-flex align-items-center">
                <div className="search-results">16285 Results Found</div>
              </div>
            </div>
          </Col>
          <Col   sm="12">
            <div id="ecommerce-products" className={this.state.view}>
              {renderProducts}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShopContent;
