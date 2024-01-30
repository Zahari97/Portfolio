import React from 'react';
import Select from 'react-select';
import styles from './selectComponent.module.scss';

interface InputProps {
  name: string;
  label?: string;
  value: string | number;
  onChange: (newValue: any) => void;
  options: { value: string | number; label: string }[];
}

const SelectComponent: React.FC<InputProps> = ({ name, label, onChange, value, options }: InputProps) => {

  return (
    <div className={styles.wrapperSelect}>
      <label className={`${styles.label}`}>{label || name}</label>
      <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: '#52619B',
          borderRadius: '24px',
        }),
      }}
        className={styles.select}
        name={name}
        onChange={(selectedOption) => onChange(selectedOption?.value)}
        value={options.find((option) => option.value === value)}
        options={options}
      />
    </div>
  );
};

export default SelectComponent;
