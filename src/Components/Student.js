import React from 'react';

// class components need render() and return()
// functional just needs return()
const Student = (props) => {
    return (
        <h1>Hello, I am {props.name}.</h1>
    )
}

export default Student;