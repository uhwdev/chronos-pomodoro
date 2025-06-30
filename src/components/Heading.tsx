import styles from "./Heading.module.css";
export function Heading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
  //   return <h1 className={styles.heading}>Olá Mundo!</h1>;
  //   return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá Mundo!</h1>;
}
