import { useContext } from "react";
import {
  arrowDown,
  arrowDownDark,
  nextBtn,
  nextBtnDark,
  prevBtn,
  prevBtnDark,
} from "./Svgs";
import { AppContext } from "./context/AppContext";

const Pagination = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div>
      <div className="flex items-center justify-between px-7 mb-20 md:mb-6">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 p-2 flex items-center justify-center rounded-[2px] bg-[#E2E8F0] dark:bg-[#484554] cursor-pointer dark:hover:bg-[#918ab159] transition-all">
            {isDarkMode ? prevBtnDark : prevBtn}
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8576FF] text-[14px] font-normal leading-5 text-[#fff] cursor-pointer">
            <p>1</p>
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full text-[14px] dark:text-[#fff] font-normal leading-5 cursor-pointer hover:bg-[#8676ff5d] transition-all">
            <p>2</p>
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full text-[14px] dark:text-[#fff] font-normal leading-5 cursor-pointer hover:bg-[#8676ff5d] transition-all">
            <p>3</p>
          </div>
          <div className="w-9 h-9 p-2 flex items-center justify-center rounded-[2px] bg-[#fff] dark:bg-[#484554] border border-[#E2E8F0] dark:border-none cursor-pointer hover:bg-[#e2e8f070] dark:hover:bg-[#918ab159] transition-all">
            {isDarkMode ? nextBtnDark : nextBtn}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[14px] text-[#334155] dark:text-[#fff] font-normal leading-5">
          <p className="hidden md:block">Show:</p>
          <div className="flex p-2 items-center justify-center gap-2 rounded-[2px] border border-[#E2E8F0] dark:bg-[#484554] dark:border-none cursor-pointer">
            <p>10 rows</p>
            {isDarkMode ? arrowDownDark : arrowDown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
