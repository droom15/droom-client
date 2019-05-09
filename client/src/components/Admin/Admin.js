import React, { Component } from "react";
import axios from "axios";
// import School from './School';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      role: "admin"
    };
  }

  componentDidMount() {
    // if logged in then do this else go to create user
    // this.props.history? .push probably -- give route to the login page
    if (!this.props.isLoggedIn) {
      this.props.history.push("/");
    } else {
    axios
      .get("https://luncher-backend.herokuapp.com/api/admin/school")
      .then(res => {
        console.log(res.data);
        this.setState({ schools: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  }
  // addSchool = school => {
  //   axios
  //     .post("https://droom-buildweek-4-15-19.herokuapp.com/api/", school)
  //     .then(res => {
  //       this.setState({ schools: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ error: err });
  //     });
  // };

  render() {
    console.log("schools:", this.state.schools)
    return (
      <div className="Admin">
        <h1>Admin.js</h1>
        <ul>
          {/* {this.state.schools.map(school => {
            {
               console.log(school) 
            }
            return (
              //  <h3>{school}</h3>
              
              <h3>{this.schools.schoolName}</h3> */}
                {this.state.schools.map(school => {
                  console.log("school", school)
            return (
              // if logged in then go here if not go to login
              <div key={school.id}>
                <li>
                  {school.schoolName}, {school.state}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

// Schools.defaultProps = {
//  smurfs: [],
// };

export default Admin;
