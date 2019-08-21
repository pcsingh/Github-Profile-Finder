//component is used when class is used
import React, {Component} from 'react';
//import React from 'react';
import UserItem from './UserItems';
//import Spinner from '../layout/spinner';
//import PropTypes from 'prop-types';

/*const Users = (loading, users) => {
	//for spinner setup
	if(loading) {
		return <Spinner />;
	} else {
		return (
			<div style={userStyle}>
				{this.props.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}
*/

class Users extends Component {
	render() {
		return (
			<div style={userStyle}>
				{this.props.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
}

export default Users;