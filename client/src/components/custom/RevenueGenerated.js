import React from "react";
import {connect} from "react-redux"
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { CreditCard } from "react-feather";
import { revenueGeneratedSeries, revenueGenerated } from "./StatisticsData";

class RevenueGenerated extends React.Component {
  render() {
    const {donationAmt} = this.props;
    return (
      <StatisticsCard
        icon={<CreditCard className="success" size={22} />}
        iconBg="success"
        stat={`${donationAmt} Ethers`}
        statTitle="Amount Donated"
        options={revenueGenerated}
        series={revenueGeneratedSeries}
        type="area"
      />
    );
  }
}

const mapStateToProps = state => ({
  donationAmt: state.home.dashboardData.data.TotalDonation[0].sum
})

export default connect(mapStateToProps)(RevenueGenerated);
