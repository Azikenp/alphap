import Events from "./Events";

const EventsContainer = () => {
  return (
    <div className="flex flex-col gap-[21px] md:gap-0">
      <h3 className="text-[#000] dark:text-[#fff] text-[17px] md:text-[18px] font-medium leading-4 md:mb-1 ml-7">
        Events History
      </h3>
      <Events />
    </div>
  );
};

export default EventsContainer;
