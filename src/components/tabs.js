import React, { useState } from "react";

function Tabs() {
  const [click, setClick] = useState(0);

  const data = [
    {
      heading: "",
      name: "  I have hands-on experience as a web developer intern, contributing to the development of web applications. I collaborated with a team, honed my Java, HTML, and CSS skills, and gained exposure to backend technologies. I also assisted in code reviews and deployment processes, enhancing my understanding of full-stack development.",
    },

    {
      heading: "",
      name: "  HTML , CSS , JavaScript , React , Git , Node.js , Docker ",
    },

    {
      heading: " ",
      name: " Outside of my web development endeavors, I have a diverse range of interests. I find joy in cooking delectable dishes, expressing my creativity through sketching, and losing myself in the world of musical instruments. These hobbies not only bring balance to my life but also fuel my passion for continuous learning and personal growth. ",
    },
  ];

  const renderData = data[click];

  const button = ["GEPTON", "Skills", "Extra"];

  const buttonRender = button.map((button, index) => {
    if(click === index){
      return (
        <button
          className=" button-1 py-4  w-48 bg-red-400 ... border-l-2 border-slate-400 "
          onClick={() => setClick(index)}
          key={index}
        >
          {button}
        </button>
      )
    }
    return (
      <button
        className="button-2 py-4 text-black w-48 hover:bg-red-400 ... border-l-2 border-slate-400 "
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
      <div className=" data-1  ">
        <div className=" tabs-main flex text-black items-center pb-10 w-40vw justify-evenly ">
          <div className=" tabs flex flex-col">{buttonRender}</div>
          <div className="flex w-96 h-100">
            {renderData.heading}
            {renderData.name}
          </div>
        </div>

      </div>
    </>
  );
}

export default Tabs;
