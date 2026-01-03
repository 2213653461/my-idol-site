import Link from 'next/link';
import Image from 'next/image';

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
            <h1 className="text-4xl font-bold text-yellow-400">影视剧</h1>
        </div>

        <div className="space-y-8">
            {/* 影视剧条目 1 */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  {/* 海报图片 */}
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5">
                    <Image 
                      src="/works/1.webp" 
                      alt="《系统逼我说爱你》海报" 
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>
                  
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-yellow-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《系统逼我说爱你》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      剧情简介：现代财迷销售穿越成替嫁庶女，盯上病娇王爷遗产时，却撞破他靠“贴贴任务”续命的秘密，两人从各怀鬼胎的系统绑定，在反派环伺中斗智斗勇渐生真心，最终以真爱破局，续写始于任务、终于灵魂的古代情缘。
                    </p>
                    
                    {/* 👇 修改点：链接已更新为爱奇艺 */}
                    <a 
                      href="https://www.iqiyi.com/search/系统逼我说爱你.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold"
                    >
                        去爱奇艺观看 ▶
                    </a>
                  </div>
              </div>
            </div>

            {/* 影视剧条目 2 */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  {/* 海报图片 */}
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5">
                    <Image 
                      src="/works/2.webp" 
                      alt="《吻过月亮》海报" 
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-purple-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《吻过月亮》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      18岁温棠月暗恋邻居哥哥季让，却因自卑将爱意深藏。一次意外，她与叛逆少年季礼相遇，被他所救却心生恐惧。七年纠葛中季礼表面捉弄实则守护，温棠月逐渐看清真从对季让的憧憬转向对季礼的心动。然而心.误会与伤害让两人错过七年，直至时尚晚宴重逢，他身边有未婚妻，她身后有绯闻，彼此仍在误解与试探中挣扎徘徊，
                    </p>

                    <a 
                      href="https://www.iqiyi.com/search/系统逼我说爱你.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold"
                    >
                        去红果短剧观看 ▶
                    </a>
                    
                    {/* 如果这部剧也有链接，可以复制上面的 <a> 标签改一下 href 即可 */}
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}