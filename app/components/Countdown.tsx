"use client";

import { useState, useEffect } from 'react';

// 🎂 在这里配置生日日期 (不需要写年份，自动识别)
const BIRTHDAY_MONTH = 2; // 2月
const BIRTHDAY_DAY = 21;  // 21日
const NAME = "王涵";      // 寿星名字

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTime = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // 设定目标为今年的生日
      // 注意：JS月份是从0开始的，所以 2月是 1
      let targetDate = new Date(currentYear, BIRTHDAY_MONTH - 1, BIRTHDAY_DAY, 0, 0, 0);

      // 判断今天是不是生日 (月份和日期都对上了)
      if (now.getMonth() === (BIRTHDAY_MONTH - 1) && now.getDate() === BIRTHDAY_DAY) {
        setIsBirthdayToday(true);
        return; // 如果是今天，就不跑倒计时逻辑了
      } else {
        setIsBirthdayToday(false);
      }

      // 如果今年的生日已经过了，那就倒数明年的
      if (now.getTime() > targetDate.getTime()) {
        targetDate = new Date(currentYear + 1, BIRTHDAY_MONTH - 1, BIRTHDAY_DAY, 0, 0, 0);
      }

      const difference = targetDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // 立即执行一次
    calculateTime();
    
    // 每秒更新
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-1 animate-in fade-in zoom-in duration-500">
      
      {/* 这是一个粉色+金色的渐变边框，更有生日氛围 */}
      <div className="relative rounded-2xl overflow-hidden bg-black/60 backdrop-blur-md border border-pink-500/30 shadow-[0_0_40px_rgba(236,72,153,0.2)]">
        
        {/* 顶部流光装饰 */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-90"></div>

        {/* 漂浮的背景装饰 (气球) */}
        <div className="absolute top-2 right-4 text-4xl opacity-20 animate-bounce delay-700">🎈</div>
        <div className="absolute bottom-2 left-4 text-4xl opacity-20 animate-bounce">🎁</div>

        <div className="relative z-10 p-6 md:p-8 text-center">
            
            {/* --- 情况 A: 今天是生日！显示祝福界面 --- */}
            {isBirthdayToday ? (
              <div className="py-4 animate-pulse">
                <div className="text-6xl md:text-8xl mb-4">🎂</div>
                <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 drop-shadow-lg">
                  Happy Birthday!
                </h2>
                <p className="text-xl text-pink-200 mt-4 font-bold">
                  祝 {NAME} 生日快乐，永远发光！✨
                </p>
                <div className="mt-6 text-3xl flex justify-center gap-4">
                  <span>🎉</span><span>🥳</span><span>🕯️</span><span>👑</span>
                </div>
              </div>
            ) : (
              /* --- 情况 B: 平常日子，显示倒计时 --- */
              <>
                {/* 标题部分 */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-pink-500/10 text-pink-300 text-xs font-bold border border-pink-500/20 mb-3">
                        <span>🎂</span> BIRTHDAY COUNTDOWN
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                        距离 <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-200">{NAME}的生日</span> 还有
                    </h2>
                </div>

                {/* 数字网格 (粉色系) */}
                <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-2xl mx-auto">
                    {/* 天 */}
                    <div className="bg-white/5 rounded-xl p-2 md:p-4 border border-white/5 hover:border-pink-500/30 transition duration-300">
                        <div className="text-2xl md:text-5xl font-bold font-mono text-white">
                            {String(timeLeft.days).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs text-pink-300/70 uppercase mt-1 font-bold">Days</div>
                    </div>

                    {/* 时 */}
                    <div className="bg-white/5 rounded-xl p-2 md:p-4 border border-white/5 hover:border-pink-500/30 transition duration-300">
                        <div className="text-2xl md:text-5xl font-bold font-mono text-white">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs text-pink-300/70 uppercase mt-1 font-bold">Hours</div>
                    </div>

                    {/* 分 */}
                    <div className="bg-white/5 rounded-xl p-2 md:p-4 border border-white/5 hover:border-pink-500/30 transition duration-300">
                        <div className="text-2xl md:text-5xl font-bold font-mono text-white">
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs text-pink-300/70 uppercase mt-1 font-bold">Mins</div>
                    </div>

                    {/* 秒 (金色高亮) */}
                    <div className="bg-white/5 rounded-xl p-2 md:p-4 border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition"></div>
                        <div className="text-2xl md:text-5xl font-bold font-mono text-yellow-400">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs text-pink-300/70 uppercase mt-1 font-bold">Secs</div>
                    </div>
                </div>
                
                {/* 底部小装饰 */}
                <div className="mt-6 text-sm text-gray-400 flex items-center justify-center gap-2 opacity-60">
                   <span>🍰</span> 期待那一天，一起许个愿吧 <span>🕯️</span>
                </div>
              </>
            )}

        </div>
      </div>
    </div>
  );
}