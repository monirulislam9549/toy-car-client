import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyTable from "../ToyTable/ToyTable";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`http://localhost:5000/searchToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  return (
    <div className="overflow-x-auto w-full ">
      <div className="form-control">
        <div className="input-group">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          {""}
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Toy Name</th>
            <th>Seller Email</th>
            <th>Seller Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <ToyTable key={toy._id} toy={toy}></ToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
