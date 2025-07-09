import React from 'react'
import ResultContent from '../component/ResultContent'
const Result = () => {
  return (
  <div className="flex flex-col items-center p-10 bg-gray-50 min-h-screen space-y-8">
      {/* 꿈 내용 박스 */}
      <div className="w-[50rem] h-[10rem] p-6 bg-white rounded-xl shadow border border-gray-300">
         <h2 className="bg-[linear-gradient(to_right,#7B98D8,#52689A_56%,#273147)] bg-clip-text text-transparent font-bold mb-2 text-[36px]">
       악몽 내용
      </h2>
      <p className="text-black text-[18px] ">
        내용
      </p>
      
      </div>


      <div className="w-[50rem] p-6 bg-white rounded-xl shadow border border-gray-300">
         <h2 className="bg-[linear-gradient(to_right,#7B98D8,#52689A_56%,#273147)] bg-clip-text text-transparent font-bold mb-2 text-[36px]">
       악몽 해몽
      </h2>
          <ResultContent title={"꿈의 주제 기반 분석"} content={"내용"}/>
          <ResultContent title={"세부요소 분석"} content={"내용"}/>

          <ResultContent title={"생활 속 연관성 유추"} content={"내용"}/>

          <ResultContent title={"결론"} content={"내용"}/>

         



      </div>
     
      
    </div>
  )
}

export default Result
