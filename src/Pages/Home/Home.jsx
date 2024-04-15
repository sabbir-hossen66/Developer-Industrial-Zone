import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Industries from "../../Components/Industries/Industries";
import Review from "../../Components/Review/Review";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Industries></Industries>
      <Review></Review>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;