import Carousel from "./Carousel";
import Chart from "./Chart";

const ChartAndCarousel = () => {
  return (
    <div className="flex flex-col gap-[21px]">
      <h3 className="ml-7 text-[#000000] dark:text-[#fff] font-medium text-[17px] leading-3">
        Event Registrations per month
      </h3>
      <div className="flex flex-col gap-[21px] lg:flex-row">
        <Chart />
        <Carousel />
      </div>
    </div>
  );
};

export default ChartAndCarousel;
