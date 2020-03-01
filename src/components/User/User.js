import React from 'react';

import './User.css';

const user = props => (
    <div className="User">
        <p><strong>Name: </strong>{props.name}</p>
        <p><strong>Age: </strong>{props.age}</p>
        <p><strong>Gender: </strong>{props.gender}</p>
        <p><strong>Email: </strong>{props.email}</p>
        <p><strong>Phone: </strong>{props.phoneNo}</p>
    </div>
);

export default user;