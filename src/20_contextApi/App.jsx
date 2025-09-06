import React, {createContext} from "react";

/******************************************
 * Using Prop Drilling - Simple example
 ******************************************
const App = () => (
    <OuterComponent value={"RahulP"} />
);

const OuterComponent = (props) => (
    <InnerComponent value = {props.value} />
);

const InnerComponent = (props) => (
    <h1>{props.value}</h1>
)
*******************************************/

/******************************************
 * Using Prop Drilling - Simple example
 ******************************************
const EmpContext = React.createContext();
const App = () => (
    <EmpContext.Provider value={"RahulC"}>
        <OuterComponent/>
    </EmpContext.Provider>
);

const OuterComponent = () => (
    <InnerComponent/>
);

const InnerComponent = () => (
    <EmpContext.Consumer>
        {(contextValue) =>
            <>
                <h1>{contextValue}</h1>
            </>
        }
    </EmpContext.Consumer>
);
******************************************/
import { EmpProvider } from "./EmpContext";
import EmployeeComponent from "./EmployeeComponent";

class App extends React.Component {
    render() {
        return (
            <EmpProvider>
                <h1>Context API Demo</h1>
                <EmployeeComponent />
            </EmpProvider>
        );
    }
}
export default App;