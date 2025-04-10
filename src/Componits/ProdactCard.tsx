import Botton from "../UI/Botton";
import Image from "./Image/Image";
import photo from "/623a183aa76fb537cbc5dc0e_Group 8-p-500.png"
const ProdactCard = () => {
  return (
    <div className=" max-w-max border-3 border-amber-950 px-2 py-2 flex flex-col gap-3">
      <Image alt="mohaed" image={photo} classname="rounded-2xl" />
      <h3 className="text-3xl px-2"> Nike shoes </h3>
      <div className="flex gap-2 px-2">
        <span className="w-4 h-4 bg-gray-600 rounded-full " />
        <span className="w-4 h-4 bg-black rounded-full" />
        <span className="w-4 h-4 bg-red-600 rounded-full" />
      </div>
      <div className="flex  justify-between">
        <p className="px-2">$54545</p>
        <div className="flex items-center gap-1 ">
          <p> Nike </p>
          <img
            className="w-10 rounded-full"
            src={photo}
          />
        </div>
      </div>

      <div className=" flex justify-between items-center px-5 py-2 space-x-5 ">
        <Botton classname="rounded-md " width="w-fit">
          Edidt
        </Botton>
        <Botton classname="rounded-md"> Edidt</Botton>
      </div>
    </div>
  );
};

export default ProdactCard;
