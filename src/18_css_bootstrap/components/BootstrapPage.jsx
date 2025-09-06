import React from "react";

export default class BootstrapPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>Comments (Using bootstrap.css)</h3>
                <table className="table table-striped table-bordered">
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
                </table>
                <button className="btn btn-primary">Button</button>
            </div>
        );
    }
}