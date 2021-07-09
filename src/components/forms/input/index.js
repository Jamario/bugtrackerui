import React from "react";
import { string } from "prop-types";

import styles from "./index.module.css";

const FormInput = React.forwardRef(({ label, ...rest }, ref) => (
    <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        <input ref={ref} {...rest} />
    </div>
));

FormInput.propTypes = {
    label: string,
};

FormInput.defaultProps = {
    label: "",
};

export default FormInput;
