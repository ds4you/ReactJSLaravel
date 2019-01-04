import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Dreamsoft4u</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/items">Items</Link>
              </li>
              <li>
                <Link to="/items/add">Create Item</Link>
              </li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;