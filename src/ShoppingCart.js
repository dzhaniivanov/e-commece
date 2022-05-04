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
      <div>
        <h4>ShoppingCart</h4>
        <div>
          {this.state.products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                productName={product.productName}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
