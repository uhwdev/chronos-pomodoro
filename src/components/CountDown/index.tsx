import { useTaskContext } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const TaskContext = useTaskContext;
  return <div className={styles.container}>00:00</div>;
}
