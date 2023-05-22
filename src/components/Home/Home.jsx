import Banner from "../Banner/Banner";
import SpecialOffer from "../ExtraSection/SpecialOffer";
import Testimonial from "../ExtraSection/Testimonial";
import Gallery from "../Gallery/Gallery";
import ToyCollection from "../ToyCollection/ToyCollection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ToyCollection></ToyCollection>
      <SpecialOffer></SpecialOffer>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
