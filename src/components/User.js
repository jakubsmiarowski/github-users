import React from "react";
import "./User.css";

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img
          className="user-photo"
          src={this.props.user.avatar_url}
          style={{ maxWidth: "100px" }}
          alt="github user"
        />
        <a
          href={this.props.user.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.user.login}
        </a>
      </div>
    );
  }
}

export default User;
