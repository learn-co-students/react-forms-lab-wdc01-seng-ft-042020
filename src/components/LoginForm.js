import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    };
  }

  handleType = (e, key ) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      if (this.state.username && this.state.password) {
          this.props.handleLogin(this.state)
      }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(e) => this.handleType(e, "uname") }/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(e) => this.handleType(e, "pword") }/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
