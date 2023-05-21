import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyTable from "../ToyTable/ToyTable";
import Swal from "sweetalert2";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`https://toy-car-server-beryl.vercel.app/searchToyName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  // delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-car-server-beryl.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = toys.filter((toy) => toy._id !== _id);
            setToys(remaining);
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://toy-car-server-beryl.vercel.app/myToy/${user?.email}`)
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
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Toy Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <ToyTable
              key={toy._id}
              toy={toy}
              index={index}
              handleDelete={handleDelete}
            ></ToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
