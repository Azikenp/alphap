import ChartAndCarousel from "./ChartAndCarousel";
import EventsContainer from "./EventsContainer";
import Metrics from "./Metrics";
import Pagination from "./Pagination";

const ContentBody = () => {
  return (
    <div className="flex flex-col gap-[21px] pb-9">
      <Metrics />
      <ChartAndCarousel />
      <EventsContainer />
      <Pagination />
    </div>
  );
};

export default ContentBody;
