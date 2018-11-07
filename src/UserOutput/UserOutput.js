import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    return (
        <div>
            <p>In the first paragraph we speak of the name <b>{props.username}</b>.</p>
            <p>But in the second paragraph we do NOT speak of the name <i>{props.username}.</i></p>
        </div>
    )
}

export default UserOutput;