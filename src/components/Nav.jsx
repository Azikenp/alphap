import { menuOneCollapsed, menuTwoCollapsed } from "./data";

const Nav = () => {
  return (
    <div>
      <div className="p-2 flex flex-col gap-4 border-r-[1px] border-[#F1F5F9] h-screen">
        <div className="p-2">
          <img className="w-16 h-8" src="/Logo.png" alt="logo" />
        </div>

        <div className="flex flex-col gap-2">
          <div>
            {menuOneCollapsed.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-full flex p-2 items-center gap-4 cursor-pointer h-[36px]"
                >
                  <img className="w-5 h-5" src={item.src} alt={item.title} />
                  <div className="w-[172px]">
                    <p className="text-[#334155] text-[14px] font-normal leading-5 capitalize">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <div className="w-full flex p-2 items-center cursor-pointer h-[36px]">
              <div className="w-full flex items-center gap-4">
                <img
                  className="w-5 h-5"
                  src="/icons/notifications-icon.png"
                  alt=""
                />
                <div className="w-[172px]">
                  <p className="text-[#334155] text-[14px] font-normal leading-5 capitalize">
                    notifications
                  </p>
                </div>
              </div>
              <div className="w-6 h-6 flex items-center justify-center gap-[4px] bg-[#F43F5E] rounded-full px-[4px] py-[8px]">
                <p className="text-[#fff] text-[12px] font-normal leading-4">
                  3
                </p>
              </div>
            </div>

            {menuTwoCollapsed.map((item) => {
              return (
                <div
                  key={item.title}
                  className=" w-full flex p-2 items-center gap-4 cursor-pointer"
                >
                  <img className="w-5 h-5" src={item.src} alt="" />
                  <div className="w-[172px]">
                    <p className="text-[#334155] text-[14px] font-normal leading-5 capitalize">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="flex gap-2 px-2 items-center my-2">
              <div className="w-6 h-4 flex items-center p-[2px] bg-[#E2E8F0] rounded-full cursor-pointer">
                <div className="w-[50%] h-full rounded-full bg-[#fff]"></div>
              </div>
              <p className="text-[#334155] text-[12px] font-normal leading-4">
                Dark mode
              </p>
            </div>

            <div className="flex items-center px-1 py-2 gap-2">
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
    </div>
  );
};

export default Nav;
