import styles from "../../styles/SignUpForm.module.scss";

import { IconX } from "@tabler/icons-react";
import { useFormik } from "formik";
import { useState } from "react";
// Importa tutte le funzioni dal modulo "yup"
import * as Yup from "yup";

const SignUpForm = ({ isClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z]*$/, "*Only letters are allowed*")
        .required("*Required*"),
      lastname: Yup.string()
        .matches(/^[A-Za-z]*$/, "*Only letters are allowed*")
        .required("*Required*"),
      username: Yup.string().required("*Required*"),
      email: Yup.string()
        .email("*Invalid email address*")
        .required("*Required*"),
      password: Yup.string()
        .min(8, "*Must be at least 8 characters*")
        .matches(/[a-z]/, "*Must contain at least one lowercase char*")
        .matches(/[A-Z]/, "*Must contain at least one uppercase char*")
        .matches(/\d/, "*Must contain at least one num*")
        .required("*Required*"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Per adesso stampa i valori in console
      fetch("/api/user", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const [isShowForm, setIsShowForm] = useState(true);

  const handleCloseBtn = () => {
    setIsShowForm(false);
    isClose(false);
  };

  return (
    <>
      {isShowForm && (
        <>
          <form onSubmit={formik.handleSubmit} className={styles.SignUpForm}>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <label htmlFor="lastname">Lastname </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.errors.lastname ? (
              <div>{formik.errors.lastname}</div>
            ) : null}

            <label htmlFor="username">Username </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}

            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <button type="submit" value="Submit" className={styles.btnSubmit}>
              Submit
            </button>
          </form>

          <button className={styles.closeBtn} onClick={handleCloseBtn}>
            <IconX size={30} />
          </button>
        </>
      )}
    </>
  );
};

export default SignUpForm;
