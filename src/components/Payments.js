import React from 'react';

class PayItem extends React.Component {
constructor(props) {
  super(props);
  
  this.state = { qty: 0 };
}
  
  buy = () => {
    this.setState({ qty: this.state.qty +1 });
    this.props.handleTotal(this.props.price);
  }

  show = () => {
    this.props.showProduct(this.props.name);
  }

  render() {

    return (

      <div className="">
        <li className="list-group-item d-flex justify-content-between my-2">
          <h5>{this.props.name}: <strong>{this.props.price}zł</strong></h5>
          <div className="todo-icon text-right">
          <button className="mx-2 btn btn-warning mt-3" onClick={this.buy}>Dodaj</button>
          <button className="mx-2 btn btn-success mt-3" onClick={this.show}>Info</button>
          <hr/>
          <h5 className="text-center">Ilość: {this.state.qty}</h5>
          </div>
        </li>
      </div>
    )
  }
}

class TotalPrice extends React.Component {
  render() {
    return (
      <div>
        <h3>Razem: {this.props.total} zł</h3>
      </div>
    )
  }
}

class PayInput extends React.Component {

  submit = e => {
    e.preventDefault();

    const product = {
      name: this.refs.name.value,
      // eslint-disable-next-line
      price: parseInt(this.refs.price.value)
    } 

    console.log(product);

  this.props.handleCreate(product);

  this.refs.name.value = "";
  this.refs.price.value ="";

  };

  render() {

    return (
      <div>
      <h5 className="todo-title text-center">Wprowadź płatność</h5>
      <div className="card card-body my-3">
        <form onSubmit={this.submit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Wpisz nazwę płatności" ref="name"/>
        </div>
        <br/>
        <div>
          <input type="text" className="form-control" placeholder="Wpisz cenę płatności" ref="price"/>
        </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">Dodaj płatność</button>
        </form>
      </div>
      </div>
    )
  };
}

class PayList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: [
        {name: "Czynsz", price: 345},
        {name: "Internet+TV", price: 75}
      ]
    };
  }

  createProduct = (product) => {
    this.setState({
      productList: this.state.productList.concat(product)
    });
  }

  calculateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    });
  }

  showProduct = (name) => {
    alert("Wybrałeś " + name);
  }

    render() {
      const component = this;
      const products = this.state.productList.map((product, i) => {
        return (
          <div key={i}>
          <PayItem
          name={product.name} price={product.price}
          showProduct={component.showProduct} 
          handleTotal={component.calculateTotal}
          />
        </div>
        );
          
      });
        return (
            <div className="col-10 mx-auto col-md-8 mt-4 content">
              <h5 className="todo-title text-center">Kontrola rachunków i opłat</h5>
              <br/>
              <h6 className="todo-title text-center">
              Lista wszystkich regularnych płatności, rachunków i opłat. Kontroluj je na bierząco i dbaj o historię kredytową.
              </h6>
              <br/>
              <PayInput handleCreate={this.createProduct} />
              <br/>
              <h5 className="text-center">Lista płatności</h5>
              {products}
              <br/>
              <TotalPrice total={this.state.total} />
            </div>
        )
    }
}

export default PayList;