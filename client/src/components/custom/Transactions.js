import React from "react";
import {connect} from "react-redux";
import StatisticsCard from "../@vuexy/statisticsCard/StatisticsCard";
import { Package } from "react-feather";
import { ordersReceived, ordersReceivedSeries } from "./StatisticsData";

class OrdersReceived extends React.Component {
  render() {
    const {transactions} = this.props;
    return (
      <StatisticsCard
        icon={<Package className="warning" size={22} />}
        iconBg="warning"
        stat={`${transactions}`}
        statTitle="Transactions Made"
        options={ordersReceived}
        series={ordersReceivedSeries}
        type="area"
      />
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.home.dashboardData.data.TransactionMade[0].count
})

export default connect(mapStateToProps)(OrdersReceived);

