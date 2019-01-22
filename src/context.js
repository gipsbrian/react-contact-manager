import React, { Component } from "react";
import axios from "axios";

// This is the file we will have our global state
const Context = React.createContext();
// const Consumer = Context.Consumer;

// create a reducer method to handle of the actions form the components
// action is an obj - {type & payload}

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        // spread operator(...) to get the current state
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        // spread operator(...) to get the current state
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        // spread operator(...) to get the current state
        ...state,
        contacts: state.contacts.map(
          contact =>
            (contact.id = action.payload.id
              ? (contact = action.payload)
              : contact)
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    // async & await method
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });

    // synchronus method
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then(res => this.setState({ contacts: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
// export default (Consumer = Context.Consumer);
