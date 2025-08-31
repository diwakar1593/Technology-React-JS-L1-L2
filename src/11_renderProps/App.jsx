import React, { Component } from "react";
import Item from "./components/Item";
import CustomerList from "./components/CustomerListRP";
import EmployeeList from "./components/EmployeeListRP";

class App extends Component {
    render() {
        return (
            <>
                <Item isUpper = {true}>
                    {(items, addItem) => (
                        <EmployeeList items = {items} addItem={addItem} heading="Employee List (Using Render Props)" />
                    )}
                </Item>
                <Item isUpper = {false}>
                    {(items, addItem) => (
                        <CustomerList items = {items} addItem={addItem} heading="Customer List (Using Render Props)" />
                    )}
                </Item>
            </>
        )
    }
}

export default App