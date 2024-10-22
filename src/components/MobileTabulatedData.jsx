import { useState, useContext } from "react";
// import { tableData } from "./data";
import { arrowDown, arrowRight } from "./Svgs";
import { AppContext } from "./context/AppContext";

const MobileTabulatedData = () => {
  const { displayData, handleTitleClick } = useContext(AppContext);

  //   const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // setIsCollapsed((prev) => !prev);
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="lg:hidden md:mt-10">
      <div>
        <div className="flex items-center justify-between px-4 bg-[#f1f5f9] h-12 text-[#64748b] text-[12px] font-semibold leading-4 text-left">
          <p>Event Name</p>
          <p className="mr-4">Status</p>
        </div>

        <div>
          {displayData.map((data, index) => {
            return (
              <div key={data.id}>
                <div
                  onClick={() => {
                    handleClick(index);
                    handleTitleClick(data);
                  }}
                  className={`flex items-center  px-[10px] py-[8px] gap-4 cursor-pointer h-10 relative ${
                    activeIndex === index &&
                    "p-4 border-b border-[#FCF7FF] bg-[#F2F2F7]"
                  }`}
                >
                  {activeIndex === index ? arrowDown : arrowRight}

                  <p className="text-[#334155] text-[14px] font-normal leading-5 text-left">
                    {data.title}
                  </p>

                  <div
                    className={`flex items-center justify-center px-[10px] py-[2px] rounded-[30px] text-[#FFF] text-right absolute right-[10px] ${
                      data.status === "Completed"
                        ? "bg-[#10B981]"
                        : "bg-[#3B82F6]"
                    }`}
                  >
                    <p className="text-[12px] font-normal leading-4">
                      {data.status}
                    </p>
                  </div>
                </div>

                {activeIndex === index && (
                  <div className="flex items-center justify-between gap-4 cursor-pointer h-10 text-[#334155] text-[14px] font-normal leading-5 p-4 border-b border-[#FCF7FF] bg-[#f5f5f5] mt-[1px]">
                    <p>{data.speaker}</p>
                    <p>{data.date}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileTabulatedData;
