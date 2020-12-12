import React from "react";
import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { Monitor, Smartphone } from "react-feather";

class SessionByDevice extends React.Component {
  state = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: { show: false },
      comparedResult: [2, -3, 8],
      labels: ["Collected", "Left"],
      stroke: { width: 0 },
      colors: [this.props.primary, this.props.warning],
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
    },
    series: [80, 20],
  };
  render() {
    return (
      <Card>
        <CardBody className="pt-0">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={290}
          />
          {/* <div className="chart-info d-flex justify-content-between mb-1 mt-2">
            <div className="series-info d-flex align-items-center">
              <Monitor size="18" className="primary" />
              <span className="text-bold-600 mx-50">Collected</span>
              <span className="align-middle"> - $160</span>
            </div>
          </div>
          <div className="chart-info d-flex justify-content-between mb-1 mt-1">
            <div className="series-info d-flex align-items-center">
              <Smartphone size="18" className="warning" />
              <span className="text-bold-600 mx-50">Remaining</span>
              <span className="align-middle"> - $40</span>
            </div>
          </div> */}
        </CardBody>
      </Card>
    );
  }
}
export default SessionByDevice;
