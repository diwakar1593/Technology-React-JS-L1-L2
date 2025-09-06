import React from "react";
import { Button, Table } from "reactstrap";

export default class ReactstrapPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Comments (Using reactstrap)</h3>
                <Table striped bordered>
                    <thead className="thead-dark">
                        <tr>
                            <th>Author</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ram</td>
                            <td>React is simple</td>
                        </tr>
                        <tr>
                            <td>Raj</td>
                            <td>React is good</td>
                        </tr>
                        <tr>
                            <td>Vinay</td>
                            <td>React is nice</td>
                        </tr>
                    </tbody>
                </Table>
                <Button color="primary">Button</Button>
            </div>
        );
    }
}