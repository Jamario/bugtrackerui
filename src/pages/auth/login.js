import React from "react";
import styles from "./auth.module.css";

import { useForm } from "react-hook-form";

import Input from "../../components/forms/input";

const Login = () => {
    const { register, handleSubmit, formState } = useForm();
    // const auth = firebase.auth();

    console.log("form state", formState.errors);

    const onSubmit = (data) => console.log("form data", data);

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input label="email" {...register("email")} />
                    <Input label="password" type="password" {...register("password")} />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
