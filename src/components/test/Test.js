import React, { Component } from "react";

class Test extends Component {
  // making https requests
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       email: "johndoe@gmail.com",
  //       phone: "555-555-555"
  //     },
  //     {
  //       id: 2,
  //       name: "Gips Brian",
  //       email: "gips@gmail.com",
  //       phone: "444-444-444"
  //     },
  //     {
  //       id: 3,
  //       name: "Wiz Gips",
  //       email: "wizgips@gmail.com",
  //       phone: "333-333-333"
  //     }
  //   ],
  //   dispatch: action => this.setState(state => reducer(state, action))
  // };
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    // console.log("ComponentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log("componentWillMount...");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps...");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return {
  //       test: "something"
  //     };
  //   }

  //   getSnapshotBeforeUpdate(nextProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate...");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
