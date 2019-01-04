import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory, Link } from 'react-router';

class IndexItemTable extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = 'http://localhost:8000/api/items/'+this.props.obj.id;
    axios.delete(uri);
    browserHistory.push('/');
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <Link to={"items/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}

export default IndexItemTable;