import React from "react";

const ResultContent = ({title, content}) => {
  return (
    <div className="mt-10">
        <h3 className="text-[#6C8ACC] text-[28px] font-semibold">{title}</h3>
     
      <p className="text-black text-[18px] ">
        {content}
      </p>
    </div>
  );
};

export default ResultContent;
