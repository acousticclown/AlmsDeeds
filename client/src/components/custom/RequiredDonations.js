import React, { Component } from "react";
import { Progress, Button } from "reactstrap";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight, ChevronsRight } from "react-feather";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../../history";
import {
  getData,
  getInitialData,
  filterData,
} from "../../redux/actions/data-list/";
import Chip from "../@vuexy/chips/ChipComponent";

import "../../assets/scss/plugins/extensions/react-paginate.scss";
import "../../assets/scss/pages/data-list.scss";

const chipColors = {
  "on hold": "warning",
  delivered: "success",
  pending: "primary",
  canceled: "danger",
};

const selectedStyle = {
  rows: {
    selectedHighlighStyle: {
      backgroundColor: "rgba(115,103,240,.05)",
      color: "#7367F0 !important",
      boxShadow: "0 0 1px 0 #7367F0 !important",
      "&:hover": {
        transform: "translateY(0px) !important",
      },
    },
  },
};

class DataListConfig extends Component {
  static getDerivedStateFromProps(props, state) {
    if (
      props.dataList.data.length !== state.data.length
      //   state.currentPage !== props.parsedFilter.page
    ) {
      return {
        data: props.dataList.data,
        allData: props.dataList.filteredData,
        totalPages: props.dataList.totalPages,
        currentPage: 0,
        rowsPerPage: 4,
        totalRecords: props.dataList.totalRecords,
        sortIndex: props.dataList.sortIndex,
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  state = {
    data: [],
    totalPages: 0,
    currentPage: 0,
    columns: [
      {
        name: "Name",
        selector: "name",
        minWidth: "300px",
        cell: (row) => (
          <p title={row.name} className="text-truncate text-bold-500 mb-0">
            {row.name}
          </p>
        ),
      },
      {
        name: "Category",
        selector: "category",
      },
      {
        name: "Progress",
        selector: "popularity",
        cell: (row) => (
          <Progress
            className="w-100 mb-0"
            color={row.popularity.color}
            value={row.popularity.popValue}
          />
        ),
      },
      {
        name: "Urgency",
        selector: "order_status",
        cell: (row) => (
          <Chip
            className="m-0"
            color={chipColors[row.order_status]}
            text={row.order_status}
          />
        ),
      },
      {
        name: "Amount",
        selector: "price",
        cell: (row) => `$${row.price}`,
      },
    ],
    allData: [],
    value: "",
    rowsPerPage: 4,
    currentData: null,
    selected: [],
    totalRecords: 0,
    sortIndex: [],
    addNew: "",
  };

  componentDidMount() {
    // this.props.getData({ page: 1, perPage: 4 });
    // this.props.getInitialData();
  }

  handleRowsPerPage = (value) => {
    let { getData } = this.props;
    let page = 1;
    history.push(`/data-list/list-view?page=${1}&perPage=${4}`);
    this.setState({ rowsPerPage: 4 });
    getData({ page, perPage: 4 });
  };

  handlePagination = (page) => {
    let {  getData } = this.props;
    let perPage = 4;
    getData({ page: page.selected + 1, perPage: perPage });
    this.setState({ currentPage: page.selected });
  };

  render() {
    let { columns, data, allData, value } = this.state;
    return (
      <div className="data-list list-view">
        <DataTable
          columns={columns}
          data={value.length ? allData : data}
          noHeader
          responsive
          pointerOnHover
          onSelectedRowsChange={(data) =>
            this.setState({ selected: data.selectedRows })
          }
          customStyles={selectedStyle}
        />
        <Link to="/support">
          <Button.Ripple className="btn-block shadow m-1" color="primary">
            View Details <ChevronsRight size={15} />
          </Button.Ripple>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataList: state.dataList,
  };
};

export default connect(mapStateToProps, {
  getData,
  getInitialData,
  filterData,
})(DataListConfig);
