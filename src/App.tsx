import ProdactCard from "./Componits/ProdactCard";
import { productList } from "./Data/Data";
import Model from "./UI/Model";

const App = () => {
  const ProdactList = productList.map((prodact) => (
    <ProdactCard key={prodact.id} Prodact={prodact} />
  ));
  return (
    <main className="container mx-auto px-10 my-6  ">
      <h1 className=" text-3xl text-center w-fit bg-indigo-600">Add Brodact</h1>
      {/* هنا تم إضافة px-4 لتحسين المسافات */}
      <div className="border-gray-500  grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-4 md:gap-4 px-2 py-2 mx-auto">
        {ProdactList}
      </div>
      <Model/>
    </main>
  );
};

export default App;
