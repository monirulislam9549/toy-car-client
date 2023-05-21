import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { id } = useParams();
  const [detailsToy, setDetailsToy] = useState({});

  useEffect(() => {
    fetch(`https://toy-car-server-beryl.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsToy(data));
  }, [id]);
  return (
    <div>
      <div>
        <img
          className=" w-full object-cover"
          src={`https://i.ibb.co/ynQkqvw/cover.png`}
          alt=""
        />
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[750px]" src={detailsToy.photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{detailsToy.name}</h2>
          <p>{detailsToy.description}</p>
          <p>Seller Name: {detailsToy.seller}</p>
          <p>Seller Email: {detailsToy.email}</p>
          <p>Price: ${detailsToy.price}</p>
          <p>Rating: {detailsToy.rating}</p>
          <p>Available Quantity: {detailsToy.quantity} </p>
          <p>Description: {detailsToy.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
