import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions"
import SmurfList from "./SmurfList";
import NewSmurfForm from './NewSmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log("Friends list view props", this.props)
    this.props.fetchSmurfs();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    
    return (
      <div className="FriendsList_wrapper">
        <SmurfList smurfs={this.props.smurfs} />
        <NewSmurfForm/>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error,
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    fetchSmurfs/* action creators go here */
  }
)(App);