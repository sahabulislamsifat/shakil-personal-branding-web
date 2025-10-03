import Faq from "../features/faq/Faq";
import Hero from "../features/hero/Hero";
import Services from "../features/services/Services";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero></Hero>
      {/* Project Section */}
      <Projects></Projects>
      {/* Service Section */}
      <Services></Services>
      {/* Faq Section */}
      <Faq></Faq>
    </div>
  );
};

export default Home;
