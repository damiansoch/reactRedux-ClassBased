import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../store/actions/HomeActions';

class UserList extends Component {
  render() {
    return (
      <div>
        <ul className='list-group'>
          {this.props.users.map((user) => (
            <li
              key={user.id}
              className='list-group-item list-link'
              onClick={() => this.props.selectUser(user)}
            >
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = {
  selectUser: selectUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
