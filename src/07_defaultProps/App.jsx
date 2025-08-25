import React from "react";

// Class Component
class UserComponent extends React.Component {
    render() {
        return (
            <>
                <h2>Default Props Demo</h2>
                <p>Name : {this.props.name}</p>
                <p>Project : {this.props.projects}</p>
                <p>Age : {this.props.age}</p>
            </>
        );
    }
}

UserComponent.defaultProps = {
    name: "Vinay"
};

export default class App extends React.Component {
    render() {
        return (
            <UserComponent name={"Ram"} projects={["ShoppingCart"]} age={25}></UserComponent>
        );
    }
}