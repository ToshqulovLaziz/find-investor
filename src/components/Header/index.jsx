import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-[26px] bg-[#fff] sticky top-0 z-50 border-b-2">
      <div className="container max-w-full px-4 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FaDollarSign className="text-[35px] text-[#35e252]" />
            <Link className="font-extrabold w-[100px] text-[20px] tracking-[10px] text-[#35e252] leading-4 pt-1">
              FIND <span className="tracking-[2px] text-[12px]">INVESTOR</span>
            </Link>
          </div>
          <ul className="flex gap-7">
            <li>
              <Link className="text-[18px] font-medium hover:text-[#2db945]">Loyiha Haqida</Link>
            </li>
            <li>
              <Link className="text-[18px] font-medium hover:text-[#2db945]">Xizmatlar</Link>
            </li>
            <li>
              <Link className="text-[18px] font-medium hover:text-[#2db945]">Yangiliklar</Link>
            </li>
            <li>
              <Link className="text-[18px] font-medium hover:text-[#2db945]">Bog{"'"}lanish</Link>
            </li>
          </ul>
          <button className="bg-[#2db945] hover:bg-white text-white text-[18px] hover:text-[#2db945] border-2 hover:border-[#2db945] font-bold py-2 px-6 rounded-[10px] tracking-[1.6px]">
            Kirish
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
