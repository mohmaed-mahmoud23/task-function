import { useState } from "react";
import ProdactCard from "./Componits/ProdactCard";
import { productList } from "./Data/Data";
import Model from "./UI/Model";
import { Button } from "@headlessui/react";

const App = () => {
  // state//
  const [isOpen, setIsOpen] = useState(false);

  //hndelr
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const ProdactList = productList.map((prodact) => (
    <ProdactCard key={prodact.id} Prodact={prodact} />
  ));
  return (
    <main className="container mx-auto px-10 my-6  ">
      <Button
        className={" bg-red-950"}
        onClick={() => {
          openModal();
        }}
      >
        edcddcd
      </Button>
      <div className="border-gray-500  grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-4 md:gap-4 px-2 py-2 mx-auto">
        {ProdactList}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="xsxsn">
        <div className="flex gap-4 justify-end mt-4">
          <Button className="bg-gray-400 px-2 py-2 text-white">Cancel</Button>
          <Button className="bg-indigo-600 text-white">Submit</Button>
        </div>
      </Model>
    </main>
  );
};

export default App;
