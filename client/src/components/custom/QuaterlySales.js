import React from "react";
import {connect} from "react-redux";
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { Users } from "react-feather";
import { quaterlySales, quaterlySalesSeries } from "./StatisticsData";

class QuaterlySales extends React.Component {
  render() {
    const {donors} = this.props;
    return (
      <StatisticsCard
        icon={<Users className="danger" size={22} />}
        iconBg="danger"
        stat={`${donors}`}
        statTitle="No. of Donors"
        options={quaterlySales}
        series={quaterlySalesSeries}
        type="area"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  donors: state.home.dashboardData.data.TotalAids[0].count
})

export default connect(mapStateToProps)(QuaterlySales);
