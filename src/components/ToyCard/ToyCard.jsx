import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, name, photo, price, rating } = toy || {};
  return (
    <div className="card card-compact bg-base-100 shadow-md h-[389px] w-[364px] rounded ">
      <figure className="border border-gray-500">
        <img
          className="transition-all duration-500 ease-in-out transform hover:scale-110"
          src={photo}
          alt=""
        />
      </figure>
      <div className="card-body bg-slate-300 rounded text-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-orange-600 text-lg font-semibold">
          {" "}
          Price: ${price}.00
        </p>

        <Rating
          className="text-yellow-500"
          placeholderRating={rating}
          readonly
          emptySymbol={<FaRegStar></FaRegStar>}
          placeholderSymbol={<FaStar></FaStar>}
          fullSymbol={<FaStar></FaStar>}
        ></Rating>

        <button className="btn btn-success w-48 flex mx-auto">
          <Link to={`/toy/${_id}`}>See Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
