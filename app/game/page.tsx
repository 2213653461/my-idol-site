import Link from 'next/link';
import Image from 'next/image';

// --- 🎮 这里配置你的游戏数据 ---
const GAMES = [
  {
    id: "detective", 
    title: "美女请别影响我学习", 
    subtitle: "真人互动影游",
    cover: "/game/image.png", 
    tag: "校园恋爱"
  },
  {
    id: "love-story",
    title: "美女请别影响我成仙",
    subtitle: "真人互动影游",
    cover: "/game/2.jpg", 
    tag: "修仙"
  },
    {
    id: "wandan2",
    title: "完蛋！我被美女包围了",
    subtitle: "真人互动影游",
    cover: "/game/4.jpg", 
    tag: "古装"
  },
  // 可以复制上面的 {...} 添加更多游戏
];

export default function GameList() {
  return (
    <div className="min-h-screen bg-black/50 text-white p-6 pt-24">
      {/* 👇 修改 1：max-w-6xl 改为 max-w-5xl，整体容器变窄一点，更聚拢 */}
      <div className="max-w-5xl mx-auto">
        
        {/* --- 1. 顶部导航 --- */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition group">
            <span className="mr-2 group-hover:-translate-x-1 transition">←</span> 
            返回首页
          </Link>
        </div>

        {/* --- 2. 标题区 --- */}
        <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-3xl">🎮</span>
            <h1 className="text-3xl font-bold text-cyan-400">互动影游</h1>
        </div>

        {/* --- 3. 游戏封面网格 --- */}
        {/* 👇 修改 2：核心改动在这里 */}
        {/* grid-cols-2: 手机上一行显示 2 个 (原来是1个，现在变小了) */}
        {/* md:grid-cols-4: 电脑上一行显示 4 个 (原来是3个，现在变小了) */}
        {/* gap-4: 间距变小 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GAMES.map((game) => (
            <Link key={game.id} href={`/game/${game.id}`} className="group block">
              {/* 卡片容器 */}
              <div className="relative aspect-[3/4] bg-white/5 rounded-lg overflow-hidden border border-white/10 group-hover:border-cyan-400/60 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                
                {/* 封面图区域 */}
                <div className="relative w-full h-full">
                   <Image 
                      src={game.cover} 
                      alt={game.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition duration-700"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    /> 
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                {/* 底部文字信息 (字号调小了一点，适配小卡片) */}
                <div className="absolute bottom-0 left-0 w-full p-3">
                  <span className="inline-block px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-500/20 mb-1 backdrop-blur-sm">
                    {game.tag}
                  </span>
                  {/* truncate 保证名字太长会自动省略 */}
                  <h3 className="text-sm md:text-base font-bold group-hover:text-cyan-300 transition truncate">
                    {game.title}
                  </h3>
                </div>

                {/* 悬浮播放按钮图标 (缩小尺寸适配) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20 backdrop-blur-[1px]">
                   <div className="w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center pl-0.5 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-75 group-hover:scale-100 transition">
                      <span className="text-xs">▶</span>
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