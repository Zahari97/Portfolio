import React from 'react';
import styles from './inputComponent.module.scss';
import { FormikErrors, FormikValues } from 'formik';

interface InputProps {
  name: string;
  label?:string,
  value: string | number;
  onChange: any;
  errors?: string;
}

function InputComponent({ name,label,onChange, value, errors }: InputProps): JSX.Element {

  return (
    <div className={styles.wrapperInput}>
      <label className={`${styles.label} ${value ? `${styles.notEmpty}`: ''}`}>{label || name}</label>
      <input className={styles.input}
        name={name}
        onChange={onChange}
        value={value}
        />

        {errors && <div style={{ color: 'red', fontSize: '12px' }}>{errors}</div>}
    </div>
  );
}

export default InputComponent;
