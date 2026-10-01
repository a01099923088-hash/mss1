import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const goToPage = (pageNum: number) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8 font-sans" style={{ fontFamily: "'Malgun Gothic', '맑은 고딕', sans-serif" }}>
      <div className="max-w-4xl mx-auto">
        
        {currentPage === 1 && (
          <section className="bg-gray-900 border-4 border-yellow-400 rounded-2xl p-6 md:p-10 my-4 shadow-2xl">
            <header className="flex justify-between items-center border-b-2 border-gray-700 pb-6 mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-yellow-400">💛 내몸사랑</h1>
              <span className="text-xl md:text-2xl font-bold bg-gray-800 text-white px-4 py-2 rounded-lg">☎️ 전화 문의: 010-0000-0000</span>
            </header>

            <main className="text-center my-10">
              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
                "집에서 TV와 컴퓨터로 편하게 시작하는<br />
                <span className="text-yellow-400">뇌 · 신체 헬스케어</span>"
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 font-bold mb-10 leading-relaxed">
                따라 하세요, 몸과 마음이 건강해집니다.
              </p>

              <button 
                onClick={toggleVideo} 
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-2xl md:text-3xl py-6 px-8 rounded-2xl mb-6 shadow-lg border-4 border-white transition transform active:scale-95 cursor-pointer"
              >
                ▶ 호흡 운동 부터 5분 미리보기 (클릭)
              </button>

              {isVideoVisible && (
                <div className="bg-black p-6 rounded-2xl border-4 border-yellow-400 mb-8">
                  <p className="text-yellow-400 text-2xl font-bold mb-4">🎬 5분 호흡 운동 미리보기 (복식 호흡 따라 하기)</p>
                  <div className="bg-gray-800 h-48 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-500">
                    <p className="text-3xl font-bold text-green-400 animate-pulse">"숨을 천천히 들이마시고... 들이쉬고..."</p>
                  </div>
                </div>
              )}

              <button 
                onClick={() => goToPage(2)} 
                className="w-full bg-green-500 hover:bg-green-400 text-white font-black text-3xl md:text-4xl py-8 px-8 rounded-2xl shadow-xl border-4 border-white mt-4 transition transform active:scale-95 cursor-pointer"
              >
                [ 무료 1회 체험 신청하기 ➔ ]
              </button>
            </main>
          </section>
        )}

        {currentPage === 2 && (
          <section className="bg-gray-900 border-4 border-green-400 rounded-2xl p-6 md:p-10 my-4 shadow-2xl">
            <header className="border-b-2 border-gray-700 pb-6 mb-8 flex justify-between items-center flex-wrap gap-4">
              <button 
                type="button"
                onClick={() => goToPage(1)} 
                className="bg-gray-800 hover:bg-gray-700 text-yellow-300 font-black text-xl md:text-2xl py-3 px-6 rounded-xl border-2 border-yellow-400 transition transform active:scale-95 cursor-pointer"
              >
                ◀ 이전 단계 (처음으로)
              </button>
              <span className="text-xl md:text-2xl font-bold bg-gray-800 text-white px-4 py-2 rounded-lg">☎️ 전화 문의: 010-0000-0000</span>
            </header>

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-green-400 leading-snug">
                "딱 10초만 입력하면 전문 운동 프로그램<br />1회권을 무료로 드립니다!"
              </h2>
            </div>

            <form 
              onSubmit={(e) => { e.preventDefault(); goToPage(3); }} 
              className="space-y-8 max-w-2xl mx-auto"
            >
              <div>
                <label className="block text-2xl md:text-3xl font-black mb-3 text-yellow-300">1. 성함 (이름)</label>
                <input 
                  type="text" 
                  placeholder="예: 홍길동" 
                  required 
                  className="w-full text-2xl md:text-3xl p-5 rounded-xl bg-gray-800 border-4 border-gray-600 text-white focus:border-yellow-400 focus:outline-none" 
                />
              </div>

              <div>
                <label className="block text-2xl md:text-3xl font-black mb-3 text-yellow-300">2. 연세 (나이)</label>
                <input 
                  type="number" 
                  placeholder="예: 68" 
                  required 
                  className="w-full text-2xl md:text-3xl p-5 rounded-xl bg-gray-800 border-4 border-gray-600 text-white focus:border-yellow-400 focus:outline-none" 
                />
              </div>

              <div>
                <label className="block text-2xl md:text-3xl font-black mb-3 text-yellow-300">3. 전화번호</label>
                <input 
                  type="tel" 
                  placeholder="예: 010-1234-5678" 
                  required 
                  className="w-full text-2xl md:text-3xl p-5 rounded-xl bg-gray-800 border-4 border-gray-600 text-white focus:border-yellow-400 focus:outline-none" 
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  type="button" 
                  onClick={() => goToPage(1)} 
                  className="sm:w-1/3 bg-gray-700 hover:bg-gray-600 text-white font-black text-2xl md:text-3xl py-6 px-6 rounded-2xl border-4 border-gray-500 transition transform active:scale-95 cursor-pointer text-center"
                >
                  ◀ 이전 단계
                </button>
                <button 
                  type="submit" 
                  className="sm:w-2/3 bg-green-500 hover:bg-green-400 text-white font-black text-3xl md:text-4xl py-6 px-8 rounded-2xl shadow-xl border-4 border-white transition transform active:scale-95 cursor-pointer"
                >
                  [ 1회 무료 체험 시작하기 ➔ ]
                </button>
              </div>
            </form>
          </section>
        )}

        {currentPage === 3 && (
          <section className="bg-gray-900 border-4 border-yellow-400 rounded-2xl p-6 md:p-10 my-4 shadow-2xl">
            <header className="flex justify-between items-center border-b-2 border-gray-700 pb-6 mb-8 flex-wrap gap-4">
              <button 
                type="button"
                onClick={() => goToPage(2)} 
                className="bg-gray-800 hover:bg-gray-700 text-yellow-300 font-black text-xl md:text-2xl py-3 px-6 rounded-xl border-2 border-yellow-400 transition transform active:scale-95 cursor-pointer"
              >
                ◀ 이전 단계 (신청 정보)
              </button>
              <button 
                type="button"
                onClick={() => goToPage(1)} 
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold text-lg md:text-xl py-3 px-5 rounded-xl border-2 border-gray-600 transition transform active:scale-95 cursor-pointer"
              >
                🏠 처음으로
              </button>
            </header>
            <div className="mb-10 text-center">
              <button 
                onClick={() => alert('🧘‍♂️ 마음을 편안히 하시고 깊게 숨을 들이마시고 쉬어주세요. 본격 복식 호흡 운동을 시작합니다.')} 
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black text-3xl md:text-4xl py-8 px-6 rounded-2xl border-4 border-white shadow-2xl transition transform active:scale-95 cursor-pointer"
              >
                🧘‍♂️ 오늘부터 내몸사랑 하기 (클릭)
              </button>
              <p className="text-xl md:text-2xl text-gray-300 font-bold mt-4">▲ 위 버튼을 누르면 호흡 부터 운동이 시작됩니다.</p>
            </div>

            <hr className="border-2 border-gray-700 my-10" />

            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">💪 나에게 맞는 운동 시간 신청하기</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-800 border-4 border-gray-600 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-yellow-300">■ 20분 플랜 (기초 관절 & 호흡)</h4>
                    <p className="text-xl text-gray-300 font-bold mt-2">관절에 무리 없는 부드러운 스트레칭 코스</p>
                  </div>
                  <button 
                    onClick={() => alert('20분 운동 플랜이 선택되었습니다.')} 
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-2xl py-4 px-8 rounded-xl border-2 border-white cursor-pointer"
                  >
                    선택하기
                  </button>
                </div>

                <div className="bg-gray-800 border-4 border-gray-600 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-yellow-300">■ 30분 플랜 (신체 강화 & 인지 퀴즈)</h4>
                    <p className="text-xl text-gray-300 font-bold mt-2">근육 강화와 재미있는 뇌 운동을 동시에 즐기는 코스</p>
                  </div>
                  <button 
                    onClick={() => alert('30분 운동 플랜이 선택되었습니다.')} 
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-2xl py-4 px-8 rounded-xl border-2 border-white cursor-pointer"
                  >
                    선택하기
                  </button>
                </div>

                <div className="bg-gray-800 border-4 border-gray-600 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-yellow-300">■ 40분 플랜 (전신 듀얼 심리운동)</h4>
                    <p className="text-xl text-gray-300 font-bold mt-2">전신 운동과 정서적 안정을 돕는 프리미엄 종합 코스</p>
                  </div>
                  <button 
                    onClick={() => alert('40분 운동 플랜이 선택되었습니다.')} 
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black text-2xl py-4 px-8 rounded-xl border-2 border-white cursor-pointer"
                  >
                    선택하기
                  </button>
                </div>
              </div>
            </div>

            <hr className="border-2 border-gray-700 my-10" />

            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">🍱 1주 영양 맞춤 식단 신청</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 border-4 border-green-500 rounded-2xl p-6 text-center">
                  <h4 className="text-3xl font-black text-green-400 mb-3">옵션 A: 당뇨 관리 식단</h4>
                  <p className="text-xl text-gray-300 font-bold mb-6">저당 · 저염 · 혈당 조절에 특화된 영양 도시락</p>
                  <button 
                    onClick={() => alert('1주 당뇨 관리 식단 주문 창으로 이동합니다.')} 
                    className="w-full bg-green-500 hover:bg-green-400 text-white font-black text-lg sm:text-xl py-4 px-3 rounded-xl border-2 border-white cursor-pointer whitespace-nowrap transition transform active:scale-95 shadow-md"
                  >
                    [ 1주 당뇨식단 주문하기 ]
                  </button>
                </div>

                <div className="bg-gray-800 border-4 border-orange-500 rounded-2xl p-6 text-center">
                  <h4 className="text-3xl font-black text-orange-400 mb-3">옵션 B: 일반 건강 식단</h4>
                  <p className="text-xl text-gray-300 font-bold mb-6">소화가 잘 되고 고단백 영양이 골고루 갖춰진 식단</p>
                  <button 
                    onClick={() => alert('1주 일반 건강 식단 주문 창으로 이동합니다.')} 
                    className="w-full bg-orange-500 hover:bg-orange-400 text-white font-black text-lg sm:text-xl py-4 px-3 rounded-xl border-2 border-white cursor-pointer whitespace-nowrap transition transform active:scale-95 shadow-md"
                  >
                    [ 1주 일반식단 주문하기 ]
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center border-t-2 border-gray-700 pt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                type="button" 
                onClick={() => goToPage(2)} 
                className="bg-gray-800 hover:bg-gray-700 text-yellow-300 font-black text-xl sm:text-2xl py-4 sm:py-5 px-6 sm:px-8 rounded-2xl border-4 border-yellow-400 cursor-pointer transition transform active:scale-95 shadow-lg whitespace-nowrap"
              >
                ◀ 이전 단계 (신청 정보 수정)
              </button>
              <button 
                type="button" 
                onClick={() => goToPage(1)} 
                className="bg-gray-700 hover:bg-gray-600 text-white font-black text-xl sm:text-2xl py-4 sm:py-5 px-6 sm:px-8 rounded-2xl border-4 border-gray-500 cursor-pointer transition transform active:scale-95 shadow-lg whitespace-nowrap"
              >
                🏠 처음 메인 화면으로
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
