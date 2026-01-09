import Link from 'next/link';
import Image from 'next/image';

// ---------------------------------------------------------
// 📝 数据配置区
// ---------------------------------------------------------
const EVENTS = [
  {
    id: 1,
    date: "2025.07.27",
    title: "一日店长·素拼",
    location: "郑州 · 正弘城六楼",
    description: "感谢来到现场的每一位朋友！那一天的商场因为你们而闪闪发光，辛苦大家排队啦！",
    // 👇 确保 public/offline/ 文件夹里有 2.jpg
    cover: "/day/2.jpg", 
    tag: "已结束",
  },
  {
    id: 2,
    date: "2025.08.03",
    title: "一日店长·淘宝闪购",
    location: "苏州 · 姑苏区相门",
    description: "苏州站的相遇依然记忆犹新。古城的韵味与大家的热情碰撞，留下了最美的夏日回忆。",
    // 👇 暂时复用
    cover: "/day/4.jpg", 
    tag: "已结束",
  },
  {
    id: 3,
    date: "2025.08.26",
    title: "一日店长·趁热集合",
    location: "上海 · 五角场合生汇",
   description: "叮！新鲜出炉的一日店长上线啦！在趁热集合和大家一起分享冬日里的第一口甜蜜，香气扑鼻的面包和你，都是我最想见的风景。",  
    // 👇 暂时复用
    cover: "/day/5.jpg", 
    tag: "已结束",
  }
];

export default function OfflineEvents() {
  return (
    // 👇 修改点：bg-black/50 (半透明黑色)，和影视/游戏页保持一致
    <div className="min-h-screen bg-black/50 text-white p-6 pt-24">
      <div className="max-w-4xl mx-auto">
        
        {/* 顶部导航 */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition group">
            <span className="mr-2 group-hover:-translate-x-1 transition">←</span> 
            返回首页
          </Link>
        </div>

        {/* 标题区 */}
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center text-4xl mb-2 shadow-[0_0_30px_rgba(147,51,234,0.3)]">
            🏪
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            一日店长日记
          </h1>
          <p className="text-gray-400 max-w-lg">
            记录每一次线下相遇的珍贵时刻。
          </p>
        </div>

        {/* --- 时间轴布局 --- */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-10 space-y-12">
          
          {EVENTS.map((event) => (
            <div key={event.id} className="relative pl-8 md:pl-12 group">
              
              {/* 时间轴上的小圆点 */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-black group-hover:scale-125 group-hover:shadow-[0_0_10px_#a855f7] transition duration-300"></div>
              
              {/* 内容卡片 */}
              {/* 这里使用 bg-black/60 来加深卡片背景，保证在半透明页面上文字清晰 */}
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition duration-300 flex flex-col md:flex-row shadow-lg">
                
                {/* 左侧：图片 */}
                <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden">
                  <Image 
                    src={event.cover} 
                    alt={event.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* 右侧：文字 */}
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-purple-400 font-mono text-sm tracking-wider">{event.date}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${event.tag === '筹备中' ? 'bg-purple-500/20 text-purple-300 border-purple-500/20' : 'bg-gray-500/20 text-gray-300 border-gray-500/20'}`}>
                      {event.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition">{event.title}</h3>
                  
                  <div className="flex items-center text-gray-400 text-sm mb-4 font-mono">
                    <span className="mr-1.5 text-purple-500">📍</span> {event.location}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* 底部 */}
        <div className="ml-10 mt-12 pt-8 border-t border-dashed border-white/10 text-gray-500 text-sm flex flex-col items-center animate-pulse">
           <span className="text-xl mb-2">🕳️</span>
           To be continued... 更多惊喜筹备中
        </div>

      </div>
    </div>
  );
}