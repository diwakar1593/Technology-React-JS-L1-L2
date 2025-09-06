import React from "react";
import EmpForm from "./EmpForm";
import EmpDetails from "./EmpDetails";

export default class EmployeeComponent extends React.Component {
    render() {
        return (
            <div>
                <EmpForm />
                <EmpDetails />
            </div>
        );
    }
}