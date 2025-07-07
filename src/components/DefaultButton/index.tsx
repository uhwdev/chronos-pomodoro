import styles from "./styles.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red"; //Transforma a propriedade como opcional
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "green", // Matendo a propriedade como padrão
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
