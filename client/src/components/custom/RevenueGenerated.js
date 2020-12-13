import React from "react";
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { CreditCard } from "react-feather";
import { revenueGeneratedSeries, revenueGenerated } from "./StatisticsData";

class RevenueGenerated extends React.Component {
  render() {
    return (
      <StatisticsCard
        icon={<CreditCard className="success" size={22} />}
        iconBg="success"
        stat="9 Ethers"
        statTitle="Amount Donated"
        options={revenueGenerated}
        series={revenueGeneratedSeries}
        type="area"
      />
    );
  }
}
export default RevenueGenerated;
