import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { ChevronDown } from "react-feather";
import Chart from "react-apexcharts";
import Chip from "../@vuexy/chips/ChipComponent";

const chipColors = {
  moderate: "warning",
  neutral: "success",
  critical: "danger",
};
class Productorders extends React.Component {
  state = {
    options: {
      chart: {
        dropShadow: {
          enabled: false,
          blur: 5,
          left: 1,
          top: 1,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: [this.props.primary, this.props.warning, this.props.danger],
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: [
            this.props.primaryLight,
            this.props.warningLight,
            this.props.dangerLight,
          ],
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: { show: false },
      stroke: {
        width: 5,
      },
      labels: ["Collected", "Remaining"],
    },
    series: [160, 40],
  };
  render() {
    const { name, urgency, collectedAmount, remainingAmount } = this.props;
    console.log(urgency);
    return (
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>

          <Chip className="m-0" color={chipColors[urgency]} text={urgency} />
          {/* urgency pill will come here */}

          {/* <UncontrolledDropdown>
            <DropdownToggle
              tag="small"
              className="text-bold-500 cursor-pointer"
            >
              Last 7 days <ChevronDown size={10} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Last 28 days</DropdownItem>
              <DropdownItem>Last Month</DropdownItem>
              <DropdownItem>Last Year</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </CardHeader>
        <CardBody className="pt-0">
          <Chart
            options={this.state.options}
            series={[collectedAmount, remainingAmount]}
            type="pie"
            height={290}
          />
        </CardBody>
        <ListGroup flush>
          <ListGroupItem className="d-flex justify-content-between">
            <div className="item-info">
              <div
                className="bg-primary"
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "0 5px",
                }}
              />
              <span className="text-bold-600">Collected</span>
            </div>
            <div className="product-result">
              <span>{collectedAmount}</span>
            </div>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between">
            <div className="item-info">
              <div
                className="bg-warning"
                style={{
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "0 5px",
                }}
              />
              <span className="text-bold-600">Remaining</span>
            </div>
            <div className="product-result">
              <span>{remainingAmount}</span>
            </div>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}
export default Productorders;
