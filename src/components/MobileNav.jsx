import { useState } from "react";
import { closeSvg } from "./Svgs";
import { menuOne, menuTwo } from "./data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-screen">
      <div className="border-b-[1px] border-[#E2E8F0] mb-[8px]">
        <div className="flex items-center justify-between p-[16px]">
          <div className="w-[64px] h-[32px] cursor-pointer">
            <img className="w-full h-full" src="/Logo.png" alt="logo" />
          </div>
          <div className="cursor-pointer" onClick={handleClick}>
            {!isOpen ? (
              <img src="/icons/hamburger-menu-broken.svg" alt="menu" />
            ) : (
              <div className="flex items-center justify-center border-2 border-gray-100 rounded-full p-[4px]">
                {closeSvg}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-[20px] flex flex-col items-start gap-2 mb-2">
        {menuOne.map((item) => {
          return (
            <div
              key={item.title}
              className=" w-full flex p-2 items-center gap-4 cursor-pointer"
            >
              <img className="w-5 h-5" src={item.src} alt="" />
              <p className="text-[#334155] text-[14px] font-normal leading-5 capitalize">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      <div className="px-[20px] flex flex-col items-start gap-2">
        {menuTwo.map((item) => {
          return (
            <div
              key={item.title}
              className=" w-full flex p-2 items-center gap-4 cursor-pointer"
            >
              <img className="w-5 h-5" src={item.src} alt="" />
              <p className="text-[#334155] text-[14px] font-normal leading-5 capitalize">
                {item.title}
              </p>
            </div>
          );
        })}

        <div></div>

        <div className="flex items-center py-2 gap-2">
          <img src="/icons/profile-icon.png" alt="profile-img" />
          <div>
            <h3>Rudra Devi</h3>
            <p>rudra.devi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
