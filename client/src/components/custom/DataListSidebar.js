import React, { Component } from "react";
import { Label, Input, FormGroup, Button } from "reactstrap";
import { X } from "react-feather";
import PerfectScrollbar from "react-perfect-scrollbar";
import classnames from "classnames";

class DataListSidebar extends Component {
  state = {
    id: "",
    name: "",
    category: "Audio",
    order_status: "pending",
    price: "",
    img: "",
    popularity: {
      popValue: "",
    },
  };

  addNew = false;

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.data !== null && prevProps.data === null) {
  //     if (this.props.data.id !== prevState.id) {
  //       this.setState({ id: this.props.data.id })
  //     }
  //     if (this.props.data.name !== prevState.name) {
  //       this.setState({ name: this.props.data.name })
  //     }
  //     if (this.props.data.category !== prevState.category) {
  //       this.setState({ category: this.props.data.category })
  //     }
  //     if (this.props.data.popularity.popValue !== prevState.popularity) {
  //       this.setState({
  //         popularity: {
  //           ...this.state.popularity,
  //           popValue: this.props.data.popularity.popValue
  //         }
  //       })
  //     }
  //     if (this.props.data.order_status !== prevState.order_status) {
  //       this.setState({ order_status: this.props.data.order_status })
  //     }
  //     if (this.props.data.price !== prevState.price) {
  //       this.setState({ price: this.props.data.price })
  //     }
  //     if (this.props.data.img !== prevState.img) {
  //       this.setState({ img: this.props.data.img })
  //     }
  //   }
  //   if (this.props.data === null && prevProps.data !== null) {
  //     this.setState({
  //       id: "",
  //       name: "",
  //       category: "Audio",
  //       order_status: "pending",
  //       price: "",
  //       img: "",
  //       popularity: {
  //         popValue: ""
  //       }
  //     })
  //   }
  //   if (this.addNew) {
  //     this.setState({
  //       id: "",
  //       name: "",
  //       category: "Audio",
  //       order_status: "pending",
  //       price: "",
  //       img: "",
  //       popularity: {
  //         popValue: ""
  //       }
  //     })
  //   }
  //   this.addNew = false
  // }

  handleSubmit = (obj) => {
    if (this.props.data !== null) {
      this.props.updateData(obj);
    } else {
      this.addNew = true;
      this.props.addData(obj);
    }
    let params = Object.keys(this.props.dataParams).length
      ? this.props.dataParams
      : { page: 1, perPage: 4 };
    this.props.handleSidebar(false);
    this.props.getData(params);
  };

  render() {
    let { show, handleSidebar, data } = this.props;
    let {
      name,
      accID,
      amount,
    } = this.state;
    return (
      <div
        className={classnames("data-list-sidebar", {
          show,
        })}
      >
        <div className="data-list-sidebar-header mt-2 px-2 d-flex justify-content-between">
          {/* <h4>{data !== null ? "UPDATE DATA" : "ADD NEW DATA"}</h4> */}
          <X size={20} onClick={() => handleSidebar(false)} />
        </div>
        <PerfectScrollbar
          className="data-list-fields px-2 mt-3"
          options={{ wheelPropagation: false }}
        >
          <FormGroup>
            <Label for="data-name">Name</Label>
            <Input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
              id="data-name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-name">Account ID</Label>
            <Input
              type="text"
              className="act"
              value={accID}
              placeholder="Account ID"
              onChange={(e) => this.setState({ accID: e.target.value })}
              id="data-name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="data-name">Amount</Label>
            <Input
              type="text"
              className="amt"
              value={amount}
              placeholder="Amount"
              onChange={(e) => this.setState({ amount: e.target.value })}
              id="data-name"
            />
          </FormGroup>
        </PerfectScrollbar>
        <div className="data-list-sidebar-footer px-2 d-flex justify-content-start align-items-center mt-1">
          <Button className="pay-button" color="primary" onClick={() => handleSidebar(true)}>
            Transfer
          </Button>
          <Button
            className="ml-1"
            color="danger"
            outline
            onClick={() => handleSidebar(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}
export default DataListSidebar;
