import ChartAndCarousel from "./ChartAndCarousel";
import EventsContainer from "./EventsContainer";
import Metrics from "./Metrics";

const ContentBody = () => {
  return (
    <div className="flex flex-col gap-[21px]">
      <Metrics />
      <ChartAndCarousel />
      <EventsContainer />
    </div>
  );
};

export default ContentBody;
