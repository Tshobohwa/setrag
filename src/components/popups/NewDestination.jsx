import React from "react";
import { CgClose } from "react-icons/cg";

const NewDestination = ({ close }) => {
  return (
    <div className="h-[100vh] w-[100vw] bg-blue-950/50 flex items-center justify-center z-50 fixed top-0 left-0 bottom-0 right-0">
      <div className="w-[360px] h-[400px] bg-white p-4 flex flex-col justify-between gap-4">
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-blue-950">New Destination</p>
          <button
            className="flex items-center justify-center text-blue-950"
            onClick={close}
          >
            <CgClose size={24} />
          </button>
        </div>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            name=""
            id=""
            className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
            placeholder="city name"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
            placeholder="Price economic"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
            placeholder="Price VIP"
          />
        </div>

        <button className="w-full h-[3rem] bg-blue-950 text-white font-semibold">
          confirm
        </button>
      </div>
    </div>
  );
};

export default NewDestination;
