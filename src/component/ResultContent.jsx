import React from "react";

const ResultContent = ({ title, content, isDetailAnalysis }) => {
  return (
    <div className="mt-10">
      <h3 className="text-[#6C8ACC] text-xl font-semibold">{title}</h3>

      {isDetailAnalysis ? (
        <p>
          {content.split("\n").map((line, index) => (
            <span className="text-black text-sm"key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      ) : (
        <p className="text-black text-sm ">{content}</p>
      )}
    </div>
  );
};

export default ResultContent;
