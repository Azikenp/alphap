import { useContext } from "react";
import { metrics } from "./data";
import { metricSvg, metricSvgDark } from "./Svgs";
import { AppContext } from "./context/AppContext";

const Metrics = () => {
  const isDarkMode = useContext(AppContext);
  return (
    <div>
      <div className="flex flex-col gap-3 px-5 md:px-7 md:py-8">
        <h2 className="text-[#000] dark:text-[#fff] text-[17px] lg:text-[22px] font-normal leading-5 lg:mb-6">
          Welcome! here&apos;s your summary
        </h2>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap ">
          {metrics.map((metric) => {
            return (
              <div
                key={metric.title}
                className="flex justify-center flex-col gap-1 p-4 border border-[#F2F2F7] dark:border-[#484554] bg-[#ffffff] dark:bg-[#484554] rounded-[2px] md:w-[240px] lg:h-[88px] group"
              >
                <div className="flex items-center gap-1 text-[#64748B] dark:text-[#fff]">
                  <p className="text-[16px] font-semibold leading-6">
                    {metric.title}
                  </p>
                  {isDarkMode ? metricSvgDark : metricSvg}
                </div>

                <div className="flex gap-1 items-center">
                  <p className="text-[#334155] dark:text-[#fff] text-[20px] font-semibold leading-8">
                    {metric.subject}
                  </p>
                  <img
                    className="w-3 h-3 group-hover:scale-110 transition-all group-hover:mr-1"
                    src={metric.image}
                    alt="arrow-success"
                  />
                  <p
                    className={` ${
                      metric.success ? "text-[#10B981]" : "text-[#F43F5E]"
                    } text-[#10B981] text-[10px] font-semibold leading-3`}
                  >
                    {metric.percentage}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
