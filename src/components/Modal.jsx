import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { closeSvg } from "./Svgs";

const Modal = () => {
  const { closeModal, isModalOpen, selectedItem } = useContext(AppContext);

  return (
    <>
      {isModalOpen && selectedItem && (
        <div className="fixed top-0 flex items-center justify-center z-10 w-full h-full bg-black/30">
          <div className="flex flex-col gap-6 md:w-[440px] bg-[#fff] pt-6">
            <div className="px-6 flex gap-4 justify-between">
              <div>
                <p className="text-[#334155] text-[18px] font-semibold leading-7">
                  {selectedItem.title}
                </p>
                <p className="text-[#64748B] text-[14px] font-normal leading-5">
                  {selectedItem.date}
                </p>
              </div>
              <button
                className="flex items-center justify-center w-6 h-6 p-1 rounded-full border border-[#E2E8F0]"
                onClick={closeModal}
              >
                {closeSvg}
              </button>
            </div>

            <div className="px-6">
              <p className="text-[#334155] text-[14px] font-normal leading-5">
                Event Description
              </p>
            </div>

            <div className="px-6 flex flex-col gap-4">
              <div className="flex gap-0">
                <img src="/modal-img-1.png" alt="" className="relative z-30" />
                <img
                  src="/modal-img-2.png"
                  alt=""
                  className="relative z-20 -ml-2"
                />
                <img
                  src="/modal-img-3.png"
                  alt=""
                  className="relative z-10 -ml-2"
                />
              </div>
              <p className="text-[#334155] text-[14px] font-normal leading-5">
                3 Guest Speakers: {selectedItem.speaker}, Speaker name B,
                Speaker name C. 300 Attendees
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[10px] p-6 bg-[#F8FAFC] justify-center md:justify-between">
              <button className="flex px-4 py-2 justify-center items-center rounded-[2px] border border-[#E2E8F0] bg-[#fff] text-[#334155] text-[14px] font-normal leading-5">
                Edit
              </button>
              <div className="flex flex-col md:flex-row gap-2">
                <button className="flex px-4 py-2 justify-center items-center rounded-[2px] bg-[#F43F5E] text-[#fff] text-[14px] font-normal leading-5">
                  Delete
                </button>
                <button className="flex px-4 py-2 justify-center items-center rounded-[2px] bg-[#8576FF] text-[#fff] text-[14px] font-normal leading-5">
                  Mark as completed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
