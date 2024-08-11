import React from "react";
import { CgClose } from "react-icons/cg";

const NewTicket = ({ close }) => {
  return (
    <div className="h-[100vh] w-[100vw] bg-blue-950/50 flex items-center justify-center z-50 fixed top-0 left-0 bottom-0 right-0">
      <div className="w-[560px] h-[400px] bg-white p-4 flex flex-col justify-between gap-4">
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-blue-950">New Ticket</p>
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
            placeholder="client name"
          />
          <div className="w-full flex gap-[4%]">
            <div className="w-[48%] flex flex-col gap-2">
              <p>Destination</p>
              <select className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4">
                <option value="Libreville">Libreville</option>
                <option value="Franceville">Franceville</option>
              </select>
            </div>
            <div className="w-[48%] flex flex-col gap-2">
              <p>Cathegory</p>
              <select className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4">
                <option value="economic">economic</option>
                <option value="vip">VIP</option>
              </select>
            </div>
          </div>
        </div>

        <button className="w-full h-[3rem] bg-blue-950 text-white font-semibold">
          confirm
        </button>
      </div>
    </div>
  );
};

export default NewTicket;
