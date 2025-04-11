import { useState } from "react";
import ProdactCard from "./Componits/ProdactCard";
import { productList } from "./Data/Data";
import Model from "./UI/Model";
import { Button } from "@headlessui/react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  const ProdactList = productList.map((prodact) => (
    <ProdactCard key={prodact.id} Prodact={prodact} />
  ));

  return (
    <div className="px-4 py-4 mx-auto max-w-7xl">
      <div className="mb-4 text-right">
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-md "
        >
          Add
        </button>
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
        <div className="flex space-x-3">
          <Button className="bg-gray-600 px-2 py-2 rounded-md">Cancel</Button>
          <Button className="bg-red-600 px-2 py-2 rounded-md">Submit</Button>
        </div>
      </Model>
    </div>
  );
};

export default App;
