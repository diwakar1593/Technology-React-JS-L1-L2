import React from "react";
import { EmpConsumer } from "./EmpContext";

export default class EmpDetails extends React.Component {
    render() {
        return (
            <div>
                <h3>Employee Details</h3>
                <EmpConsumer>
                    {(contextVal) => (
                        <>
                            <li>{contextVal.empname}, {contextVal.manager ? "Manager" : "Employee"}</li>
                        </>
                    )}
                </EmpConsumer>
            </div>
        );
    }
}