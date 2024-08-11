import React, { useContext, useState } from "react";
import SideBar from "../components/navigation/SideBar";
import NewDestination from "../components/popups/NewDestination";
import DataContext from "../data/dataContext";

const Destinations = () => {
  const [addingDestination, setAddingDestination] = useState(false);

  const { destinations } = useContext(DataContext);

  return (
    <SideBar>
      {addingDestination && (
        <NewDestination close={() => setAddingDestination(false)} />
      )}
      <div className="w-full max-w-[900px]">
        <header className="w-full justify-between flex">
          <h1 className="text-blue-950 font-semibold text-3xl">Destinations</h1>
          <button
            className="h-[2.5rem] bg-blue-950 flex items-center justify-center rounded-lg font-semibold text-white px-6"
            onClick={() => setAddingDestination(true)}
          >
            Add destination
          </button>
        </header>
        <section className="w-full pt-5 flex gap-4">
          <table className="w-full">
            <thead className=" text-white">
              <tr className="bg-blue-950 h-[3rem]">
                <th className="w-[60%] border border-white">Destination</th>
                <th className="w-[20%] border border-white">Price VIP</th>
                <th className="w-[20%] border border-white">Price economic</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {destinations.map((destination) => (
                <tr className="h-[3rem] pl-6 border-blue-950">
                  <td className=" pl-6 border border-blue-950">
                    {destination.cityName}
                  </td>
                  <td className=" pl-6 border border-blue-950">
                    {destination.vip}
                  </td>
                  <td className=" pl-6 border border-blue-950">
                    {destination.economic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </SideBar>
  );
};

export default Destinations;
