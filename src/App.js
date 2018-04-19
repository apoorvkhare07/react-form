import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "semantic-ui-react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      dob: moment()._d,
      number: "",
      gender: ""
    };
  }
  change = (e, { value }) => this.setState({ gender: value });

  handleChange = date => {
    console.log(date._d);
    let time = date._d;
    this.setState({
      dob: time
    });
  };

  submit = event => {
    event.preventDefault();
    axios.post("url", this.state).then(res => console.log(res));
  };

  render() {
    const options = [
      { key: 1, text: "Male", value: "male" },
      { key: 2, text: "Female", value: "female" }
    ];
    return (
      <div className="App container">
        <Form onSubmit={this.submit}>
          <Form.Field required>
            <label>First Name</label>
            <input
              placeholder="First Name"
              required
              value={this.state.firstName}
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field required>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              required
              value={this.state.lastName}
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field required>
            <label>Age</label>
            <input
              required
              type="number"
              placeholder="Age"
              value={this.state.age}
              onChange={event => this.setState({ age: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Date Of birth</label>
            <DatePicker
              selected={moment(this.props.endDate)}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Dropdown
              onChange={this.change}
              options={options}
              placeholder="Choose an option"
              selection
              value={this.state.gender}
            />
          </Form.Field>
          <Form.Field required>
            <label>Phone Number</label>
            <input
              required
              type="number"
              placeholder="Phone Number"
              maxLength="10"
              value={this.state.number}
              onChange={event => this.setState({ number: event.target.value })}
            />
          </Form.Field>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
