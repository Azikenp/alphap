import Carousel from "./Carousel";
import Chart from "./Chart";

const ChartAndCarousel = () => {
  return (
    <div className="flex flex-1 flex-col gap-[21px] lg:flex-row">
      <Chart />
      <Carousel />
    </div>
  );
};

export default ChartAndCarousel;
