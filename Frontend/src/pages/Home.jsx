
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import Technologies from "../components/home/Technologies";

const Home = () => {
  return (
    <>
      {/* Hero section - main banner with call-to-action */}
      <Hero />
      
      {/* Services preview section - showcases available services */}
      <ServicesPreview />
      
      {/* Technologies section - displays technologies used */}
      <Technologies />
    </>
  );
};

export default Home;
