
import Link from 'next/link';
import Image from 'next/image';

// --- 📝 这里配置你的线下活动数据 ---
const EVENTS = [
  {
    id: 1,
    date: "2025.12.24",
    title: "🎄 圣诞一日店长·奶茶店奇遇",
    location: "上海·静安区某奶茶店",
    description: "第一次尝试做奶茶！虽然把糖放多了，但是见到大家真的很开心。感谢所有来到现场的粉丝宝宝们！",
    cover: "/offline/event1.jpg", // 记得在 public/offline 里放图
    tag: "已结束",
  },
  {
    id: 2,
    date: "2025.10.01",
    title: "🐱 宠物咖啡厅·一日铲屎官",
    location: "杭州·西湖区",
    description: "猫猫狗狗都被我征服了！不仅学会了给猫咪梳毛，还自创了特别拉花咖啡。",
    cover: "/offline/event2.jpg",
    tag: "Vlog回顾",
  },
  // 复制上面的 {} 添加更多活动...
];

export default function OfflineEvents() {
  return (
    <div className="min-h-screen bg-black/90 text-white p-6 pt-24">
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
            记录每一次线下相遇的珍贵时刻。<br/>
            Next Stop: 敬请期待...
          </p>
        </div>

        {/* --- 时间轴列表 --- */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-10 space-y-12">
          
          {EVENTS.map((event) => (
            <div key={event.id} className="relative pl-8 md:pl-12 group">
              
              {/* 时间轴上的小圆点 */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-black group-hover:scale-125 group-hover:shadow-[0_0_10px_#a855f7] transition duration-300"></div>
              
              {/* 内容卡片 */}
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition duration-300 flex flex-col md:flex-row">
                
                {/* 左侧/上方：图片 */}
                <div className="relative h-48 md:h-auto md:w-2/5 overflow-hidden">
                  {/* 如果还没图，可以用背景色代替 */}
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
                    <span className="text-sm">暂无封面</span>
                  </div>
                  {/* 开启下方代码前，请确保有图片 */}
                  {/* <Image 
                    src={event.cover} 
                    alt={event.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  */}
                </div>

                {/* 右侧/下方：文字信息 */}
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-purple-400 font-mono text-sm tracking-wider">{event.date}</span>
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] px-2 py-0.5 rounded-full border border-purple-500/20">
                      {event.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition">{event.title}</h3>
                  
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <span className="mr-1">📍</span> {event.location}
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <button className="self-start text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                    查看活动详情 →
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* 底部未完待续 */}
        <div className="ml-10 mt-12 pt-8 border-t border-dashed border-white/10 text-gray-500 text-sm">
           To be continued... 更多惊喜筹备中
        </div>

      </div>
    </div>
  );
}