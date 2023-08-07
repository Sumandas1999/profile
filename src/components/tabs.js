import React, { useState } from "react";

function Tabs() {
  const [click, setClick] = useState(0);

  const data = [
    {
      heading: "MY PROFILE",
      name: "Out of Canada's 13 provinces and territories, 11 have been affected by wildfires since March 2023, culminating in the worst wildfire seasonin recorded Canadian history",
    },

    {
      heading: "MY PROFILE 2",
      name: "According to authorities, conditions like these so early in the season are unprecedented and, due to climate change, may continue to increase in frequency and severity",
    },

    {
      heading: "MY PROFILE 3",
      name: "Smoke emitted from the wildfires has caused air quality alerts and evacuations in Canada, the United States, and even Europe",
    },
  ];

  const renderData = data[click];

  const button = ["GitHub", "Experience", "Extra"];

  const buttonRender = button.map((button, index) => {
    if(click === index){
      return (
        <button
          className=" py-4  w-48 bg-sky-700 ... border-l-2 border-slate-400 "
          onClick={() => setClick(index)}
          key={index}
        >
          {button}
        </button>
      )
    }
    return (
      <button
        className=" py-4 text-white w-48 hover:bg-sky-700 ... border-l-2 border-slate-400 "
        onClick={() => setClick(index)}
        key={index}
      >
        {button}
      </button>
    )
  }
  );

  return (
    <>
      <div className="  ">
        <div className="flex text-white items-center pb-10 w-screen justify-evenly ">
          <div className=" flex flex-col">{buttonRender}</div>
          <div className="flex w-96 h-48">
            {renderData.heading}
            {renderData.name}
          </div>
        </div>

      </div>
    </>
  );
}

export default Tabs;
