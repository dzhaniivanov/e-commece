import { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 1000, quantity: 0 },
      { id: 2, productName: "Samsung QLEED TV", price: 2000, quantity: 0 },
      { id: 3, productName: "iPad Pro", price: 3200, quantity: 0 },
      { id: 4, productName: "xbox", price: 3232, quantity: 0 },
      { id: 5, productName: "Dell Monitor", price: 500, quantity: 0 },
    ],
  };

  render() {
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

    allProducts.splice(index, 1);
    this.setState({
      products: allProducts,
    });
  };
}
