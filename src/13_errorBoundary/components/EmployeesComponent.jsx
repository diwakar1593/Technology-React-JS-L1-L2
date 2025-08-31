import React, { Component } from "react";
import EmployeeApi from "../data/EmployeeApi";
import Employee from "./Employee";
import ErrorBoundary from "./ErrorBoundary";

export default class EmployeesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        this.setState({ employees: EmployeeApi.getAllEmployees() });
    }

    render() {
        let employeeNodes = this.state.employees.map( employee =>
            <ErrorBoundary id={employee.id} >
                <Employee 
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    location={employee.location}
                />    
            </ErrorBoundary>
        )
        return (
            <>
                {employeeNodes}
            </>
        )
    }
}