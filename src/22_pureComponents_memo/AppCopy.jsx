import React from "react";
import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";

export default class App extends React.Component{    // <= React 15
    constructor(props) {
        super(props);
        this.refName = React.createRef();
        this.state = {
            name: ''
        }
    }
    shallowEqual(objA, objB) {
        if(objA === objB){
            return true;
        }

        if(
            typeof objA !== 'object' || objA === null ||
            typeof objB !== 'object' || objB === null
        ) {
            return false;
        }

        var keyA = Object.keys(objA);
        var keyB = Object.keys(objB);

        if (keysA.length !== keysB.length) {
            return false;
        }

        // test for A's keys different from B.
        var bHasOwnProperty = hasOwnProperty.bind(objB);
        for (var i = 0; i < keysA.length; i++) {
            if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
                return false;
            }
        }
        return true;
    }
    shallowCompare(instance, nextProps, nextState) {
        return (
            !this.shallowEqual(instance.props, nextProps) ||
            !this.shallowEqual(instance.state, nextState)
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.shallowCompare(this, nextProps, nextState);
    }
    handleSubmit(){
        let inputName = this.refName.current.value;
        this.setState({ name: inputName });
    }
    render() {
        console.log("Rendering App Component");
        return (
            <>
                <label>
                    Enter name:
                    <input type="text" ref={this.refName} />
                </label>
                <button onClick={() => this.handleSubmit()}>Submit</button>
                <MyClassComponent myname={this.state.name} />
                <MyFunctionalComponent myname={this.state.name} />
            </>
        )
    }
}