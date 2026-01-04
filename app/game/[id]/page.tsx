"use client";

import { useState } from 'react'; // 👈 1. 引入 useState 用于控制弹窗
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// --- 📂 游戏数据库 ---
const GAME_DATABASE: Record<string, any> = {
  "detective": {
    title: "美女，请别影响我学习",
    subtitle: "沉浸式校园恋爱悬疑互动剧",
    cover: "/game/1.jpg", 
    description: "阴差阳错之下成为“女子大学唯一男生”的你，即将以第一视角开启一段甜蜜与欢笑交织的校园恋爱之旅！元气少女、温柔甜妹、俏皮洋妞、知性校医、傲娇学姐、酷飒太妹，各类美女的轮番攻势下，你将如何喊出“美女！请别影响我学习！”书写下属于你的女校传说！",
    tags: ["真人互动", "第一人称", "多结局", "校园恋爱"],
    screenshots: ["/game/1.png", "/game/2.png", "/game/3.png"]
  },
  "love-story": {
    title: "美女，请别影响我成仙",
    subtitle: "古风修仙 · 唯美邂逅",
    cover: "/game/2.jpg", 
    description: "修仙，还是羞仙？你，林凡，千年难遇的纯阳灵根拥有者，鹤幻宗唯一的男修，本该是修仙界的天选之子，直到你发现，真正的“渡劫”不是雷罚，而是和宗门小姐姐们的情有千千劫。 既要突破境界、御剑成仙；又要守护纯阳、把根留住！",
    tags: ["古风", "修仙", "高甜"],
    screenshots: ["/game/IMG_2745.jpg", "/game/IMG_2746.jpg", "/game/IMG_2747.jpg", "/game/IMG_2748.jpg", "/game/IMG_2750.jpg", "/game/IMG_2751.jpg", "/game/IMG_2752.jpg"]
  }
};

export default function GameDetail() {
  const params = useParams();
  const gameId = typeof params?.id === 'string' ? params.id : '';
  const data = GAME_DATABASE[gameId];
  
  // 👈 2. 定义一个状态，用来记录当前点击了哪张图 (null 代表没点)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 404 处理
  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-black text-gray-800 mb-4">404</h1>
        <Link href="/game" className="text-white border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition">返回游戏大厅</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- 1. 氛围背景层 --- */}
      <div className="fixed inset-0 z-0">
        <Image 
            src={data.cover} 
            alt="Background" 
            fill 
            className="object-cover blur-[80px] opacity-40 scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      </div>

      {/* --- 2. 内容层 --- */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        
        {/* 顶部导航 */}
        <div className="mb-12">
            <Link href="/game" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition group uppercase tracking-widest text-xs font-bold">
                <span className="w-8 h-px bg-gray-600 group-hover:bg-white transition"></span>
                返回
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* 左侧：悬浮海报 */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                    <Image 
                        src={data.cover} 
                        alt="Poster" 
                        fill 
                        className="object-cover group-hover:scale-105 transition duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg text-yellow-400 font-black text-xl border border-white/10">
                        {data.rating}
                    </div>
                </div>
            </div>

            {/* 右侧：详细信息 */}
            <div className="lg:col-span-8 space-y-8">
                <div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-tight">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-cyan-400 font-light italic">
                        {data.subtitle}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {data.tags.map((tag: string) => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition cursor-default text-gray-300">
                            {tag}
                        </span>
                    ))}
                    <span className="px-4 py-1.5 text-sm text-gray-500 border border-transparent">
                    </span>
                </div>

                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-lg leading-relaxed text-justify opacity-90">
                        {data.description}
                    </p>
                </div>

           

                {/* 剧照画廊 (点击可放大) */}
                <div className="pt-12">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-4">
                        In-Game Captures <div className="h-px flex-1 bg-white/10"></div>
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.screenshots.map((img: string, index: number) => (
                            <div 
                                key={index} 
                                // 👈 3. 添加点击事件：把当前图片路径存入 state
                                onClick={() => setSelectedImage(img)}
                                className="group relative aspect-video rounded-xl overflow-hidden border border-white/5 cursor-zoom-in bg-black/50"
                            >
                                <Image 
                                    src={img} 
                                    alt="Screenshot" 
                                    fill 
                                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
                                />
                                {/* 放大镜图标提示 */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition flex items-center justify-center">
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-3xl">🔍</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* --- 👈 4. 全屏放大查看器 (Lightbox Modal) --- */}
      {/* 只有当 selectedImage 不为空时才显示 */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)} // 点击任意地方关闭
        >
            {/* 关闭按钮提示 */}
            <div className="absolute top-6 right-6 text-white/50 text-sm border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition pointer-events-none">
                Click anywhere to close
            </div>

            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                <Image 
                    src={selectedImage} 
                    alt="Full View" 
                    fill 
                    className="object-contain drop-shadow-2xl" // 保持比例完整显示 2025 Release
                />
            </div>
        </div>
      )}

    </div>
  );
}