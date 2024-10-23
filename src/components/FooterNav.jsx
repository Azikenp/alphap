import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const FooterNav = () => {
  const {isVisible} = useContext(AppContext);

  return (
    <div
    className={`md:hidden transition-opacity w-full duration-300 ${
        isVisible ? 'fixed bottom-0 opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="px-4 pb-8 flex items-center justify-between gap-2 bg-[#fff]"
        style={{ boxShadow: "0px 1px 0px 0px #F3F4F6 inset" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div className="h-1 w-full bg-[#8576FF]"></div>
          <img className="w-8 h-8" src="/icons/home-unactive-icon.svg" alt="" />
          <p className="text-[#8576FF] text-[14px] font-normal leading-5">
            Home
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div className="h-1 w-full bg-[#fff]"></div>
          <img className="w-6 h-6" src="/icons/events-icon.png" alt="" />
          <p className="text-[#64748B] text-[14px] font-normal leading-5">
            Events
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div className="h-1 w-full bg-[#fff]"></div>
          <img className="w-6 h-6" src="/icons/speakers-icon.png" alt="" />
          <p className="text-[#64748B] text-[14px] font-normal leading-5">
            Speakers
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div className="h-1 w-full bg-[#fff]"></div>
          <img className="w-6 h-6" src="/icons/reports-icon-main.svg" alt="" />
          <p className="text-[#64748B] text-[14px] font-normal leading-5">
            Reports
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 cursor-pointer">
          <div className="h-1 w-full bg-[#fff]"></div>
          <img className="w-8 h-8" src="/icons/profile-icon-sharp.svg" alt="" />
          <p className="text-[#64748B] text-[14px] font-normal leading-5">
            Profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
