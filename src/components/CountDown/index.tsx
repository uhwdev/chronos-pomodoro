import type { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";

// type CountDownProps = {
//   formattedSecondsRemaining: string;
// };

// export function CountDown({ formattedSecondsRemaining }: CountDownProps) {
//   return <div className={styles.container}>{formattedSecondsRemaining}</div>;
// }

export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
