import { useState } from "react";

const ToyCollection = () => {
  const [activeTab, setActiveTab] = useState("sportsCar");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mb-5">
      <h1 className="text-center font-bold text-5xl my-10 text-green-500">
        Shop by category
      </h1>
      <div>
        <div className="flex justify-center items-center">
          <div
            onClick={() => handleTabClick("sportsCar")}
            className={`cursor-pointer rounded bg-white py-3 px-9 tab2 sportsCar ${
              activeTab == "sportsCar" ? " bg-red-600 text-white" : ""
            }`}
          >
            sportsCar
          </div>
          <div
            onClick={() => handleTabClick("policeCar")}
            className={`cursor-pointer rounded bg-white py-3 px-9 tab2 policeCar ${
              activeTab == "policeCar" ? " bg-red-600 text-white" : ""
            }`}
          >
            policeCar
          </div>
          <div
            onClick={() => handleTabClick("miniTruck")}
            className={`cursor-pointer rounded bg-white py-3 px-9 tab2 miniTruck ${
              activeTab == "miniTruck" ? " bg-red-600 text-white" : ""
            }`}
          >
            miniTruck
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCollection;
