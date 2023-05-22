import { useEffect, useState } from "react";
import ToyCard from "../ToyCard/ToyCard";

const ToyCollection = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch(`https://toy-car-server-beryl.vercel.app/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mb-5 px-5">
      <h1 className="text-center font-bold text-5xl my-10 text-green-500">
        Shop by category
      </h1>
      <div>
        <div className="flex justify-center items-center bg-green-500 my-5 text-white p-5 font-semibold">
          <div
            onClick={() => handleTabClick("sportsCar")}
            className={`cursor-pointer rounded py-3 px-9 tab2 sportsCar ${
              activeTab == "sportsCar" ? " bg-red-600 text-white" : ""
            }`}
          >
            Sports Car
          </div>
          <div
            onClick={() => handleTabClick("policeCar")}
            className={`cursor-pointer rounded  py-3 px-9 tab2 policeCar ${
              activeTab == "policeCar" ? " bg-red-600 text-white" : ""
            }`}
          >
            Police Car
          </div>
          <div
            onClick={() => handleTabClick("miniTruck")}
            className={`cursor-pointer rounded py-3 px-6 tab2 miniTruck ${
              activeTab == "miniTruck" ? " bg-red-600 text-white" : ""
            }`}
          >
            Mini Truck
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy}></ToyCard>
        ))}
      </div>
    </div>
  );
};

export default ToyCollection;
