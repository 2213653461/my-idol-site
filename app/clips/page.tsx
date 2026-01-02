import Link from 'next/link';

export default function Clips() {
  return (
    <div className="min-h-screen bg-black/50 text-white p-6 pt-24">
      <div className="max-w-4xl mx-auto">

        {/* 返回按钮 */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition group">
            <span className="mr-2 group-hover:-translate-x-1 transition">←</span> 
            返回首页
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center text-blue-400 drop-shadow-lg">
          🎥 直播名场面
        </h1>

        <div className="grid grid-cols-1 gap-8">
            {/* 视频卡片 1 */}
            <div className="bg-black/60 p-4 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/50 transition">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
                    {/* 替换你的 B站 iframe */}
                    <iframe 
                      src="//player.bilibili.com/player.html?bvid=BV13BB4BdEHS&high_quality=1"
                        className="w-full h-full" 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true}>
                    </iframe>
                </div>
                <div className="mt-4">
                    <span className="bg-blue-600 text-xs px-2 py-1 rounded text-white mr-2">12月22日</span>
                    <span className="font-bold text-lg">王涵：如果马倩倩是我老公的话.....</span>
                    <p className="text-gray-400 text-sm mt-1">2025-12-22     直播回放</p>
                </div>
            </div>
        </div>
        {/* --- 视频网格结束 --- */}

        {/* --- 新增：底部声明区域 --- */}
        <div className="mt-16 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500">
                声明：所有直播回放均由雪颜开授权提供，如有侵权或冒犯，请联系我
            </p>
        </div>
        {/* ------------------------ */}
      </div>
    </div>
  );
}