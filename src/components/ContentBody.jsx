import ChartAndCarousel from "./ChartAndCarousel"
import Metrics from "./Metrics"


const ContentBody = () => {
  return (
    <div className="flex flex-col gap-[21px]">
        <Metrics />
        <ChartAndCarousel />
    </div>
  )
}

export default ContentBody