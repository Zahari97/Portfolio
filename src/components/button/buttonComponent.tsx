import React from 'react';
import styles from './buttonComponent.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  type?: 'button' | 'submit' | 'reset'; 
}

function ButtonComponent({ onClick, title,type='button' }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {title}
    </button>
  );
}

export default ButtonComponent;
