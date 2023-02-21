import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { addProperty } from "../store/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../style.css'

function Create(props) {
  const navigate = useNavigate();
  const submitDetails = (values, { setSubmitting }) => {
    props.dispatch(addProperty(values));
    navigate("/");
  };

  return (
    <div className="create-container"> 
    <h2>Add property</h2>
    <Formik initialValues={{}} onSubmit={submitDetails} >
      {({ values, handleChange, isSubmitting, setFieldValue }) => (
        <Form className="create-form">
          <label className="create-label">Upload Image :</label>
          <input
            type="file"
            name="attachment"
            onChange={(event) => {
              setFieldValue("attachment", event.currentTarget.files[0]);
            }}
          />
          <label className="create-label">Your Address :</label>
          <Field
            type="text"
            name="address"
            onChange={handleChange}
            value={values.email}
          />
          <label className="create-label">Price :</label>
          <Field
            type="number"
            name="price"
            onChange={handleChange}
            value={values.price}
          />
          <label className="create-label">Type :</label>
          <Field
            type="text"
            name="type"
            onChange={handleChange}
            value={values.type}
          />

          <button className="create-btn" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default connect()(Create);
