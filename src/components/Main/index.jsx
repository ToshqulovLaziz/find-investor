import Contact from "./Contact";
import Hero from "./Hero";
import News from "./News";
import Services from "./Services";

const Main = () => {
  return (
    <main className="flex-grow container max-w-full px-4 mx-auto pt-[60px]">
      <Hero />
      <Services />
      <News />
      <Contact />
    </main>
  );
};

export default Main;
