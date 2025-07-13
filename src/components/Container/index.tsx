import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

// interface ContainerProps extends React.PropsWithChildren {} // Alternativa utilizando Biblioteca React Children

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
