import { useState } from "react";
import { closeSvg } from "./Svgs";
import { menuOne, menuTwo } from "./data";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  //{`${isOpen? "h-screen" : "h-0"}`}

  return (
    <div className={`${isOpen ? "h-screen" : ""} md:hidden`}>
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

      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-full" : "max-h-0"
        }`}
      >
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
          <div className="w-full flex p-2 items-center cursor-pointer">
            <div className="w-full flex items-center gap-4">
              <img
                className="w-5 h-5"
                src="/icons/notifications-icon.png"
                alt=""
              />
              <p className="text-[#334155] text-[14px] font-normal leading-5 capitalize">
                notifications
              </p>
            </div>
            <div className="w-6 h-6 flex items-center justify-center gap-[4px] bg-[#F43F5E] rounded-full">
              <p className="text-[#fff] text-[12px] font-normal leading-4">3</p>
            </div>
          </div>

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

          <div className="flex gap-2 px-2 items-center">
            <div className="w-6 h-4 flex items-center p-[2px] bg-[#E2E8F0] rounded-full cursor-pointer">
              <div className="w-[50%] h-full rounded-full bg-[#fff]"></div>
            </div>
            <p className="text-[#334155] text-[12px] font-normal leading-4">
              Dark mode
            </p>
          </div>

          <div className="flex items-center py-2 gap-2">
            <img src="/icons/profile-icon.png" alt="profile-img" />
            <div className="text-[12px] font-normal">
              <h3 className="text-[#334155] leading-4">Rudra Devi</h3>
              <p className="text-[#64748B] text-[12px] leading-4">
                rudra.devi@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
