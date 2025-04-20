import { ChangeEvent, FormEvent, useState } from "react";
import ProdactCard from "./Componits/ProdactCard";
import { categories, colors, FormLabuel, productList } from "./Data/Data";
import Model from "./UI/Model";
import Button from "../src/UI/Botton";
import Input from "./UI/Input";
import { IProduct } from "./Interfaces/Interfaces";
import { PrudactScema } from "./Schema/ProdactSchema";
import ERRORMsg from "./Componits/ERRORMsg";
import CircleColor from "./Componits/CircleColor";
import Select from "./UI/Select";
import { prodactname } from "./types/typse";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuid } from "uuid";

const App = () => {
  //stats//
  const defaultObgect = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [selectedcategory, setselectedcategory] = useState(categories[2]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeneditMoodel, setIsOpeneditMoodel] = useState(false);
  const [them, setThem] = useState<string[]>([]);
  const [prodact, setProdact] = useState<IProduct>(defaultObgect);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [editprodact, setEditprodact] = useState<IProduct>(defaultObgect);
  const [editprodactindex, setEditprodactindex] = useState<number>(0);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [error, setError] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  // model FUnction//
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openEditModal() {
    setIsOpeneditMoodel(true);
  }

  function closeEditModal() {
    setIsOpeneditMoodel(false);
  }

  function closeConfirmModal() {
    setIsOpenConfirmModal(false);
  }
  function openConfirmModal() {
    setIsOpenConfirmModal(true);
  }
  //submitHandelr proudcat//
  function submitHandelr(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, price, imageURL } = prodact;
    const errsPrudactScema = PrudactScema({
      title,
      description,
      price,
      imageURL,
    });
    // error Input//
    const haserormassage =
      Object.values(errsPrudactScema).some((value) => value === "") &&
      Object.values(errsPrudactScema).every((value) => value === "");
    if (!haserormassage) {
      setError(errsPrudactScema);
      return;
    }
    setProducts((prve) => [
      ...prve,
      { ...prodact, id: uuid(), category: selectedcategory },
    ]);
    setProdact(defaultObgect);
    setThem([]);
    closeModal();
  }

  // submitEditHandelr //
  function submitEditHandelr(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, price, imageURL } = editprodact;
    const errsPrudactScema = PrudactScema({
      title,
      description,
      price,
      imageURL,
    });
    // error Input//
    const haserormassage =
      Object.values(errsPrudactScema).some((value) => value === "") &&
      Object.values(errsPrudactScema).every((value) => value === "");
    if (!haserormassage) {
      setError(errsPrudactScema);
      return;
    }

    const ubdatPridact = [...products]; // بسيب نسخه عشان اعمل حاجه اسمها شالو كوبي ودي بتسيبلي نسخه عشان لو حصل اي تغير ميتسخدمش اي حاجه جايه من ال اللآبي اي
    ubdatPridact[editprodactindex] = {
      ...editprodact,
      colors: them.concat(editprodact.colors),
    };
    setProducts(ubdatPridact);
    setEditprodact(defaultObgect);
    setThem([]);
    closeEditModal();
    toast.success("");
  }
  //
  //                   / /
  // cancel function ====>(button)//
  const oncancel = () => {
    setProdact(defaultObgect);
    setIsOpen(false);
  };

  // removprodacthandelr //
  const removprodacthandelr = () => {
    const filter = products.filter((prodact) => prodact.id !== editprodact.id);
    setProducts(filter);
    closeConfirmModal();
    toast.success("Product removed successfully!");
  };

  const OnchangeHndelr = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProdact({
      ...prodact,
      [name]: value,
    });

    //
    setError({
      ...error,
      [name]: "",
    });
  };
  const OnchangEditHndelr = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditprodact({
      ...editprodact,
      [name]: value,
    });

    //
    setError({
      ...error,
      [name]: "",
    });
  };
  ///                   ///

  //render ProdactList//
  const ProdactList = products.map((ProdactList, index) => (
    <ProdactCard
      index={index}
      setEditprodactindex={setEditprodactindex}
      key={ProdactList.id}
      Prodact={ProdactList}
      setEditprodact={setEditprodact}
      openEditModal={openEditModal}
      closeEditModal={closeEditModal}
      openConfirmModal={openConfirmModal}
    />
  ));
  //     ///

  // render FormList //
  const formlabul = FormLabuel.map((input) => (
    <div className="flex flex-col gap-1 text-left  " key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        onChange={OnchangeHndelr}
        value={prodact[input.name]}
      />
      <ERRORMsg msg={error[input.name]} />
    </div>
  ));

  // render circlecolors //
  const circle = colors.map((color) => (
    <CircleColor
      color={color}
      key={color}
      onClick={() => {
        {
          if (them.includes(color)) {
            // هنا بعرفو ان السيم بتاعت الاستيت لو بتحتوي علي ف انت هترترن هتوقف يعني
            setThem((prve) => prve.filter((item) => item !== color)); // السيت سيم هفتح اقواس السيت سيم وقولو البريف و اعدي علي البريف برضو دوت فيلتر وفتح قوس الفلتر وقولو عديلي علي كل ايتم لو الايتيم مش بيساوي القلر هيتسمح
            return;
          }
          if (editprodact.colors.includes(color)) {
            // الشرط بتا الاديت نفسو لو موجود مقدرش اضط عليه تاني
            // هنا بعرفو ان السيم بتاعت الاستيت لو بتحتوي علي ف انت هترترن هتوقف يعني
            setThem((prve) => prve.filter((item) => item !== color)); // السيت سيم هفتح اقواس السيت سيم وقولو البريف و اعدي علي البريف برضو دوت فيلتر وفتح قوس الفلتر وقولو عديلي علي كل ايتم لو الايتيم مش بيساوي القلر هيتسمح
            return;
          }

          setThem((prve) => [...prve, color]);
        }
      }}
    />
  ));
  const renderprodactwithErrormsg = (
    id: string,
    label: string,
    name: prodactname
  ) => {
    return (
      <div className="flex flex-col gap-1 text-left  ">
        <label htmlFor={id}>
          {/* {input.label} */}
          {label}
        </label>
        <Input
          type="text"
          id={"title"}
          name={name}
          onChange={OnchangEditHndelr}
          value={editprodact[name]}
        />
        <ERRORMsg msg={error[name]} />
      </div>
    );
  };
  //                       //
  return (
    <div className="px-9 py-9 mx-auto max-w-7xl">
      <div className="mb-4 text-center">
        <Button
          classname="bg-gray-600 px-2 py-2 rounded-md"
          width="w-full"
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md  text-center w-sm hover:bg-indigo-800  transition-transform"
        >
          Add
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ProdactList}
      </div>
      {/*add prodact model/*/}
      <Model
        isOpen={isOpen}
        onClose={closeModal}
        title="mohamde"
        discrobtin="this model"
      >
        <form className="space-y-3 " onSubmit={submitHandelr}>
          {formlabul}
          <Select
            selected={selectedcategory}
            setSelected={setselectedcategory}
          />

          <div className="flex gap-1 flex-wrap"> {circle}</div>
          <div className="flex gap-1 flex-wrap">
            {them.map((one) => (
              <span key={one} style={{ background: one }}>
                {one}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button
              classname="bg-gray-600 px-2 py-2 rounded-md "
              onClick={oncancel}
            >
              Cancel
            </Button>
            <Button classname="bg-red-600 px-2 py-2 rounded-md">Submit</Button>
          </div>
        </form>
      </Model>
      {/*add Edit prodact model/*/}
      <Model
        isOpen={isOpeneditMoodel}
        onClose={closeEditModal}
        discrobtin="Edit Prodact "
      >
        <form className="space-y-3 " onSubmit={submitEditHandelr}>
          {renderprodactwithErrormsg("title", "prodact title", "title")}
          {renderprodactwithErrormsg(
            "discrobtin",
            "prodact discrobtin",
            "description"
          )}
          {renderprodactwithErrormsg(
            "imageURL",
            "prodact imageURL",
            "imageURL"
          )}
          {renderprodactwithErrormsg("price", "prodact Price", "price")}
          <Select
            selected={editprodact.category}
            setSelected={(value) =>
              setEditprodact({ ...editprodact, category: value })
            }
          />
          <div className="flex gap-1 flex-wrap"> {circle}</div>
          <div className="flex gap-1 flex-wrap">
            {them.concat(editprodact.colors).map((one) => (
              <span key={one} style={{ background: one }}>
                {one}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <Button
              classname="bg-gray-300 hover:bg-gray-200 px-2 py-2 rounded-md "
              onClick={closeEditModal}
            >
              Cancel
            </Button>
            <Button classname="bg-red-600 px-2 py-2 rounded-md">Submit</Button>
          </div>
        </form>
      </Model>
      {/* remov Prodact/*/}
      <Model
        isOpen={isOpenConfirmModal}
        onClose={closeConfirmModal}
        discrobtin="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
      >
        <div className="flex space-x-3 ">
          <Button
            classname="bg-gray-300 hover:bg-gray-200 px-2 py-2 rounded-md "
            onClick={closeConfirmModal}
          >
            Cancel
          </Button>
          <Button
            classname="bg-red-600 px-2 py-2 rounded-md"
            onClick={removprodacthandelr}
          >
            remov
          </Button>
        </div>
      </Model>
      <Toaster />
    </div>
  );
};

export default App;
