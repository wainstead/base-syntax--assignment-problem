import React from 'react';

function userInput(props) {
    const style = {
        backgroundColor: 'navajowhite',
        font: 'inherit',
        border: '1x solid blue',
        padding: '8px',
        cursor: 'pointer'
      };
  
    return (
        <div>
        <label>UserInput component</label>
        <input type="text"
        style={style}
        onChange={props.changed} 
        value={props.username}
        />
        </div>
    )
}

export default userInput;