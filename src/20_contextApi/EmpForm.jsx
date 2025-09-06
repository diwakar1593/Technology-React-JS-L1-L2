import React from "react";
import { EmpConsumer } from "./EmpContext";

export default class EmpForm extends React.Component {
    render() {
        return (
            <>
                <h3>Employee Form</h3>
                <EmpConsumer>
                    {(contextVal) => (
                        <>
                            <label>Employee Name:
                                <input type="text" onInput={(e) => contextVal.setEmpname(e.target.value)} defaultValue={contextVal.empname} />
                            </label>
                            <label>Manager:
                                <input type="checkbox" onChange={contextVal.toggleManager} defaultChecked={contextVal.manager} />
                            </label>
                        </>     
                    )}
                </EmpConsumer>
            </>
        );
    }
}