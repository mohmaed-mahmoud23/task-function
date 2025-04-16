interface IProp {
  msg: string;
}
const ERRORMsg = ({ msg }: IProp) => {
  return msg ? (
    <span className=" text-red-500 font-semibold text-sm"> {msg}</span>
  ) : null;
};

export default ERRORMsg;
