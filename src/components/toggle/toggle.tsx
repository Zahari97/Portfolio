import styles from './toggle.module.scss';

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
}

export const Toggle = ({handleChange, isChecked}:ToggleProps):JSX.Element => {
  return (
    <div style={{position: 'relative'}}>

    <label className={styles.toggleContainer}>
      <input type="checkbox" 
        id="check"
        className={styles.toggle}
        checked={isChecked}
        onChange={handleChange} />
       <label htmlFor='check'>Dark Mode</label>
    </label>
        </div>
  )
}