import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyTable from "../ToyTable/ToyTable";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto w-full">
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
            {/* <th></th> */}
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
