import Link from 'next/link';
import Image from 'next/image';

// ---------------------------------------------------------
// 📝 数据配置区
// ---------------------------------------------------------
const EVENTS = [
    {
    id: 16,
    date: "2026.01.24",
    title: "一日店长·miniso friends",
    location: "北京 · 龙湖长楹天街",
    description: "",
    cover: "/day/R.png", 
    tag: "未开始",
  },
    {
    id: 15,
    date: "2026.01.17",
    title: "一日店长·Doopa",
    location: "深圳 · 怀德万象汇",
    description: "从荧幕到现实，定格独家记忆",
    cover: "/day/sz.jpg", 
    tag: "已结束",
  },
    {
    id: 14,
    date: "2025.11.29",
    title: "一日店长·玛速主义",
    location: " 金华· 世贸下",
   description: "甜酷辣妹上线！解锁秋冬潮流新皮肤，金华世贸的时尚狙击。",  
    cover: "/day/19.jpg", 
    tag: "已结束",
  },  {
    id: 13,
    date: "2025.11.16",
    title: "一日店长·Doopa",
    location: " 深圳· 海雅缤纷城 B156",
   description: "BlingBling的闪耀时刻！亲自为你试戴心动配饰，点亮穿搭灵感。",  
    cover: "/day/18.png", 
    tag: "已结束",
  },  {
    id: 12,
    date: "2025.11.15",
    title: "一日店长·MINISO SPACE",
    location: " 南京· 德基店 ",
   description: "南京德基打卡！今日份可爱浓度已超标，快来领走你的快乐。",  
    cover: "/day/16.png", 
    tag: "已结束",
  },  {
    id: 11,
    date: "2025.11.08",
    title: "一日店长·粒上皇",
    location: " 广东惠州· 隆生金山湖店",
   description: "现炒的快乐！捕捉一只在香气中沦陷的“贪吃”店长。",  
    cover: "/day/15.jpg", 
    tag: "已结束",
  },
  {
    id: 10,
    date: "2025.10.26",
    title: "一日店长·锦江维也纳",
    location: " 深圳· 福田 CBD福华路店",
   description: "欢迎光临！在福田CBD，给您一个五星级的晚安。",  
    cover: "/day/13.png", 
    tag: "已结束",
  },
  {
    id: 9,
    date: "2025.09.30",
    title: "一日店长·纪联华超市",
    location: " 上海· 百联中环购物广场",
   description: "生活气息满满 · 上海百联的超市奇遇记",  
    cover: "/day/12.jpg", 
    tag: "已结束",
  },
  {
    id: 8,
    date: "2025.09.28",
    title: "一日店长·超级安踏",
    location: " 深圳· 宝安大仟里购物中心B1",
   description: "元气值Max！在安踏超级大店捕捉一只“运动涵”。",  
    cover: "/day/11.jpg", 
    tag: "已结束",
  },
  {
    id: 7,
    date: "2025.09.27",
    title: "一日店长·酷乐潮玩",
    location: " 深圳· 大悦城B1",
   description: "破次元壁！巡店掉落，和王店长一起'酷'乐一下。",  
    cover: "/day/9.jpg", 
    tag: "已结束",
  },
  {
    id: 6,
    date: "2025.09.13",
    title: "一日店长·Teenie Weenie",
    location: " 武汉· 百联",
   description: "被Teenie Weenie小熊包围的一天！金牌店长上线，亲自为你搭配秋日心动Look。",  
    cover: "/day/8.jpg", 
    tag: "已结束",
  },
  {
    id: 5,
    date: "2025.08.31",
    title: "一日店长·茉莉奶白",
    location: " 深圳· 卓悦中心",
   description: "空降卓悦中心！比七分甜的奶白更甜的，是你的笑容。",  
    cover: "/day/image.png", 
    tag: "已结束",
  },
  {
    id: 4,
    date: "2025.08.29",
    title: "一日织女·淘宝闪购织女",
    location: " 广州· 东山口",
   description: "东山口｜淘宝闪购⚡️今日份“织女”下凡进货啦🛍️",  
    // 👇 暂时复用
    cover: "/day/6.jpg", 
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
    id: 1,
    date: "2025.07.27",
    title: "一日店长·素拼",
    location: "郑州 · 正弘城六楼",
    description: "感谢来到现场的每一位朋友！那一天的商场因为你们而闪闪发光，辛苦大家排队啦！",
    // 👇 确保 public/offline/ 文件夹里有 2.jpg
    cover: "/day/2.jpg", 
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