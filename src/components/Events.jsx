import { arrowDown, downloadIcon, verticalDotsIcon } from "./Svgs";
import TabulatedData from "./TabulatedData";

const Events = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:flex-wrap justify-between gap-2.5 md:gap-2 md:h-9">
        <div className="flex w-full p-2 items-center gap-2 border border-[#E2E8F0] rounded-[2px] md:w-[200px] h-full">
          <img className="w-4 h-4" src="/icons/search-icon.png" alt="" />
          <input
            type="text"
            className="w-full text-[#CBD5E1] text-[14px] font-normal leading-5 outline-none"
            placeholder="Search"
          />
        </div>

        <div className="flex gap-2 items-center justify-center px-4 md:px-2 py-2 border border-[#E2E8F0] rounded-[2px] text-[#334155] cursor-pointer h-full">
          <p className="text-[14px] font-normal leading-5">Date</p>
          {arrowDown}
        </div>

        <div className="flex gap-2 items-center justify-center px-4 md:px-2 py-2 border border-[#E2E8F0] rounded-[2px] text-[#334155] cursor-pointer h-full">
          <p className="text-[14px] font-normal leading-5">Status</p>
          {arrowDown}
        </div>

        <div className="flex gap-2 items-center justify-center px-4 md:px-2 py-2 border border-[#E2E8F0] rounded-[2px] text-[#334155] cursor-pointer h-full">
          <p className="text-[14px] font-normal leading-5">Name</p>
          {arrowDown}
        </div>

        <p className="text-[#334155] text-[14px] font-semibold leading-5 md:mr-4">
          Displaying 100 Results
        </p>

        <div className="flex items-center justify-between md:gap-2 text-[#334155] text-[14px]">
          <p className="font-normal leading-5">Sort:</p>
          <div className="flex items-center justify-center gap-2 px-4 md:px-2 py-2 border border-[#E2E8F0] rounded-[2px] cursor-pointer h-full">
            <p>Most Recent </p>
            {arrowDown}
          </div>
        </div>

        <div className="flex items-center justify-between md:gap-2 text-[#334155] text-[14px]">
          <div className="flex items-center justify-center w-9 h-9 p-2 gap-2 border border-[#E2E8F0] rounded-[2px] cursor-pointer">
            {verticalDotsIcon}
          </div>
          <div className="flex items-center justify-center gap-2 px-4 md:px-2 py-2 border border-[#E2E8F0] rounded-[2px] cursor-pointer">
            {downloadIcon}
            <p>Export</p>
          </div>
        </div>
      </div>

      <TabulatedData />
    </div>
  );
};

export default Events;
