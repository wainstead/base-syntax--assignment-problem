import React from 'react';

function UserInput(props) {
    return (
        <div>
        <label>UserInput component</label>
        <input type="text"
        style={props.style}
        onChange={props.changed} 
        value={props.username}
        />
        </div>
    )
}

export default UserInput;