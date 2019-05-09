import React from "react";
// import axios from "axios";
// import { Redirect } from "react-router-dom";

// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  // login = () => {
  //   axios
  //     .post(`https://luncher-backend.herokuapp.com/api/login`, this.state)
  //     .then(response => {
  //       console.log(response);
  //       localStorage.setItem("token", response.data.token);
  //       this.setState({ ...this.state, token: true });
  //     })
  //     .catch(err => console.log(err));

  //   if (this.state.token) {
  //     return <Redirect to="/schools/schoolRoutes" />;
  //   } else {
  //   }
  // };

  render() {
    console.log({ login: this.props.login });
    return (
      <div className="login-container">
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>

        <button onClick={() => {this.props.login(this.state) }}>Login</button>
        <br />
      </div>
    );
  }
}

export default LoginForm;
