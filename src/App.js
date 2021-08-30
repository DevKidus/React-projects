import { useRef, useState } from "react";
import Modal from "./Modal";

const App = () => {
  let [modalView, setModalView] = useState(false);

  const hideModal = () => {
    setModalView(false);
  };

  return (
    <div className="w-full h-screen grid place-items-center font-Noto">
      <button
        onClick={() => {
          setModalView(true);
        }}
        className="px-8 py-2 bg-gray-800 text-white rounded-lg"
      >
        Click
      </button>
      {modalView && <Modal hideModal={hideModal} />}
    </div>
  );
};
export default App;
