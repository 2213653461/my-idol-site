import Link from 'next/link';
import Image from 'next/image';

// --- 🎮 这里配置你的游戏数据 ---
const GAMES = [
  {
    id: "detective", // 这是跳转 ID，对应 src/app/game/[id]/page.tsx
    title: "美女请别影响我学习", // 你的截图里的游戏名
    subtitle: "真人互动影游",
    cover: "/game/image.png", // ⚠️ 请确保 public/game/ 文件夹里有 1.jpg
    tag: "校园恋爱"
  },
  {
    id: "love-story",
    title: "美女请别影响我成仙",
    subtitle: "真人互动影游",
    cover: "/game/2.jpg", // ⚠️ 请确保 public/game/ 文件夹里有 2.jpg
    tag: "修仙"
  },
  // 可以复制上面的 {...} 添加更多游戏
];

export default function GameList() {
  return (
    <div className="min-h-screen bg-black/50 text-white p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* --- 1. 顶部导航 --- */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition group">
            <span className="mr-2 group-hover:-translate-x-1 transition">←</span> 
            返回首页
          </Link>
        </div>

        {/* --- 2. 标题区 --- */}
        <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-4xl">🎮</span>
            <h1 className="text-4xl font-bold text-cyan-400">互动影游 Interactive</h1>
        </div>

        {/* --- 3. 游戏封面网格 --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {GAMES.map((game) => (
            <Link key={game.id} href={`/game/${game.id}`} className="group block">
              {/* 卡片容器：毛玻璃风格 */}
              <div className="relative aspect-[3/4] bg-white/5 rounded-xl overflow-hidden border border-white/10 group-hover:border-cyan-400/60 transition-all duration-300 shadow-xl group-hover:-translate-y-2">
                
                {/* 封面图区域 (已修复：现在会显示图片) */}
                <div className="relative w-full h-full">
                   {/* 👇 这里的 Image 组件已经开启 */}
                   <Image 
                     src={game.cover} 
                     alt={game.title} 
                     fill 
                     className="object-cover group-hover:scale-110 transition duration-700"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   /> 
                   
                   {/* 遮罩层：底部变黑，为了显示文字 */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* 底部文字信息 */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="inline-block px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/20 mb-2 backdrop-blur-sm">
                    {game.tag}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-cyan-300 transition truncate">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 truncate">
                    {game.subtitle}
                  </p>
                </div>

                {/* 悬浮播放按钮图标 */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20 backdrop-blur-[2px]">
                   <div className="w-14 h-14 rounded-full bg-cyan-500 text-black flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-75 group-hover:scale-100 transition">
                      ▶
                   </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}