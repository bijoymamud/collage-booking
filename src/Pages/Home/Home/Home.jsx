import Banner from "../../Banner/Banner";
import Contact from "../../Contact/Contact";
import Education from "../../Education/Education";
import Resources from "../../Resources/Resources";
import Review from "../Review/Review";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Education></Education>
      <Resources></Resources>
      <Review></Review>
      <Contact></Contact>

    </div>
  );
};

export default Home;