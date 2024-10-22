import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const Modal = () => {
  const { closeModal, isModalOpen, selectedItem } = useContext(AppContext);

  return (
    <>
      {isModalOpen && selectedItem && (
        <div>Hello</div>
      )}
    </>
  );
};

export default Modal;
