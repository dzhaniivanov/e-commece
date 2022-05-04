import { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    console.log("constructor-shoppingcart");
    super(props);
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 1000, quantity: 0 },
        // { id: 2, productName: "Samsung QLEED TV", price: 2000, quantity: 0 },
        // { id: 3, productName: "iPad Pro", price: 3200, quantity: 0 },
        // { id: 4, productName: "xbox", price: 3232, quantity: 0 },
        // { id: 5, productName: "Dell Monitor", price: 500, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render-shoppingcart");

    return (
      <div className="container-fluid">
        <h4>ShoppingCart</h4>
        <div className="row">
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">buy now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  //executes after constructor and render medthod
  componentDidMount() {
    console.log("didmount-shoppingcart");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "updated-shoppingcart",
      prevProps,
      prevState,
      this.props,
      this.state
    );
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  componentDidCatch(error, info) {
    console.log("didCatch");
    console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity += 1;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity -= 1;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("are u sure to delete")) {
      allProducts.splice(index, 1);
      this.setState({
        products: allProducts,
      });
    }
  };
}
