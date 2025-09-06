import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactRouterPrompt from "react-router-prompt";


let authenticated = true;
const CommentDetailpage = () => {
    let params = useParams();
    const navigate = useNavigate();

    const [modified, setModified] = useState(false);

    const handleInput = (e) => setModified(true);

    useEffect(() => {
        if(!authenticated) {
            alert("Not authenticated, hence redirecting back...");
            navigate('/');
        } else {
            alert("Authenticated, hence proceeding ahead and displaying the details.");
        }
    }, []);

    return (
        <div>
            <h2>Comment Details</h2>
            <label>ID:
                <input type="text" defaultValue={params.id} onInput={() => handleInput()} />
            </label>
            <ReactRouterPrompt when={modified}>
                {({ isActive, onConfirm, onCancel }) => 
                    isActive && (
                        <div>
                            <div>
                                <p>Do you really want to leave?</p>
                                <button type="button" onClick={onCancel}>
                                    Cancel
                                </button>
                                <button type="button" onClick={onConfirm}>
                                    Ok
                                </button>
                            </div>
                        </div>
                    )
                }
            </ReactRouterPrompt>
        </div>
    );
}

export default CommentDetailpage;