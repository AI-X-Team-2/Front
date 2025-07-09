import React from 'react';

const Main = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-indigo-100 to-purple-200 flex items-center justify-center p-4">
      <div className="relative bg-white shadow-lg border border-gray-300 rounded-xl p-8 w-full max-w-lg overflow-hidden">

        {/* 🌌 흐릿한 배경 */}
        <img
          src="/assets/light.jpg"
          alt="light"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />

        {/* 🌙 달 - 왼쪽 상단 구석 */}
        <img
          src="/assets/moon.jpg"
          alt="moon"
          className="absolute top-[-40px] left-[-40px] w-24 opacity-90 pointer-events-none"
        />

        {/* ☁️ 구름들 - 더 크게, 바깥에 가까이 */}
        <img
          src="/assets/cloud1.jpg"
          alt="cloud1"
          className="absolute top-[-20px] right-[-40px] w-36 opacity-35 pointer-events-none"
        />
        <img
          src="/assets/cloud2.jpg"
          alt="cloud2"
          className="absolute bottom-[-30px] left-[-30px] w-40 opacity-30 pointer-events-none"
        />
        <img
          src="/assets/cloud3.jpg"
          alt="cloud3"
          className="absolute top-[50%] left-[-45px] w-36 opacity-25 pointer-events-none"
        />

        {/* 🌟 별들 - 사방 모서리에, 작고 빽빽하게 */}
        <img
          src="/assets/stars1.jpg"
          alt="stars1"
          className="absolute top-[-25px] right-[-25px] w-16 opacity-30 pointer-events-none"
        />
        <img
          src="/assets/stars2.jpg"
          alt="stars2"
          className="absolute bottom-[-25px] left-[-10px] w-18 opacity-30 pointer-events-none"
        />
        <img
          src="/assets/stars3.jpg"
          alt="stars3"
          className="absolute bottom-[-20px] right-[-20px] w-16 opacity-35 pointer-events-none"
        />

        {/* 🌈 메인 텍스트 */}
        <h1 className="text-center text-xl font-semibold text-gray-700 mb-2 font-sans relative z-10">
          AI 악몽 해몽{' '}
          <span className="font-script text-3xl bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
            꿈다
          </span>
        </h1>

        <p className="text-center text-indigo-500 text-sm mb-5 relative z-10">
          어두운 꿈도 다시 보면 빛날 수 있어요. AI와 함께 의미를 찾아봐요.   
        </p>

        <textarea
          className="relative z-10 w-full h-40 p-3 bg-gray-100 border border-gray-300 text-sm text-gray-700 rounded-md resize-none"
          placeholder={`악몽의 내용을 자세히 설명해주세요...(예: 새벽에 모르는 사람이 흉기를 들고 저를 쫓아오다가, 결국 저는 절벽에서 떨어지는 꿈을 꿨어요..)`}
        />

        <button
          className="relative z-10 mt-6 w-full py-3 bg-gradient-to-r from-indigo-400 to-blue-500 text-white font-semibold text-sm rounded-[30px] hover:opacity-90 transition"
        >
          악몽 해몽하기
        </button>
      </div>
    </div>
  );
};

export default Main;

