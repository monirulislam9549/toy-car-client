const Gallery = () => {
  return (
    <div className="my-6">
      <h1 className="text-center font-bold text-5xl my-10 text-green-500">
        Toy Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/pd9bHwm/images-1.jpg"} alt="Shoes" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/WvMNMJ6/images-3.jpg"} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/gtLVBTh/images-4.jpg"} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/Hxxzs9Q/images-2.jpg"} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/Q9vqK0N/images-5.jpg"} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/P6ckWMY/images-6.jpg"} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/tpnZxrz/images-7.jpg"} alt="" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/pd9bHwm/images-1.jpg"} alt="Shoes" />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={"https://i.ibb.co/pd9bHwm/images-1.jpg"} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
