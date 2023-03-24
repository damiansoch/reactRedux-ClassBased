import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  renderIfUser = () => {
    return (
      <div className='card' style={{ maxWidth: '300px' }}>
        <img src={this.props.user.thumbnail} className='card-img-top' alt='' />
        <div className='card-body'>
          <ul className='list-group'>
            <li className='list-group-item'>
              Name: {this.props.user.firstName} {this.props.user.lastName}
            </li>
            <li className='list-group-item'>Age: {this.props.user.age}</li>
            <li className='list-group-item'>
              Description: {this.props.user.description}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  renderIfNoUser = () => {
    return <h3>Please select user.</h3>;
  };
  render() {
    if (this.props.user === null) {
      return this.renderIfNoUser();
    } else {
      return this.renderIfUser();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(UserDetails);
