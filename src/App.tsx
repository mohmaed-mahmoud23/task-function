import { useState } from "react";
import ProdactCard from "./Componits/ProdactCard";
import { FormLabuel, productList } from "./Data/Data";
import Model from "./UI/Model";
import Button from "../src/UI/Botton";
import Input from "./UI/Input";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  //render ProdactList//
  const ProdactList = productList.map((prodact) => (
    <ProdactCard key={prodact.id} Prodact={prodact} />
  ));

  // render FormList //
  const formlabul = FormLabuel.map((input) => (
    <div className="flex flex-col gap-1 text-left  ">
      <label htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <div className="px-4 py-4 mx-auto max-w-7xl">
      <div className="mb-4 text-right">
        <Button
          classname="bg-gray-600 px-2 py-2 rounded-md"
          width="w-full"
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md "
        >
          Add
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ProdactList}
      </div>

      <Model
        isOpen={isOpen}
        onClose={closeModal}
        title="mohamde"
        discrobtin="this model"
      >
        <div className="space-y-3">
          {formlabul}
          <div className="flex space-x-3">
            <Button classname="bg-gray-600 px-2 py-2 rounded-md ">
              Cancel
            </Button>
            <Button classname="bg-red-600 px-2 py-2 rounded-md">Submit</Button>
          </div>
        </div>
      </Model>
    </div>
  );
};

export default App;
