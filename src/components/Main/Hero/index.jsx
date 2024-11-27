import { Link } from "react-router-dom";
import HeroImg from "../../../assets/hero-img-find.jpg";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-[40px]">
      <div>
        <h1 className="text-[38px] text-gray-800 tracking-[1.3px] font-bold leading-[60px] mb-[40px]">
          Bizning loyiha sizga eng <br /> yaxshisini taklif etadi. <br /> Bundan
          foydalanib <br />
          qoling
        </h1>
        <Link 
          to="/more-info" 
          className="bg-[#2db945] hover:bg-white text-white text-[18px] hover:text-[#2db945] border-2 hover:border-[#2db945] font-bold py-2 px-6 rounded-[10px] tracking-[1.6px]"
        >
          Batafsil
        </Link>
      </div>
      <img src={HeroImg} alt="hero img" width={600} />
    </div>
  );
};

export default Hero;
    