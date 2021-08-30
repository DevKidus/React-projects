const Modal = ({ hideModal }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, .5",
        position: "absolute",
        top: "0",
        left: "0",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div className=" w-96 h-40 bg-white rounded-lg grid place-content-center space-y-7">
        <p className="text-2xl font-semibold text-center">Sure To Logout?</p>
        <div className="flex justify-between ">
          <button
            onClick={hideModal}
            className="text-green-600 px-3 py-2 font-semibold mx-4"
          >
            Cancel
          </button>
          <button
            onClick={hideModal}
            className="bg-red-500 text-white px-3 py-2 mx-4 font-semibold rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
