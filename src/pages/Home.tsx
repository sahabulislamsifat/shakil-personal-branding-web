import Faq from "../features/faq/Faq";
import Hero from "../features/hero/Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero></Hero>
      {/* Project Section */}
      <Projects></Projects>
      {/* Faq Section */}
      <Faq></Faq>
    </div>
  );
};

export default Home;
