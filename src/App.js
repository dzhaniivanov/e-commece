import { Component } from "react";
import Login from "./Login";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Login />
      </>
    );
  }
}
