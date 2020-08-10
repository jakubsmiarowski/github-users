import React from "react";
import UsersList from "./components/UsersList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      users: [],
    };
  }

  onChangeHandle(event) {
    this.setState({ searchText: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { searchText } = this.state;
    const url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => this.setState({ users: responseJson.items }));
  }

  render() {
    return (
      <div className="user-search-app">
        <div className="user-search-comp">
          <h3>Search engine for github users profiles</h3>
          <form onSubmit={(event) => this.onSubmit(event)}>
            <label htmlFor="searchText">Type user name </label>
            <input
              type="text"
              id="searchText"
              onChange={(event) => this.onChangeHandle(event)}
              value={this.state.searchText}
            />
          </form>
        </div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
