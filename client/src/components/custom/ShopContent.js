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
    let renderProducts = this.props.donations.map((person, i) => {
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
                {/* <div className="shop-sidebar-toggler d-block d-lg-none">
                  <Menu
                    size={26}
                    onClick={() => this.props.mainSidebar(true)}
                  />
                </div> */}
                <div className="search-results">16285 Results Found</div>
              </div>
              {/* <div className="view-options d-flex justify-content-end w-75">
                <Select
                  className="React-Select"
                  classNamePrefix="select"
                  defaultValue={sortOptions[0]}
                  name="sort"
                  options={sortOptions}
                />
              </div> */}
            </div>
          </Col>
          {/* <Col sm="12">
            <div className="ecommerce-searchbar mt-1">
              <FormGroup className="position-relative">
                <Input
                  className="search-product"
                  placeholder="Search Here..."
                />
                <div className="form-control-position">
                  <Search size={22} />
                </div>
              </FormGroup>
            </div>
          </Col> */}
          <Col   sm="12">
            <div id="ecommerce-products" className={this.state.view}>
              {renderProducts}
            </div>
          </Col>
          <Col sm="12">
            <div className="ecommerce-pagination">
              <Pagination className="d-flex justify-content-center mt-2">
                <PaginationItem className="prev-item">
                  <PaginationLink href="#" first>
                    <ChevronLeft />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">7</PaginationLink>
                </PaginationItem>
                <PaginationItem href="#" className="next-item">
                  <PaginationLink href="#" last>
                    <ChevronRight />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShopContent;
