import React from "react";
import Accordion from "./Accordion";
import { AccordionText } from "./AccordionText";

const AccordionList = () => {
  return (
    <div className="acordion-list">
      {AccordionText.map((item, index) => {
        return <Accordion key={index} title={item.title} desc={item.desc} />;
      })}
    </div>
  );
};

export default AccordionList;
