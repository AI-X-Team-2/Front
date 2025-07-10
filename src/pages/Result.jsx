import React from "react";
import ResultContent from "../component/ResultContent";
import { useLocation } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const { result } = location.state || {};

  if (!result) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        결과를 불러올 수 없습니다.
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center p-10 bg-gray-50 min-h-screen space-y-8">
      {/* 꿈 내용 박스 */}
      <div className="w-[50rem] p-6 bg-white rounded-xl shadow border border-gray-300">
        <h2 className="bg-[linear-gradient(to right,#7B98D8,#52689A 56%,#273147)] bg-clip-text text-transparent font-bold mb-2 text-[36px]">
          악몽 내용
        </h2>
        <p className="text-black text-[18px]">{result.original_text}</p>
      </div>

      {/* 꿈 해몽 박스 */}
      <div className="w-[50rem] p-6 bg-white rounded-xl shadow border border-gray-300">
        <h2 className="bg-[linear-gradient(to right,#7B98D8,#52689A 56%,#273147)] bg-clip-text text-transparent font-bold mb-2 text-[36px]">
          악몽 해몽
        </h2>

        <ResultContent title="꿈의 개요" content={result.overview} />
        <ResultContent
          title="꿈의 주제 기반 분석"
          content={result.theme_analysis}
        />
        <ResultContent title="세부요소 분석" content={result.detail_analysis} />
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
