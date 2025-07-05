type DefaultInputProps = {
  id: string;
  labelText: string;
  //   labelText?: string; Caso queira por o type opcional
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>}Caso Queira criar uma condição de colocar o input opcional */}
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} {...rest} />
    </>
  );
}
