import FAQ from "../components/modules/contact/FAQ";
import BrandIntroduce from "../components/modules/home/brand/BrandIntroduce";
import Hero from "../components/modules/home/hero/Hero";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero></Hero>
      {/* Brand Introduce Section */}
      <BrandIntroduce></BrandIntroduce>
      {/* Work Section */}
      <Works></Works>
      {/* Service Section */}
      <Services></Services>
      {/* Faq Section */}
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
