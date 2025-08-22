import React from "react";

class WelcomeComponent extends React.Component {
    render() {
        return (
            <>
                <h1>Welcome to React!</h1>
            </>
        );
    }
}

export default class App extends React.Component{
    render(){
        return(
            <>
                <WelcomeComponent/>
                <WelcomeComponent/>
                <WelcomeComponent/>
            </>  
        );
    }
}