import React from "react";
import {connect} from "react-redux";
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { Users } from "react-feather";
import { subscribersGained } from "./StatisticsData";

class SubscriberGained extends React.Component {
  // subscribersGainedSeries = [
  //   {
  //     name: "Registerations",
  //     data: this.props.registrations && this.props.registrations.map(registration => registration.count)
  //   }
  // ]

  render() {
    const {registrations} = this.props;
    console.log(registrations);
    return (
      <StatisticsCard
        icon={<Users className="primary" size={22} />}
        stat={`${registrations || 0}`}
        statTitle="No. of Registrations"
        options={subscribersGained}
        series={[1,2,3,4,5,6]}
        type="area"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  registrations: state.home.dashboardData.data.TotalUsers[0].count
})

export default connect(mapStateToProps)(SubscriberGained);
// export default SubscriberGained;

