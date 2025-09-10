import React from "react";

const ButtonComponent = ({ handleClick, children }) => {
    console.log('Rendering button, ' + children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

// export default ButtonComponent
export default React.memo(ButtonComponent)