import React from "react";

// ES2015
const MyFunctionalComponent = ({myname}) => {
    console.log("Rendering Functional Component");
    return(
        <h1>Functional Component, name: {myname}</h1>
    )
}

// export default MyFunctionalComponent
export default React.memo(MyFunctionalComponent)    // Pure Component - Higher order component