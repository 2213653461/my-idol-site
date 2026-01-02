"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// --- 📂 每一个游戏的详细档案 ---
// 这里的 key (比如 'detective') 必须和列表页里的 id 一致！
const GAME_DATABASE: Record<string, any> = {
  
  // 游戏 1: 侦探
  "detective": {
    title: "美女，  请别影响我学习",
    desc: "如果你必须在真相和挚爱之间做出选择，你会怎么做？在这部互动影像作品中，你将扮演一名意外卷入案件的私家侦探...",
    // 你的 B站 视频 iframe 链接 (去B站复制嵌入代码)
    videoUrl: "//player.bilibili.com/player.html?bvid=BV1Av4GMDE3W&high_quality=1", 
    // 游戏截图/剧照
    screenshots: [
        "/game/s1.jpg", 
        "/game/s2.jpg", 
        "/game/s3.jpg"
    ]
  },

  // 游戏 2: 恋爱
  "love-story": {
    title: "美女，请别影响我成仙",
    desc: "原本是契约恋爱，却假戏真做？全动态真人恋爱模拟，多重结局等你解锁。",
    videoUrl: "//player.bilibili.com/player.html?bvid=BV13BB4BdEHS&high_quality=1",
    screenshots: [
        "/game/love1.jpg", 
        "/game/love2.jpg"
    ]
  }

  // ... 可以继续添加
};

export default function GameDetail() {
  const params = useParams(); // 获取网址上的 id
  
  // 确保 params.id 是字符串
  const gameId = typeof params?.id === 'string' ? params.id : '';
  const data = GAME_DATABASE[gameId];

  // 如果找不到这个游戏的数据
  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-500 mb-4">404 Game Not Found</h1>
        <Link href="/game" className="text-cyan-400 hover:underline">返回游戏列表</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      
      {/* 顶部大图/视频区 */}
      <div className="relative w-full aspect-video md:h-[60vh] bg-black">
        <iframe 
            src={data.videoUrl} 
            className="w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen"
            allowFullScreen
        ></iframe>
        
        {/* 返回按钮 (悬浮) */}
        <Link href="/game" className="absolute top-6 left-6 z-10 bg-black/50 hover:bg-cyan-600 text-white px-4 py-2 rounded-full backdrop-blur-md transition flex items-center gap-2 border border-white/10">
           <span>←</span> 退出游戏
        </Link>
      </div>

      {/* 详细内容区 */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* 左侧：介绍 */}
            <div className="md:col-span-2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">{data.title}</h1>
                <div className="h-1 w-20 bg-cyan-600"></div>
                <p className="text-lg text-gray-300 leading-relaxed">
                    {data.desc}
                </p>

                <div className="pt-6">
                     <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-3 rounded text-lg transition shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                        立即开始体验
                     </button>
                </div>
            </div>

            {/* 右侧：精彩剧照 */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold border-l-4 border-cyan-500 pl-3">精彩剧照</h3>
                <div className="grid grid-cols-1 gap-4">
                    {data.screenshots.map((img: string, index: number) => (
                        <div key={index} className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden border border-white/10 hover:border-cyan-400 transition cursor-pointer">
                            {/* 记得在 public/game 放图片，否则这里是黑的 */}
                            {/* <Image src={img} alt="Screenshot" fill className="object-cover" /> */}
                            <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                                剧照 {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}