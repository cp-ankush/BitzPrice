class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  getList = currency => (
    <li className="list-group-item">
      Bitcoin rate for {this.props.bpi[currency].description}:&nbsp;
      <span className="badge badge-primary">
        {this.props.bpi[currency].code}
      </span>
      &nbsp;
      <strong>{this.props.bpi[currency].rate}</strong>
    </li>
  );
  render() {
    let list = this.getList(this.state.currency);

    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={e =>
            this.setState({
              currency: e.target.value
            })
          }
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
