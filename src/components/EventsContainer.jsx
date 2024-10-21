import Events from "./Events";

const EventsContainer = () => {
  return (
    <div className="flex flex-col gap-[21px] md:gap-0 px-5">
      <h3 className="text-[#000] text-[17px] md:text-[18px] font-medium leading-4 md:mb-1">
        Events History
      </h3>
      <Events />
    </div>
  );
};

export default EventsContainer;
