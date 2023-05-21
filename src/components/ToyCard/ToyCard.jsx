import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, name, photo, price, rating } = toy || {};
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{rating}</p>
        {/* <p>{description}</p> */}
        <button>
          <Link to={`/details/${_id}`}>See Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
