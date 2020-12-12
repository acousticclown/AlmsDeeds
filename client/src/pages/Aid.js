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
import {aidRequest} from "../redux/actions/askForAid";

import "../assets/scss/pages/app-ecommerce-shop.scss";
import { connect } from "react-redux";

class Aid extends Component {
    state = {
      name:"",
      email: "",
      category: "Medicinal Aid",
      urgency: "neutral",
      description:"",
      amount:"" ,
      image: "",
      document:"",
      contact_no:"",
    }
      handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        aidRequest(this.state);
      }
      render() {
        return (
            <Card>
        <CardHeader>
          <CardTitle>Apply For Aid</CardTitle>
        </CardHeader>
        <CardBody>
          <Form  action="/" onSubmit={this.handleSubmit}>
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
        <Label for="data-urgency">Urgency</Label>
        <Input
          type="text"
          
          placeholder="Urgency"
          onChange={(e) => this.setState({ urgency: e.target.value })}
          id="data-urgency"
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
      
      <Button color="primary"  type="submit" >
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