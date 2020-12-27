import React from "react";
import {connect} from "react-redux";
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { Users } from "react-feather";
import { subscribersGained } from "./StatisticsData";

class SubscriberGained extends React.Component {
  subscribersGainedSeries = [
    {
      name: "Registerations",
      data: this.props.registrations && this.props.registrations.map(registration => registration.count)
    }
  ]

  render() {
    return (
      <StatisticsCard
        icon={<Users className="primary" size={22} />}
        stat={`${this.props.registrations[0].count}`}
        statTitle="No. of Registrations"
        options={subscribersGained}
        series={this.subscribersGainedSeries}
        type="area"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  registrations: state.home.dashboardData.data.TotalUsers
})

export default connect(mapStateToProps)(SubscriberGained);
