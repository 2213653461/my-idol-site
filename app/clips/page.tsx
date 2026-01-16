import Link from 'next/link';
import Image from 'next/image';

// --- 🎬 直播切片数据 ---
const CLIPS_DATA = [
   {
    id: 1,
    bvid: "BV1zWrfBKEzr",
    cover: "/clips/2.png", 
    date: "1月15日",
    title: "出门拍照~长发回归",
    desc: "2026-1-15 直播回放",
    tag: "出门拍摄"
  },
   {
    id: 2,
    bvid: "BV18a62BEEpM",
    cover: "/clips/1.png", 
    date: "1月10日",
    title: "短发涵涵！新年第一场直播",
    desc: "2026-1-10 直播回放",
    tag: "出门拍摄"
  },
 {
    id: 3,
    bvid: "BV13BB4BdEHS",
    cover: "/clips/3.png", 
    date: "12月22日",
    title: "王涵：如果马倩倩是我老公的话.....",
    desc: "2025-12-22 直播回放 · 爆笑名场面",
    tag: "连线"
  },

];

export default function Clips() {
  return (
    <div className="min-h-screen bg-black/50 text-white p-6 pt-24">
      <div className="max-w-6xl mx-auto">

        {/* 返回按钮 */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition group">
            <span className="mr-2 group-hover:-translate-x-1 transition">←</span> 
            返回首页
          </Link>
        </div>

        {/* 标题 */}
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-400 drop-shadow-lg flex items-center justify-center gap-3">
          <span>🎥</span> 直播名场面
        </h1>

        {/* --- 视频网格 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIPS_DATA.map((item) => (
            // 👇 这里把整个卡片变成了一个 Link，点击跳转到 B 站
            <Link 
                key={item.id} 
                href={`https://www.bilibili.com/video/${item.bvid}`} 
                target="_blank" // 在新标签页打开
                className="group bg-black/60 p-4 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 block"
            >
                
                {/* 封面图容器 (替代了原来的 iframe) */}
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative shadow-lg group-hover:shadow-blue-500/20 transition">
                    
                    {/* 图片 */}
                    <Image 
                        src={item.cover} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                    />

                    {/* 悬浮播放按钮图标 (增加点击欲望) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-blue-500/80 text-white flex items-center justify-center pl-1 backdrop-blur-sm group-hover:scale-110 transition shadow-lg shadow-blue-500/30">
                            ▶
                        </div>
                    </div>

                    {/* B站小角标 */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded border border-white/10">
                        Bilibili
                    </div>
                </div>

                {/* 底部信息 */}
                <div className="mt-5">
                    <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center gap-2">
                            <span className="bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs px-2 py-0.5 rounded font-bold">
                                {item.tag}
                            </span>
                            <span className="text-gray-400 text-xs px-2 py-0.5 rounded bg-white/5">
                                {item.date}
                            </span>
                         </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-300 transition truncate">
                        {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        {item.desc}
                    </p>
                </div>
            </Link>
          ))}
        </div>
        
        {/* --- 底部声明 --- */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500">
                声明：所有直播回放均由雪颜开授权提供，如有侵权或冒犯，请联系我
            </p>
        </div>

      </div>
    </div>
  );
}