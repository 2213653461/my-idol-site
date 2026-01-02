import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen text-white font-sans">
      {/* 导航栏 */}
      <nav className="p-6 flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-pink-500">王涵大朋友的小屋</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-pink-500">首页</Link>
          <Link href="/gallery" className="hover:text-pink-500">照片&直播切片</Link>
        </div>
      </nav>

      {/* 核心展示区 (Hero Section) */}
      <main className="flex flex-col items-center mt-10 px-4">  
        {/* 头像圆图 */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
          <Image 
            src="/hero.jpg" 
            alt="头像" 
            fill 
            className="object-cover"
          />
        </div>
        
        <h2 className="text-4xl font-bold mb-4">我是 [王涵大朋友]</h2>
        <p className="text-xl text-white max-w-2xl text-center leading-relaxed">
          这里写她的详细介绍，比如：<br/>
          “全网最可爱的博主，喜欢唱歌、打游戏。”<br/>
          直播时间：不定时直播
        </p>

        {/* 社交媒体按钮 */}
        <div className="mt-8 flex gap-4">
          <a href="https://space.bilibili.com/382211078?spm_id_from=333.1387.follow.user_card.click" target="_blank" className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition">
            Bilibili
          </a>
          <a href="https://www.douyin.com/user/MS4wLjABAAAALFdBYwOJ_j1XRBnO_qbxPfcDl2OMKGcACPIZ4Glpp1k?from_tab_name=main" target="_blank" className="px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition">
            抖音
          </a>
          {/* 小红书 (新增) */}
          <a 
            href="https://www.xiaohongshu.com/user/profile/5a1ff08e11be102c3ac9183e?xsec_token=ABNUj9-YoKGfK63kWbFAOzMw1eGb79_PilmE248GzVJTg%3D&xsec_source=pc_search" 
            target="_blank" 
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            小红书
          </a>
        </div>
      </main>
    </div>
  );
}
