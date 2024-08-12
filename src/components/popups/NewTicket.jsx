import React, { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";
import airtelMoney from "../../images/airtel-money.png";
import mastercard from "../../images/mastercard.png";
import moovMoney from "../../images/moov-money.png";
import visa from "../../images/visa.png";
import DataContext from "../../data/dataContext";

const NewTicket = ({ close }) => {
  const [payementMethod, setPayementMethod] = useState("mastercard");
  const [cathegory, setCathegory] = useState("economic");
  const { destinations } = useContext(DataContext);
  const [destination, setDestination] = useState(destinations[0]);
  const [name, setName] = useState("");

  const { addTicket } = useContext(DataContext);

  const submitHandler = () => {
    if (!name) return;
    const ticket = {
      cathegory,
      destination: destination.cityName,
      payementMethod,
      name,
      date: new Date(),
      price: destination[cathegory],
    };
    addTicket(ticket);
    close();
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-blue-950/50 flex items-center justify-center z-50 fixed top-0 left-0 bottom-0 right-0">
      <div className="w-[560px] bg-white p-4 flex flex-col justify-between gap-4">
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-blue-950">New Ticket</p>
          <button
            className="flex itemsa-center justify-center text-blue-950"
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
            onChange={(e) => setName(e.target.value)}
          />
          <div className="w-full flex gap-[4%]">
            <div className="w-[48%] flex flex-col gap-2">
              <p>Destination</p>
              <select
                className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
                onChange={(e) =>
                  setDestination(
                    destinations.find(
                      (destination) => destination.cityName === e.target.value
                    )
                  )
                }
              >
                {destinations.map((destination) => (
                  <option value={destination.cityName}>
                    {destination.cityName}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[48%] flex flex-col gap-2">
              <p>Cathegory</p>
              <select
                className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
                onChange={(e) => setCathegory(e.target.value)}
              >
                <option value="economic">economic</option>
                <option value="vip">VIP</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <p>Price:</p>
          <p className="font-semibold text-2xl text-blue-950">
            {cathegory === "economic" ? destination.economic : destination.vip}{" "}
            FCFA
          </p>
        </div>

        <p>Payement method:</p>
        <div className=" flex gap-4 w-full justify-center">
          <button
            className={`p-4 ${
              payementMethod === "mastercard"
                ? "border-2 border-blue-950"
                : "border-blue-950/20 border"
            }`}
            onClick={() => setPayementMethod("mastercard")}
          >
            <img src={mastercard} className="h-[48px]" alt="mastercard" />
          </button>
          <button
            className={`p-4 ${
              payementMethod === "visa"
                ? "border-2 border-blue-950"
                : "border-blue-950/20 border"
            }`}
            onClick={() => setPayementMethod("visa")}
          >
            <img src={visa} className="h-[48px]" alt="visa" />
          </button>
          <button
            className={`p-4 ${
              payementMethod === "moov money"
                ? "border-2 border-blue-950"
                : "border-blue-950/20 border"
            }`}
            onClick={() => setPayementMethod("moov money")}
          >
            <img src={moovMoney} className="h-[48px]" alt="moov money" />
          </button>
          <button
            className={`p-4 ${
              payementMethod === "airtel money"
                ? "border-2 border-blue-950"
                : "border-blue-950/20 border"
            }`}
            onClick={() => setPayementMethod("airtel money")}
          >
            <img src={airtelMoney} className="h-[64px]" alt="airtel money" />
          </button>
        </div>

        <button
          className="w-full h-[3rem] bg-blue-950 text-white font-semibold"
          onClick={submitHandler}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default NewTicket;
