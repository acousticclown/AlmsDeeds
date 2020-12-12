import React, { Component } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,

    Label,
    Input,
    Form,
    Button
  } from "reactstrap"
import {NavLink} from "react-router-dom"
import Breacrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";

import "../assets/scss/pages/app-ecommerce-shop.scss";

class Aid extends Component {
    // state = {
    //   id: "",
    //   name: "",
    //   category: "Audio",
    //   order_status: "pending",
    //   price: "",
    //   img: "",
    //   popularity: {
    //     popValue: "",
    //   },
    // }
    //   handleSubmit = (obj) => {
    //     if (this.props.data !== null) {
    //       this.props.updateData(obj);
    //     } else {
    //       this.addNew = true;
    //       this.props.addData(obj);
    //     }
    //     let params = Object.keys(this.props.dataParams).length
    //       ? this.props.dataParams
    //       : { page: 1, perPage: 4 };
    //     this.props.handleSidebar(false);
    //     this.props.getData(params);
    //   }
      render() {
        return (
            <Card>
        <CardHeader>
          <CardTitle>Apply For Aid</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
        <FormGroup>
        <Label for="data-name">Name</Label>
        <Input
          type="text"
          
          placeholder="Name"
          onChange={(e) => this.setState({ name: e.target.value })}
          id="data-name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="data-name">Account ID</Label>
        <Input
          type="text"
          
          placeholder="Account ID"
          onChange={(e) => this.setState({ accID: e.target.value })}
          id="data-accid"
        />
      </FormGroup>
      <FormGroup>
        <Label for="data-name">Email</Label>
        <Input
          type="email"
          
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
          id="data-email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="data-name">Contact No.</Label>
        <Input
          type="tel"
          placeholder="Contact No."
          onChange={(e) => this.setState({ contact: e.target.value })}
          id="data-contact"
        />
        </FormGroup>
        <FormGroup>
        <Label for="data-name">Category</Label>
        <Input
          type="text"
          
          placeholder="Category"
          onChange={(e) => this.setState({ category: e.target.value })}
          id="data-category"
        />
      </FormGroup>
      <FormGroup>
        <Label for="data-name">Description</Label>
        <Input
          type="text"
          
          placeholder="Category"
          onChange={(e) => this.setState({ category: e.target.value })}
          id="data-category"
        />
      </FormGroup>
      <FormGroup>
        <Label for="data-name">Description</Label>
        <Input
         type="textarea"
         name="description"
         rows="4"
          placeholder="Your Reason"
          onChange={(e) => this.setState({ description: e.target.value })}
          id="data-reason"
        />
      </FormGroup>
      <FormGroup>
        <Label for="data-name">Amount</Label>
        <Input
          type="text"
         
          placeholder="Amount"
          onChange={(e) => this.setState({ amount: e.target.value })}
          id="data-name"
        />
      </FormGroup>
      
      <Button color="primary" >
            Apply
          </Button>
<NavLink to="/">
      <Button
        className="ml-1"
        color="danger"
        outline
      > Cancel </Button>  
      </NavLink>
      </Form>
        </CardBody>
      </Card>
      );
  }
}
export default Aid;  