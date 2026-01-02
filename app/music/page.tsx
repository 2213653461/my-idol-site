import Link from 'next/link';
import Image from 'next/image'; // 👈 必须引入这个组件

// --- 🎵 这里配置你的歌单 ---
const PLAYLIST = [
  {
    title: "喜上眉梢",
    file: "/songs/1.flac",
    // 👇 新增：在这里指定封面图片的路径
    cover: "/songs/1.webp",
  },
  {
    title: "入梦一见",
    file: "/songs/2.mp3",
    // 👇 不同的歌可以用不同的封面
    cover: "/songs/3.webp",
  },
  // 如果你还没准备好图片，可以用一个临时的占位图
  // cover: "/placeholder.jpg", 
];

export default function Music() {
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

        {/* 标题 */}
        <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-4xl">🎵</span>
            <h1 className="text-4xl font-bold text-green-400">音乐作品 Music</h1>
        </div>
          
        {/* 播放列表容器 */}
        <div className="space-y-6">
            
            {PLAYLIST.map((song, index) => (
              <div 
                key={index} 
                className="bg-white/10 p-4 md:p-6 rounded-xl border border-white/5 hover:border-green-400/50 transition flex flex-col md:flex-row items-center gap-4 md:gap-6"
              >
                {/* 👇 左侧：专辑封面图 (修改了这里) */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg shrink-0 animate-spin-slow border-2 border-white/10" style={{ animationDuration: '20s' }}>
                  <Image 
                    src={song.cover}   // 读取配置里的图片路径
                    alt={song.title}   // 图片描述
                    fill               // 让图片充满圆形容器
                    className="object-cover" // 保持比例，裁切掉多余部分
                  />
                  {/* 中间的小黑点，模拟黑胶唱片 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full z-10 border border-white/20"></div>
                </div>

                {/* 中间：信息 */}
                <div className="flex-1 text-center md:text-left truncate w-full">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <span className="bg-green-500 text-xs px-2 py-0.5 rounded text-black font-bold shrink-0">

                    </span>
                    <h3 className="text-xl font-bold truncate">{song.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm truncate">本地高清音质</p>
                </div>
                
                {/* 右侧：播放器 */}
                <div className="w-full md:w-1/2 shrink-0">
                  <audio 
                    controls 
                    className="w-full h-10 rounded-lg block text-sm"
                    src={song.file} 
                  >
                    您的浏览器不支持音频播放
                  </audio>
                </div>
              </div>
            ))}

        </div>

        <div className="mt-12 text-center text-gray-500 text-xs">
           声明：所有音频仅供粉丝交流试听
        </div>

      </div>
    </div>
  );
}