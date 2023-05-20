import sample1 from "../../assets/sample-1.jpg";
import sample2 from "../../assets/sample-2.jpg";
import sample3 from "../../assets/sample-3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={sample1} className="w-full" />
        <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 end-0  top-1/2">
          <div className="bg-slate-900 text-white p-8 text-center mr-4">
            <h1>New Arrival</h1>
            <p>Get Upto 50% off only</p>
            <button>Show Now</button>
          </div>
          <div>
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle mr-3">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={sample2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="bg-slate-900 text-white p-8 text-center">
            <h1>New Arrival</h1>
            <p>Get Upto 50% off only</p>
            <button>Show Now</button>
          </div>
          <div>
            <a href="#slide1" className="btn btn-circle mr-3">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={sample3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 end-0 gap-5 top-1/2">
          <div className="bg-slate-900 text-white p-8 text-center mr-4">
            <h1>New Arrival</h1>
            <p>Get Upto 50% off only</p>
            <button>Show Now</button>
          </div>
          <div>
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle mr-3">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
