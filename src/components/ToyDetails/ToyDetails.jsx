import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
  const { id } = useParams();
  const [detailsToy, setDetailsToy] = useState({});

  useEffect(() => {
    fetch(`https://toy-car-server-beryl.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setDetailsToy(data));
  }, [id]);
  return (
    <div className="my-5">
      <div>
        <img
          className=" w-full object-cover"
          src={`https://i.ibb.co/ynQkqvw/cover.png`}
          alt=""
        />
      </div>
      <div className="lg:card-side bg-base-100 my-5 gap-10">
        <div>
          <img
            className="w-[700px] rounded flex mx-auto"
            src={detailsToy.photo}
            alt="Album"
          />
        </div>
        <div className="text-center leading-relaxed">
          <h2 className="text-3xl font-bold"> {detailsToy.name}</h2>

          <p>Price: ${detailsToy.price}</p>
          <p>
            Rating:{" "}
            <Rating
              className="text-yellow-500"
              placeholderRating={detailsToy.rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </p>
          <p>Available Quantity: {detailsToy.quantity} </p>
          <p>Seller Name: {detailsToy.seller}</p>
          <p>Seller Email: {detailsToy.email}</p>
          <p>Description: {detailsToy.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
