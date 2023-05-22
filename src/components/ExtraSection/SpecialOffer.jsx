const SpecialOffer = () => {
  return (
    <div className="my-10 relative">
      <h1 className="mb-5 font-bold text-3xl text-center text-green-500">
        Special Offer
      </h1>
      <img
        className="flex mx-auto w-[1200px] h-full transition-all duration-1000 ease-in-out transform hover:scale-110"
        src={`https://i.ibb.co/qJ0fwtw/banner1.jpg`}
        alt=""
      />
      <div className="absolute inset-y-48 right-44 ">
        <div className="badge bg-green-500 border-none mb-4">New Arrival</div>
        <h1 className="font-bold text-2xl">Buy Kids Ride On Cars</h1>
        <p className="font-semibold">
          Get 25% Off On First Order And Also Get Gift Voucher
        </p>
        <button className="btn btn-link text-black">Buy Now</button>
      </div>
    </div>
  );
};

export default SpecialOffer;
