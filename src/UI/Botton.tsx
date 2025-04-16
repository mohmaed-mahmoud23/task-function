import { ButtonHTMLAttributes, ReactNode } from "react";

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classname: string;
  width?: "w-full" | "w-fit";
}

const Botton = ({
  children,
  classname,

  ...rest
}: Ibutton) => {
  return (
    <button className={`  ${classname}    w-full py-2.5`} {...rest}>
      {children}
    </button>
  );
};

export default Botton;
