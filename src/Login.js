import { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </div>
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.onLoginClick}>
            login
          </button>
        </div>
      </div>
    );
  }

  onLoginClick = () => {
    console.log(this.state);
  };
}
