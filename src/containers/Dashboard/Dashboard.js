import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User/User';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <h1>All Employees</h1>
                {this.props.users.map(user => (
                    <User
                        key={user.id}
                        {...user} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users
});

export default connect(mapStateToProps)(Dashboard);