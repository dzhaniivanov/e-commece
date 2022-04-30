import { Component } from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <MainContent />
      </>
    );
  }
}
