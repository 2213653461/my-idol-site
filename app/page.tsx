import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // --- 1. 最外层容器 ---
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center relative flex flex-col items-center p-6 overflow-x-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* 黑色半透明遮罩层 */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* ================== 顶部导航栏 ================== */}
      <nav className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 mb-8 md:mb-16 relative z-10 border-b border-white/10 animate-in slide-in-from-top duration-500">
         <h1 className="text-3xl font-bold text-pink-500 drop-shadow-lg mb-4 md:mb-0">
           王涵大朋友
         </h1>

         <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-gray-300">
           <Link href="/gallery" className="hover:text-pink-400 transition">壁纸</Link>
           <Link href="/clips" className="hover:text-blue-400 transition">切片</Link>
           <Link href="/music" className="hover:text-green-400 transition">音乐</Link>
           <Link href="/works" className="hover:text-yellow-400 transition">影视</Link>
            <Link href="/offline" className="hover:text-yellow-400 transition">一日店长</Link>
             <Link href="/game" className="hover:text-yellow-400 transition">影游</Link>
         </div>
      </nav>


      {/* ================== 主要内容区 ================== */}
      <main className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10 my-auto pb-12">
        
        {/* --- 👈 左侧区域 --- */}
        {/* items-start 让内容左对齐，md:flex-row 让内部布局更灵活 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 animate-in slide-in-from-left duration-700 text-white h-full">
          
          {/* 1. 头像 */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-pink-500/30 p-2 shadow-2xl shadow-pink-500/20 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image 
                src="/IMG_2699.PNG" 
                alt="Avatar" 
                fill 
                className="object-cover hover:scale-110 transition duration-700"
                priority
              />
            </div>
          </div>

          {/* 2. 名字与介绍 */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              欢迎来到<br/>
              <span className="text-pink-500">王涵的专属星球</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              这里是关于她的一切。<br/>
              “追逐光，成为光。”<br/>
            </p>
          </div>
{/* 3. 社交媒体按钮栏 (迷你胶囊 - 2列左对齐布局) */}
          {/* w-full max-w-[220px]: 限制整体宽度，保证胶囊小巧 */}
          {/* md:mx-0 mx-auto: 电脑端靠左，手机端居中 */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-[220px] md:mx-0 mx-auto pt-4">
            
            {/* 1. Weibo */}
            <a 
              href="https://m.weibo.cn/u/2949722457?t=0&luicode=10000011&lfid=100103type%3D3%26q%3D%E7%8E%8B%E6%B6%B5%26t%3D&launchid=10000360-page_H5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-1.5 bg-white/5 hover:bg-[#E6162D] border border-white/10 hover:border-[#E6162D] rounded-full transition-all duration-300 text-xs text-gray-300 hover:text-white backdrop-blur-sm"
            >
              微博
            </a>
            
            {/* 2. BiliBili */}
            <a 
              href="https://space.bilibili.com/382211078?spm_id_from=333.337.0.0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-1.5 bg-white/5 hover:bg-[#FB7299] border border-white/10 hover:border-[#FB7299] rounded-full transition-all duration-300 text-xs text-gray-300 hover:text-white backdrop-blur-sm"
            >
              Bilibili
            </a>

            {/* 3. TikTok */}
            <a 
              href="https://www.douyin.com/user/MS4wLjABAAAALFdBYwOJ_j1XRBnO_qbxPfcDl2OMKGcACPIZ4Glpp1k?from_tab_name=main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-1.5 bg-white/5 hover:bg-black border border-white/10 hover:border-white rounded-full transition-all duration-300 text-xs text-gray-300 hover:text-white backdrop-blur-sm"
            >
              抖音
            </a>

            {/* 4. RED */}
            <a 
              href="https://www.xiaohongshu.com/user/profile/5a1ff08e11be102c3ac9183e?xsec_token=ABNUj9-YoKGfK63kWbFAOzMw1eGb79_PilmE248GzVJTg%3D&xsec_source=pc_search" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-3 py-1.5 bg-white/5 hover:bg-[#FF2442] border border-white/10 hover:border-[#FF2442] rounded-full transition-all duration-300 text-xs text-gray-300 hover:text-white backdrop-blur-sm"
            >
              小红书
            </a>
            
          </div>
        </div>


        {/* --- 👉 右侧区域：功能入口 --- */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in slide-in-from-right duration-700 delay-100 text-white">
          
          <Link href="/gallery" className="group relative h-44 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-pink-500/60 transition shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <span className="text-5xl mb-3 group-hover:scale-110 transition group-hover:-translate-y-1">✨</span>
              <h3 className="text-xl font-bold">美图画廊</h3>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-pink-300 transition">精选高清写真</p>
            </div>
          </Link>

          <Link href="/clips" className="group relative h-44 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/60 transition shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <span className="text-5xl mb-3 group-hover:scale-110 transition group-hover:-translate-y-1">🎥</span>
              <h3 className="text-xl font-bold">直播切片</h3>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-blue-300 transition">名场面回放</p>
            </div>
          </Link>

          <Link href="/music" className="group relative h-44 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-green-500/60 transition shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <span className="text-5xl mb-3 group-hover:scale-110 transition group-hover:-translate-y-1">🎵</span>
              <h3 className="text-xl font-bold">音乐作品</h3>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-green-300 transition">单曲 & Cover</p>
            </div>
          </Link>

          <Link href="/works" className="group relative h-44 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-yellow-500/60 transition shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <span className="text-5xl mb-3 group-hover:scale-110 transition group-hover:-translate-y-1">🎬</span>
              <h3 className="text-xl font-bold">影视</h3>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-yellow-300 transition">参演作品集</p>
            </div>
          </Link>

          {/* 👇 新增模块 5: 一日店长 (紫色系) */}
          <Link href="/offline" className="group relative h-40 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-purple-500/60 transition shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <span className="text-4xl mb-2 group-hover:scale-110 transition group-hover:-translate-y-1">🏪</span>
              <h3 className="text-xl font-bold">一日店长</h3>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-purple-300 transition">线下活动 Vlog</p>
            </div>
          </Link>

          {/* 👇 新增模块 6: 互动影游 (青色系) */}
          <Link href="/game" className="group relative h-40 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/60 transition shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <span className="text-4xl mb-2 group-hover:scale-110 transition group-hover:-translate-y-1">🎮</span>
              <h3 className="text-xl font-bold">互动影游</h3>
              <p className="text-xs text-gray-400 mt-2 group-hover:text-cyan-300 transition">沉浸式剧情</p>
            </div>
          </Link>

        </div>

      </main>
    </div>
  );
}