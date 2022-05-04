import { Component } from "react";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ShoppingCart />
        
      </>
    );
  }
}
