import { arrowDown, nextBtn, prevBtn } from "./Svgs";

const Pagination = () => {
  
  return (
    <div>
      <div className="flex items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 p-2 flex items-center justify-center rounded-[2px] bg-[#E2E8F0] cursor-pointer">
            {prevBtn}
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8576FF] text-[14px] font-normal leading-5 text-[#fff] cursor-pointer">
            <p>1</p>
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full text-[14px] font-normal leading-5 cursor-pointer">
            <p>2</p>
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full text-[14px] font-normal leading-5 cursor-pointer">
            <p>3</p>
          </div>
          <div className="w-9 h-9 p-2 flex items-center justify-center rounded-[2px] bg-[#fff] border border-[#E2E8F0] cursor-pointer">
            {nextBtn}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[14px] text-[#334155] font-normal leading-5">
          <p className="hidden md:block">Show:</p>
          <div className="flex p-2 items-center justify-center gap-2 rounded-[2px] border border-[#E2E8F0] cursor-pointer">
            <p>10 rows</p>
            {arrowDown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
