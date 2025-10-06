import FAQ from "../components/modules/contact/FAQ";
import Hero from "../components/modules/home/hero/Hero";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero></Hero>
      {/* Project Section */}
      <Works></Works>
      {/* Service Section */}
      <Services></Services>
      {/* Faq Section */}
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
