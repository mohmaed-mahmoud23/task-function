import ProdactCard from "./Componits/ProdactCard";

const App = () => {
  return (
    <div className="  border-gray-500 border-2  grid grid-cols-1 md:grid-cols-3 gap-1.5 lg:grid-cols-5 px-2 py-2 mx-auto md-i">
      <ProdactCard />
      <ProdactCard />
      <ProdactCard />
      <ProdactCard />
      <ProdactCard />
    </div>
  );
};

export default App;
