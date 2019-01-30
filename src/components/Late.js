import React from 'react';

class PayItem extends React.Component {
  buy = () => {
    this.props.handleTotal(this.props.price);
  }

  remove = () => {
      this.props.handleRemove(this.props.price);
  }

  render() {

    return (

      <div>
        <li className="list-group-item d-flex justify-content-between my-2">
            <h5>{this.props.name}: <strong>{this.props.price}zł</strong></h5>
            <div>
            <button className="mx-2 btn btn-warning mt-2" onClick={this.buy}>Dodaj</button>
            <button className="mx-2 btn btn-danger mt-2" onClick={this.remove}>Usuń</button>
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
      <h5 className="todo-title text-center">Wprowadź zaległość</h5>  
      <div className="card card-body my-3">
        <form onSubmit={this.submit}>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Wpisz nazwę zaległości" ref="name"/>
        </div>
        <br/>
        <div>
          <input type="text" className="form-control" placeholder="Wpisz cenę zaległości" ref="price"/>
        </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">Dodaj zaległość</button>
        </form>
      </div>
      </div>
    )
  };
}

class Late extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: [
        {name: "Rata pralka", price: 121},
        {name: "ZUS", price: 178}
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

  calculateRemove = (price) => {
      this.setState({
          total: this.state.total - price
      });
  }


    render() {
      const component = this;
      const products = this.state.productList.map((product, i) => {
        return (
          <div key={i}>
          <PayItem
          name={product.name} price={product.price}
          handleTotal={component.calculateTotal}
          handleRemove={component.calculateRemove}
          />
        </div>
        );
          
      });
        return (
            <div className="col-10 mx-auto col-md-8 mt-4 content">
            <h5 className="todo-title text-center">Kalkulator zaległości</h5>
                <br/>
                <h6 className="todo-title text-center">Wprowadź wszystkie swoje zaległości 
                i podlicz szybko ich stan. Nie musisz kilkukrotnie dodawać tych samych pozycji, jeśli masz ich więcej. 
                Wprowadź ją do listy raz i za pomocą żółtego buttona "Dodaj" wprowadź ilość np. zaległch rat za pralkę lub składek ZUS. 
                </h6>
                <br/>
                <PayInput handleCreate={this.createProduct} />
                <br/>
                <h5 className="text-center">Lista zaległości</h5>
                {products}
                <br/>
                <TotalPrice total={this.state.total} />
            </div>
        )
    }
}

export default Late;