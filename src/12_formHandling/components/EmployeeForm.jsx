import React from "react";
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'

// Presentation Component

const EmployeeForm = ({ errors, touched, isSubmitting }) => (
    <div>
        <h1>Employee Form</h1>
        <Form>
            <div>
                <Field type="text"
                    name="empname" placeholder="Empname" />
                    {touched.empname && errors.empname && <span style={{ color: 'red' }} >{ errors.empname }</span>}
            </div>
            <div>
                <label>
                    <Field type="checkbox" 
                        name="manager" />
                    Manager
                </label>
            </div>
            <br/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikEmployeeForm = withFormik({
    mapPropsToValues({ employeename, bMangaer }) {
        return {
            empname: employeename || '',
            manager: bMangaer || false
        }
    },
    validationSchema: Yup.object().shape({
        empname: Yup.string().min(3, 'Name must be at least 3 characters in length').required('Name is required'),
    }),
    handleSubmit(values, { props, resetForm, setSubmitting, setErrors }) {
        // console.log(values);
        props.onSubmit(values);     // Pass the submitted values to the parent component, "App"
        setSubmitting(false);
/*
        setTimeout(() => {
            if(values.empname === 'God') {
                setErrors({ empname: 'You cannot add God as an employee' })
            } else {
                alert(JSON.stringify(values));
                resetForm();
            }
            setSubmitting(false);
        }, 2000);

*/
    }
}) (EmployeeForm)

export default FormikEmployeeForm