import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = ({ title, desc }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <div className="main-accordion">
      <div className="accordion">
        <div className="accordion-title">
          <h4>{title}</h4>
          <button onClick={handleShowDesc}>
            {showDesc ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        <div className="accordion-desc">{showDesc && desc}</div>
      </div>
    </div>
  );
};

export default Accordion;
