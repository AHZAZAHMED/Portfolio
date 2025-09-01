import Navbar from "@/app/component/navbar";
import Hero from "./component/Hero";
import Zero from "./component/Zero";
import About from "./component/about";
import Projects from "./component/project";

const HomePage = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#009688_0%,#007d75_40%,#004d61_100%)]  min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default HomePage;
