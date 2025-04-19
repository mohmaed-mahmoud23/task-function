import { IProduct } from "../Interfaces/Interfaces";
import Botton from "../UI/Botton";
import { textslicer } from "../utils/FunctionSlice";
import CircleColor from "./CircleColor";
import Image from "./Image/Image";

interface Iprop {
  Prodact: IProduct;
  setEditprodact: (prodact: IProduct) => void;
  setEditprodactindex: (vle: number) => void;
  index: number;
  openEditModal: () => void;
  closeEditModal: () => void;
  openConfirmModal: () => void;
}

const ProdactCard = ({
  Prodact,
  setEditprodact,
  openEditModal,
  index,
  setEditprodactindex,
  openConfirmModal,
}: Iprop) => {
  const { title, colors, description, price, category } = Prodact;
  const circle = colors.map((color) => (
    <CircleColor color={color} key={color} />
  ));
  const onEdit = () => {
    setEditprodact(Prodact);
    openEditModal();
    setEditprodactindex(index);
  };

  const onremov = () => {
    setEditprodact(Prodact);

    openConfirmModal();
  };

  return (
    <div className="container max-w-sm md:max-w-lg mx-auto md:mx-0 lg:mx-w-lg   border rounded-md p-4 flex flex-col justify-between space-y-3 h-[500px]">
      <Image
        alt={category.name}
        image={category.imageURL}
        classname="rounded-md h-52 w-full object-cover"
      />

      <h3 className="text-xl font-semibold px-2 md:py-2 h-12 overflow-hidden">
        {title}
      </h3>

      <p className="text-sm text-gray-500 px-2 h-16 overflow-hidden">
        {textslicer(description)}
      </p>
      <div className="flex gap-1 flex-wrap">
        {" "}
        {!colors.length ? <p>color not found</p> : circle}
      </div>

      <div className="flex justify-between items-center px-2">
        <p className=" font-semibold text-indigo-500">${price}</p>
        <div className="flex items-center gap-2">
          <p>{category.name}</p>
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={category.imageURL}
            alt={category.name}
          />
        </div>
      </div>

      <div className="flex justify-between items-center px-5 py-2 space-x-5">
        <Botton
          classname="rounded-lg max-w-sm bg-indigo-600 hover:bg-indigo-700"
          onClick={onremov}
        >
          Delet
        </Botton>
        <Botton
          classname="rounded-lg  bg-red-700 max-w-sm hover:bg-red-800"
          onClick={onEdit}
        >
          Edit
        </Botton>
      </div>
    </div>
  );
};

export default ProdactCard;
