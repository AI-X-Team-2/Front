import React, { useState } from 'react';
import axios from 'axios';
import Result from './Result';




const Main = () => {
  const [dream, setDream] = useState(''); // 꿈 입력값 저장
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [data, setData] = useState("")


  // 버튼 클릭 시 실행되는 함수
   const handleInterpret = async () => {
    if (!dream.trim()) {
      alert('꿈 내용을 입력해주세요!');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post('http://127.0.0.1:8088/interpret', {
        content: dream,
      });
      console.log(response)
      setData(response.data)



     
    } catch (error) {
      console.error('요청 실패:', error);
      alert('해몽 요청에 실패했습니다 😥');
      
    } finally {
      setLoading(false);
    }
  };
   if (data) {
    return <Result result={data} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-indigo-100 to-purple-200 flex items-center justify-center p-4">
      <div className="relative bg-white shadow-lg border border-gray-300 rounded-xl p-8 w-full max-w-lg overflow-hidden">

        {/* 🌌 흐릿한 배경 */}
        <img src="/assets/light.jpg" alt="light" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        {/* 🌙 달 */}
        <img src="/assets/moon.jpg" alt="moon" className="absolute top-[-40px] left-[-40px] w-24 opacity-90 pointer-events-none" />
        {/* ☁️ 구름 */}
        <img src="/assets/cloud1.jpg" alt="cloud1" className="absolute top-[-20px] right-[-40px] w-36 opacity-35 pointer-events-none" />
        <img src="/assets/cloud2.jpg" alt="cloud2" className="absolute bottom-[-30px] left-[-30px] w-40 opacity-30 pointer-events-none" />
        <img src="/assets/cloud3.jpg" alt="cloud3" className="absolute top-[50%] left-[-45px] w-36 opacity-25 pointer-events-none" />
        {/* 🌟 별 */}
        <img src="/assets/stars1.jpg" alt="stars1" className="absolute top-[-25px] right-[-25px] w-16 opacity-30 pointer-events-none" />
        <img src="/assets/stars2.jpg" alt="stars2" className="absolute bottom-[-25px] left-[-10px] w-18 opacity-30 pointer-events-none" />
        <img src="/assets/stars3.jpg" alt="stars3" className="absolute bottom-[-20px] right-[-20px] w-16 opacity-35 pointer-events-none" />

        {/* 🌈 텍스트 영역 */}
        <h1 className="text-center text-xl font-semibold text-gray-700 mb-2 font-sans relative z-10">
          AI 악몽 해몽{' '}
          <span className="font-script text-3xl bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
            꿈다
          </span>
        </h1>

        <p className="text-center text-indigo-500 text-sm mb-5 relative z-10">
          어두운 꿈도 다시 보면 빛날 수 있어요. AI와 함께 의미를 찾아봐요.
        </p>

        {/* ✅ 꿈 입력창 (값 저장) */}
        <textarea
          className="relative z-10 w-full h-40 p-3 bg-gray-100 border border-gray-300 text-sm text-gray-700 rounded-md resize-none"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder={`악몽의 내용을 자세히 설명해주세요... (예: 새벽에 모르는 사람이 흉기를 들고 쫓아오다가...)`}
        />

        {/* ✅ 버튼 클릭 → handleInterpret 실행 */}
        <button
          className="relative z-10 mt-6 w-full py-3 bg-gradient-to-r from-indigo-400 to-blue-500 text-white font-semibold text-sm rounded-[30px] hover:opacity-90 transition disabled:opacity-60"
          onClick={handleInterpret}
          disabled={loading}
        >
          {loading ? '해몽 중...' : '악몽 해몽하기'}
        </button>
      </div>


    </div>
  );
};

export default Main;
