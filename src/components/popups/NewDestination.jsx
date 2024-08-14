import React, { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import DataContext from "../../data/dataContext";

const NewDestination = ({ close }) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [cityName, setCityName] = useState("");
  const [vip, setVip] = useState(0);
  const [economic, setEconomic] = useState(0);

  const [departureOne, setDepartureOne] = useState(weekDays[0]);
  const [departureTwo, setDepartureTwo] = useState(weekDays[1]);

  const { addDestination } = useContext(DataContext);

  const confirmHandler = () => {
    if (
      cityName === "" ||
      vip === 0 ||
      economic === 0 ||
      !economic ||
      !vip ||
      departureOne === departureTwo
    )
      return;
    const destination = {
      cityName,
      vip,
      economic,
      departureOne,
      departureTwo,
    };
    addDestination(destination);
    close();
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-blue-950/50 flex items-center justify-center z-50 fixed top-0 left-0 bottom-0 right-0">
      <div className="w-[360px] bg-white p-4 flex flex-col justify-between gap-4">
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
          <p>city name</p>
          <input
            type="text"
            className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
            placeholder="city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <p>Price economic (FCFA)</p>
          <input
            type="number"
            className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
            placeholder="Price economic (FCFA)"
            onChange={(e) => setEconomic(+e.target.value)}
          />
          <p>Price VIP (FCFA)</p>
          <input
            type="number"
            className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
            placeholder="Price VIP (FCFA)"
            onChange={(e) => setVip(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Departure one</p>
            <select
              className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
              onChange={(e) => setDepartureOne(e.target.value)}
              value={departureOne}
            >
              {weekDays.map((weekDay) => (
                <option value={weekDay}>{weekDay}</option>
              ))}
            </select>
          </div>
          <div>
            <p>Departure two</p>
            <select
              className="w-full border-2 border-blue-950 h-[3rem] placeholder:text-blue-950/50 pl-4"
              onChange={(e) => setDepartureTwo(e.target.value)}
              value={departureTwo}
            >
              {weekDays.map((weekDay) => (
                <option value={weekDay}>{weekDay}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="w-full h-[3rem] bg-blue-950 text-white font-semibold"
          onClick={confirmHandler}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default NewDestination;
