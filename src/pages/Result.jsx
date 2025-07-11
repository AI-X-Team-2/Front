import React from "react";
import ResultContent from "../component/ResultContent";

const Result = ({ result }) => {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50  space-y-8">
      {/* 꿈 내용 박스 */}
      <div className="max-w-xl w-full p-6 bg-white rounded-xl shadow border border-gray-300">
        <h2 className="text-[#6C8ACC] font-bold mb-2 text-2xl">악몽 내용</h2>
        <p className="text-black text-sm">{result.original_text}</p>
      </div>

      {/* 꿈 해몽 박스 */}
      <div className="max-w-xl w-full p-6 bg-white rounded-xl shadow border border-gray-300">
        <h2 className="text-[#6C8ACC] font-bold mb-2 text-2xl">악몽 해몽</h2>

        <ResultContent title="꿈의 개요" content={result.overview} />
        <ResultContent
          title="꿈의 주제 기반 분석"
          content={result.theme_analysis}
        />
        <ResultContent
          title="세부요소 분석"
          content={result.detail_analysis}
          isDetailAnalysis={true}
        />
        <ResultContent
          title="생활 속 연관성 유추"
          content={result.real_life_connection}
        />
        <ResultContent title="결론" content={result.comforting_advice} />
      </div>
    </div>
  );
};

export default Result;
