import styles from './titleComponent.module.scss'


interface TitleCProps {
  title: string;
}

function TitleComponent({ title}: TitleCProps): JSX.Element {
  return (
    <h1 className={styles.head}>
      {title}
    </h1>
  );
}

export default TitleComponent;