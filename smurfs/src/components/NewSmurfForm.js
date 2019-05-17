import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { newSmurf } from "../actions"
// import SmurfList from "./SmurfList";


class NewSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  componentDidMount() {
    // call our action
    console.log("Friends list view props", this.props)
    
  }
  addSmurf = e => {
    console.log("Add new smurf props", this.props)
    console.log("Add new smurf state", this.state)
    e.preventDefault();
    this.props.newSmurf(this.state);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}
// export default App;
const mapStateToProps = state => ({

})
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    newSmurf/* action creators go here */
  }
)(NewSmurfForm);