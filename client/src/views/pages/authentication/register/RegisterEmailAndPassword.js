import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import { connect } from "react-redux";
import { signupWithEmailAndPassword } from "../../../../redux/actions/auth/registerActions";
import { history } from "../../../../history";

class RegisterEmailAndPassword extends React.Component {
  state = {
    email: "",
    password: "",
    fullName: "",
    confirmPass: "",
    accHash: ""
  };

  handleRegister = (e) => {
    e.preventDefault();
    this.props.signupWithEmailAndPassword(this.state);
  };

  render() {
    return (
      <Form action="/" onSubmit={this.handleRegister}>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Full Name"
            required
            value={this.state.fullName}
            onChange={(e) => this.setState({ fullName: e.target.value })}
          />
          <Label>Full Name</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="email"
            placeholder="Email"
            required
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="text"
            placeholder="Account Hash"
            required
            value={this.state. accHash}
            onChange={(e) => this.setState({accHash: e.target.value })}
          />
          <Label>Account Hash</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
             <Label>Password</Label>
        </FormGroup>
        <FormGroup className="form-label-group">
          <Input
            type="password"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPass}
            onChange={(e) => this.setState({ confirmPass: e.target.value })}
          />
           <Label>Confirm Password</Label>
        </FormGroup>
        <FormGroup>
          <Checkbox
            color="primary"
            icon={<Check className="vx-icon" size={16} />}
            label=" I accept the terms & conditions."
            defaultChecked={true}
          />
        </FormGroup>
        <div className="d-flex justify-content-between">
          <Button.Ripple
            color="primary"
            outline
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button.Ripple>
          <Button.Ripple color="primary" type="submit">
            Register
          </Button.Ripple>
        </div>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.register,
  };
};
export default connect(mapStateToProps, { signupWithEmailAndPassword })(
  RegisterEmailAndPassword
);
