import { ButtonHTMLAttributes, ReactNode } from "react";

interface Ibutton extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode;
  classname: string;
  width?: "w-full" | "w-fit";
}

const Botton = ({ children, classname, width = "w-full" ,...rest }: Ibutton) => {
  return (
    <button className={` ${ width } ${classname} bg-gray-500 px-2 py-2`} {...rest}>
      {children}
    </button>
  );
};

export default Botton;
