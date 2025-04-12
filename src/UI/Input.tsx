import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="shadow  mb-[3xpx] focus:border-indigo-600  px-3 py-3 tex-md focus:ring-2 rounded-b-md w-[400px]"
      type="text"
      placeholder="Enter your name"
      {...rest}
    />
  );
};

export default Input;
