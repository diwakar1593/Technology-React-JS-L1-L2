import React from "react";

const Employee = ({id, name, location}) => (
    <>
        <p>{id}) {name}, {location.toUpperCase()}</p>
    </>
)

export default Employee