import { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1080/60",
      },

      {
        id: 2,
        name: "john",
        phone: "323-123",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1078/60",
      },
      {
        id: 3,
        name: "bob",
        phone: "567-456",
        address: { city: "Berlin" },
        photo: "https://picsum.photos/id/1015/60",
      },
      {
        id: 4,
        name: "mariah",
        phone: null,
        address: { city: "Dubai" },

        photo: "https://picsum.photos/id/1033/60",
      },
      {
        id: 5,
        name: "david",
        phone: null,
        address: { city: "Tolbuhin" },
        photo: "https://picsum.photos/id/1050/60",
      },
    ],
  };
/* 
  customerNameStyle = (customerName) => {
    if (customerName.startsWith("s")) return { backgroundColor: "green" };
    else if (customerName.startstWith("b")) return { backgroundColor: "red" };
    else return {};
  }; */

  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
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
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">no phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((customer) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.photo} alt="customer" />
          </td>
          <td >{customer.name}</td>
          <td>{this.getPhoneToRender(customer.phone)}</td>
          <td>{customer.address.city}</td>
        </tr>
      );
    });
  };
}
