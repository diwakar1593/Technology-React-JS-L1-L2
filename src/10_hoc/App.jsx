import React, { Component } from "react";

// import EmployeeListNormal from './components/EmployeeListNormal'
// import CustomerListNormal from './components/CustomerListNormal'
import EmployeeList from "./components/EmployeeList";
import CustomerList from "./components/CustomerList";

class App extends Component {
    render() {
        return(
            <>
                <EmployeeList heading="Employee List (HOC)" />
                <CustomerList heading="Customer List (HOC)" />
            </>
        );
    }
}

export default App