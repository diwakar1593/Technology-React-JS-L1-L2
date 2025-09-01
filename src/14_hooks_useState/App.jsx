import React, { useState } from "react";

/*
const CheckboxComponent = () => {
    const [checked, setChecked] = useState(true);   // Destructuring
    // const handleCheckBox = () => setChecked(!checked);  // few cases it may not work
    const handleCheckBox = () => setChecked(prevChecked => !prevChecked);   // Correct way of doing

    let currentState = checked ? "Checked" : "Unchecked";
    return (
        <>
            <h3>useState - boolean</h3>
            <input type="checkbox" onChange={handleCheckBox} defaultChecked={checked} />
            <span>{currentState} state</span>
        </>
    );
}
*/
/*
const TitleComponent = () => {
    const [title, setTitle] = useState('Initial Value');

    const handleTitle = (e) => setTitle(e.target.value);
    return (
        <>
            <h3>useState - string</h3>
            <label>
                Enter Title:
                <input type="text" onChange={handleTitle} defaultValue={title} />
            </label>
            <span>Title: {title}</span>
        </>
    );
}
*/

// useState does not merge values, manually merge it. setState in class component merges values.

/*
const FullNameComponent = () => {
    const [FullName, setFullName] = useState({ firstName: 'Ram', lastName: '' });

    const handleFirstName = (e) => setFullName({ ...FullName, firstName: e.target.value });
    const handleLastName = (e) => setFullName({ ...FullName, lastName: e.target.value});

    return (
        <>
            <h3>useState - object</h3>
            <label>
                Enter First Name:
                    <input type="text" onChange={handleFirstName} defaultValue={FullName.firstName} />
            </label>
            <label>
                Enter Last Name:
                    <input type="text" onChange={handleLastName} defaultValue={FullName.lastName} />
            </label>
            <span>Full Name: {FullName.firstName} {FullName.lastName} </span>
        </>
    );
}
*/

const EmployeesComponent = () => {
    const [employees, setEmployees] = useState([]);
    const addNewEmployee = () =>setEmployees([...employees, `Emp${employees.length}`]);

    return (
        <>
            <h3>useState - array</h3>
            <button onClick={() => addNewEmployee()}>Add Employee</button>
            <ul>
                {employees.map((employee,index) => (
                    <li key={index}>{employee}</li>
                ))}
            </ul>
        </>
    );
}
const App = (props) => {
    return (
        <>
            <h2>State Demo using React Hooks</h2>
            {
            /* <CheckboxComponent />
            <TitleComponent />
            <FullNameComponent /> */
            <EmployeesComponent />
            }
        </>
    );
}

export default App;