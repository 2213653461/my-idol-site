import Link from 'next/link';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-pink-500 mb-6 inline-block">← 返回首页</Link>
        <h1 className="text-3xl font-bold mb-8">精彩瞬间 & 直播切片</h1>

        {/* 图片区域 */}
        <h2 className="text-xl font-bold mb-4 border-l-4 border-pink-500 pl-3">美图画廊</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
           {/* 图片1 */}
           <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
             <Image src="/photo 1.jpg" alt="生活照1" fill className="object-cover hover:scale-105 transition duration-500"/>
           </div>
           {/* 图片2 */}
           <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
             <Image src="/photo2.jpg" alt="生活照2" fill className="object-cover hover:scale-105 transition duration-500"/>
           </div>
        </div>

        {/* 视频区域 - 强烈建议使用B站/Youtube外链，不要放本地视频 */}
        <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">直播切片</h2>
        <div className="grid grid-cols-1 gap-6">
            {/* 视频卡片 */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    {/* 把src里面的链接换成你的B站视频嵌入代码 */}
                    <iframe 
                        src="//player.bilibili.com/player.html?bvid=BV1xxxxxx" 
                        className="w-full h-full" 
                        scrolling="no" 
                        frameBorder="0" 
                        allowFullScreen={true}>
                    </iframe>
                </div>
                <p className="mt-2 font-medium text-gray-700">标题：这是我在直播时的搞笑瞬间</p>
            </div>
        </div>
      </div>
    </div>
  );
}