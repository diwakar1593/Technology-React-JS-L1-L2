import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { IssuesContext } from "../context/IssuesContext";

export default function AddIssue() {
    const { addIssue } = useContext(IssuesContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            description: "",
            severity: "Minor",
            status: "Open"
        },
        validationSchema: Yup.object({
            description: Yup.string().required("Issue Description is required"),
        }),
        onSubmit: (values) => {
            const newIssue = { id: nanoid(5), ...values };
            addIssue(newIssue);
            navigate("/issues");
        },
    });

    return (
        <>
            <h2>Add Issue</h2>
            <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label style={{ marginRight: "10px" }}>Description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Issue Description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description && (
                        <span style={{ color: "maroon", marginLeft: "10px" }}>
                            {formik.errors.description}
                        </span>
                    )}
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={{ marginRight: "10px" }}>Severity:</label>
                    <select
                        name="severity"
                        onChange={formik.handleChange}
                        value={formik.values.severity}
                    >
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label style={{ marginRight: "10px" }}>Status:</label>
                    <input
                        type="radio"
                        name="status"
                        value="Open"
                        checked={formik.values.status === "Open"}
                        onChange={formik.handleChange}
                    /> Open
                    <input
                        type="radio"
                        name="status"
                        value="In Progress"
                        checked={formik.values.status === "In Progress"}
                        onChange={formik.handleChange}
                        style={{ marginLeft: "10px" }}
                    /> In Progress
                    <input
                        type="radio"
                        name="status"
                        value="Closed"
                        checked={formik.values.status === "Closed"}
                        onChange={formik.handleChange}
                        style={{ marginLeft: "10px" }}
                    /> Closed
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
