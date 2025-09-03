import React, { useEffect, useState } from "react";

/*
const CounterOneComponent = () => {
    const [ count, setCount ] = useState(0);

    // useEffect without specifying second argument
    useEffect(() => { // Async - Combination of ComponentDidMount and ComponentDidUpdate
        console.log("Counter 1 = " + count);
    })

    return (
        <>
            {console.log("Inside render")}
            <h3>useEffect executed after every render</h3>
            <span>Count: {count}</span>
            <button onClick={() => setCount( prevCount => prevCount + 1)}>Increment Counter</button>
        </>
    );
}
*/

/*
const CounterTwoComponent = () => {
    const [ count, setCount ] = useState(0);
    const [ checked, setChecked ] = useState(false);

    // useEffect - specifying dependent value as second argument
    // removing second argument will lead to unnecessary printing of console log even
    // when checkbox is toggled (which is unrelated to counter)
    useEffect(() => {
        console.log( "Counter 2 = " + count );
    }, [count])

    useEffect(() => {
        console.log(  "Checked = " + checked );
    }, [checked])

    return (
        <>
            <h3>useEffect executed conditionally</h3>
            <span>Count: {count}</span>
            <button onClick={() => setCount(prevCount => prevCount +1)}>Increment Counter</button>
            <div>
                <input type="checkbox" onChange={() => setChecked(prevChecked => !prevChecked)} defaultChecked={checked} />
                <span>{ checked ? " Checked " : " Unchecked "} state</span>
            </div>
        </> 
    );
}
*/

/*
const CounterThreeComponent = () => {
    const [ count, setCount ] = useState(0);
    const [ checked, setChecked ] = useState(false);

    // useEffect - specifying dependent value as empty array - equivalent to componentDidMount
    // setInterval is expected to be called only once.
    // Removing empty array second argument will lead to setInterval being called for each render which leads to undesirable effect.

    useEffect(() => {
        // componentDidMount, componentDidUpdate
        console.log("CounterThreeComponent mounting, Setting Interval ...");
        setInterval(() => setCount( prevCount => prevCount + 1), 2000);
    }, []);

    // It is possible to specify multiple useEffect
    useEffect(() => {
        console.log("Checked = " + checked);
    }, [checked]);

    return (
        <>
            <h3>useEffect executed only for initial render</h3>
            <p>Count: {count}</p>
            <div>
                <input type="checkbox" onChange={() => setChecked(prevChecked => !prevChecked)} defaultChecked={checked} />
                <span>{checked ? " Checked " :" Unchecked "} state</span>
            </div>
        </>    
    );
}
*/

const CounterFourComponent = () => {
    const [ count, setCount ] = useState(0);

    // useEffect - Equivalent of componentWillUnmount can be achieved by returning a cleanup function
    // If return of cleanup function is removed, then the interval will not be cleared
    // then when CounterFourComponent is removed by clicking on "Hide Counter",
    // a warning will be logged in console as state update is being attempted on an unmounted component

    useEffect(() => {
        console.log("CounterFourComponent mounting, Setting Interval ...");
        const interval = setInterval(() => setCount(prevCount => prevCount +1), 2000);

        return () => {
            console.log("CounterFourComponent unmounting, Clearing Interval ...");
            clearInterval(interval);
        }
    }, []);
    return (
        <>
            <p>Count: {count}</p>
        </>
    )
}


const CounterFourContainer = () => {
    const [ show, setShow ] = useState(true);

    return (
        <>
            <h3>useEffect - cleanup</h3>
            <button onClick={() => setShow(prevShow => !prevShow )}>{ show ? "Hide" : "Show" }</button>
            {show && <CounterFourComponent />}
        </>
    );
}

const App = (props) => {
    return (
        <>
            <h2>Effects Demo using React Hoooks</h2>
            {
            /*
                <CounterOneComponent />
                <CounterTwoComponent />   
                <CounterThreeComponent />
            */
                <CounterFourContainer />
            }
        </>
    );
}

export default App;