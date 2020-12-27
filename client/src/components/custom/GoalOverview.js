import React from "react"
import {connect} from "react-redux"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"
import { HelpCircle } from "react-feather"

class GoalOverview extends React.Component {
  getGoalInPercent = (pending, total) => {
    return ((total-pending)/total)*100
  }
  state = {
    options: {
      chart: {
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      },
      colors: [this.props.success],
      plotOptions: {
        radialBar: {
          size: 110,
          startAngle: -140,
          endAngle: 150,
          hollow: {
            size: "77%"
          },
          track: {
            background: this.props.strokeColor,
            strokeWidth: "50%"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 18,
              color: this.props.strokeColor,
              fontSize: "4rem"
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#00b5b5"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      }
    },
    series: [this.getGoalInPercent(4, this.props.totalAids)]
  }
  
  render() {
    let {totalAids} = this.props;
    // totalAids = parseInt(totalAids)
    console.log(totalAids)
    const demandPending = 4;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Goal Overview</CardTitle>
          {/* <HelpCircle size={20} className="cursor-pointer text-muted" /> */}
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={260}
          />
        </CardBody>
        <div className="d-flex mt-2">
          <div className="completed border-top border-right text-center w-50 py-1">
            <p className="mb-50">Completed</p>
            <p className="font-large-1 text-bold-600 mb-50">{totalAids-demandPending}</p>
          </div>
          <div className="in-progress border-top border-right text-center w-50 py-1">
            <p className="mb-50">Needed</p>
            <p className="font-large-1 text-bold-600 mb-50">{demandPending}</p>
          </div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  totalAids: state.home.dashboardData.data.TotalAids[0].count
})

export default connect(mapStateToProps)(GoalOverview);
