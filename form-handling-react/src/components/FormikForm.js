import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const formikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      alert("Registration successful!");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
              />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formikForm;