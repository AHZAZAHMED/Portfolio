import Navbar from "@/app/component/navbar";
import Hero from "./component/Hero";

const HomePage = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#009688_0%,#007d75_40%,#004d61_100%)]  min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;