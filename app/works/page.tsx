import Link from 'next/link';

export default function Movies() {
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

        <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-4xl">🎬</span>
            <h1 className="text-4xl font-bold text-yellow-400">影视剧 TV & Movies</h1>
        </div>

        <div className="space-y-8">
            {/* 影视剧条目 1 */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                 {/* 封面图占位 */}
                 <div className="w-full md:w-40 h-56 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500 text-center p-2">
                    在这里放海报图片
                 </div>
                 
                 <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-yellow-600 text-xs px-2 py-1 rounded text-white font-bold">电视剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">豆瓣 8.0</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《剧名：霸道总裁爱上我》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      剧情简介：这里可以写很长一段话。讲述了她在繁华都市中奋斗的故事，演技炸裂，哭戏感人...
                    </p>
                    <a href="#" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        观看预告片 ▶
                    </a>
                 </div>
              </div>
            </div>

            {/* 影视剧条目 2 */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                 <div className="w-full md:w-40 h-56 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500 text-center p-2">
                    封面图
                 </div>
                 <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-purple-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">客串</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《剧名：回到古代当大侠》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      这是一部古装轻喜剧，虽然出场不多，但是造型非常惊艳，给观众留下了深刻印象...
                    </p>
                 </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}