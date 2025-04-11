import { IProduct } from "../Interfaces/Interfaces";
import Botton from "../UI/Botton";
import { textslicer } from "../utils/FunctionSlice";
import Image from "./Image/Image";

interface Iprop {
  Prodact: IProduct;
}

const ProdactCard = ({ Prodact }: Iprop) => {
  return (
    <div className="container max-w-sm md:max-w-lg mx-auto md:mx-0 lg:mx-w-lg   border rounded-md p-4 flex flex-col justify-between space-y-3 h-[500px]">
      {/* الصورة */}
      <Image
        alt={"Product Image"}
        image={Prodact.imageURL}
        classname="rounded-md h-52 w-full object-cover"
      />

      {/* العنوان */}
      <h3 className="text-xl font-semibold px-2 md:py-2 h-12 overflow-hidden">
        {Prodact.title}
      </h3>

      {/* الوصف */}
      <p className="text-sm text-gray-500 px-2 h-16 overflow-hidden">
        {textslicer(Prodact.description)}
      </p>

      {/* الألوان */}
      <div className="flex gap-2 px-2">
        <span className="w-4 h-4 bg-gray-600 rounded-full" />
        <span className="w-4 h-4 bg-black rounded-full" />
        <span className="w-4 h-4 bg-red-600 rounded-full" />
      </div>

      {/* السعر والصورة */}
      <div className="flex justify-between items-center px-2">
        <p className=" font-semibold">${Prodact.price}</p>
        <div className="flex items-center gap-1">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={Prodact.category.imageURL}
            alt={Prodact.category.name}
          />
        </div>
      </div>

      {/* الأزرار */}
      <div className="flex justify-between items-center px-5 py-2 space-x-5">
        <Botton classname="rounded-md bg-indigo-600" width="w-full">
          Edit
        </Botton>
        <Botton classname="rounded-md bg-red-700">Edit</Botton>
      </div>
    </div>
  );
};

export default ProdactCard;
