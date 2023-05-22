import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="my-16 ">
      <div className="text-center mb-10">
        <h1 className="font-bold text-xl  text-green-500">Testimonial</h1>
        <h1 className="text-5xl font-bold  text-green-500">
          What Customer Says
        </h1>
        <p className="mt-5">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words <br /> which dont look even slightly
          believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 px-10 mb-10">
        <div>
          <div className="flex items-center">
            <img src={`https://i.ibb.co/tCLpJkg/Ellipse-2-3.png`} alt="" />
            <div className="ml-4">
              <p className="text-base font-semibold">Awlad Hossain</p>
              <p>Businessman</p>
            </div>
          </div>

          <div>
            <p className="my-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.
            </p>
            <Rating
              className="text-yellow-500"
              placeholderRating={5}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <img src={`https://i.ibb.co/XpPWxbV/Ellipse-2-2.png`} alt="" />
            <div className="ml-4">
              <p className="text-base font-semibold">Awlad Hossain</p>
              <p>Businessman</p>
            </div>
          </div>

          <div>
            <p className="my-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.
            </p>
            <Rating
              className="text-yellow-500"
              placeholderRating={5}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
