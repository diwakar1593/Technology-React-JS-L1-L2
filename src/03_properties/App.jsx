import React from "react";

// class way, Stateful Component [ <= React 16.7]
class OSComponent extends React.Component {
    render() {
        return (
            <>
                <h1>Operating System: {this.props.os}</h1>
                <h3>Developed by {this.props.children}</h3>
            </>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <>
                <OSComponent os="Windows">Microsoft</OSComponent>
                <OSComponent os="Solaris">Sun Microsystems</OSComponent>
                <OSComponent os="iOS">Apple</OSComponent>
            </>
        );
    }
}

// Newer ES2015 way = Arrow function
// Functional Component [ <= React 16.7 - Stateless Component ] [ from 16.8, State through React Hooks]
/*
const OSComponent = (props) => {
    return (
        <div>
            <h1>Operating System: {props.os}</h1>
            <h3>Developed by {props.children}</h3>
        </div>
    )
}
 */