import { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "scott", phone: "123-456" },
      { id: 2, name: "john", phone: "323-123" },
      { id: 3, name: "bob", phone: "567-456" },
      { id: 4, name: "mariah", phone: "235-009" },
      { id: 5, name: "david", phone: "318-888" },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span>{this.state.customersCount}</span>
          <button onClick={this.onRefreshClick} className="btn btn-info">
            refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
}
