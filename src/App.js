import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {increment, incrementAsync} from './actions/counter';
import {get_user} from './actions/user';

class App extends Component {
  render() {
    const {isFetching, error, user} =this.props.users
    let data;
    if (error) {
      data = error
    } else if (isFetching) {
      data = 'Loading...'
    } else {
      data = user && user.data[0].name
    }
    console.log(this.props.users);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.counter}
        </p>
        <p>
          <button onClick={this.props.increment} className="btn btn-warning mb-3" >+</button>
          <br/>
          <button onClick={this.props.incrementAsync} className="btn btn-secondary mb-3" >async +</button>
          <br/>
          <button onClick={this.props.get_user} className="btn btn-dark mb-3" >click</button>
        </p>
        <h3>{ data }</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    counter: state.counter,
    users: state.users
  };
}


export default connect(mapStateToProps, {increment, incrementAsync, get_user})(App)