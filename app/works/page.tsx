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

        {/* 标题 */}
        <div className="flex items-center justify-center gap-3 mb-10">
            <span className="text-4xl">🎬</span>
            <h1 className="text-4xl font-bold text-yellow-400">影视剧</h1>
        </div>

        <div className="space-y-8">
                        {/* --- 第 9 部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800">
                    <Image src="/works/9.jpg" alt="终宋" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-green-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">未上映</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">暂定 2026</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《终宋》</h3>
                  </div>
              </div>
            </div>

            {/* --- 第 1 部 --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5">
                    <Image src="/works/1.webp" alt="海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-yellow-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：赵明溪</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《系统逼我说爱你》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      剧情简介：现代财迷销售穿越成替嫁庶女，盯上病娇王爷遗产时，却撞破他靠“贴贴任务”续命的秘密，两人从各怀鬼胎的系统绑定，在反派环伺中斗智斗勇渐生真心，最终以真爱破局，续写始于任务、终于灵魂的古代情缘。
                    </p>
                    <a href="https://www.iqiyi.com/search/系统逼我说爱你.html" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        去爱奇艺观看 ▶
                    </a>
                  </div>
              </div>
            </div>

            {/* --- 第 2 部 --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5">
                    <Image src="/works/2.webp" alt="海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-purple-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：温棠月</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《吻过月亮》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      剧情简介：18岁温棠月暗恋邻居哥哥季让，却因自卑将爱意深藏。一次意外，她与叛逆少年季礼相遇，被他所救却心生恐惧。七年纠葛中季礼表面捉弄实则守护，温棠月逐渐看清真从对季让的憧憬转向对季礼的心动。然而心.误会与伤害让两人错过七年，直至时尚晚宴重逢，他身边有未婚妻，她身后有绯闻，彼此仍在误解与试探中挣扎徘徊
                    </p>
                    <button className="inline-block px-6 py-2 border border-white/20 text-gray-400 rounded-full cursor-not-allowed">
                        暂无片源
                    </button>
                  </div>
              </div>
            </div>

            {/* --- 第 3 部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800 flex items-center justify-center">
                    {/* 👇 记得在 public/works/ 放图片 3.webp */}
                    <Image src="/works/3.webp" alt="待定海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-blue-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：温惜</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《Boss找我算姻缘》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      该剧讲述了温惜阴差阳错绑定了来自未来的机器人，她利用机器人能够预知附近人未来的功能，帮助弱小，惩恶扬善，并结识了陆氏集团总裁陆勉。敢爱敢恨有仇必报的校园女神和循规蹈矩强迫症十级的集团掌权人，两人在朝夕相处中渐生情愫，最终收获甜蜜爱情的故事。
                    </p>
                    <button className="inline-block px-6 py-2 border border-white/20 text-gray-400 rounded-full cursor-not-allowed">
                        暂无片源
                    </button>
                  </div>
              </div>
            </div>

            {/* --- 第 4 部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800">
                    <Image src="/works/4.webp" alt="待定海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-pink-600 text-xs px-2 py-1 rounded text-white font-bold">电影</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">客串</span>
                         <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：董一朵</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《亚洲舞王》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      故事讲述60岁的陈年久，为了鼓励因跳舞摔伤腿的孙子小川，摆脱心理阴影重新站起来而参加街舞比赛的故事。全剧以诙谐幽默的喜剧表现形式，讲述着一段真实质朴的祖孙之情，一段老年人的奋斗史，一幕平淡岁月中的绚烂生活。
                     </p>
                    <a href="https://www.iqiyi.com/v_f2mv9jnk3g.html" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        去爱奇艺观看 ▶
                    </a>
                  </div>
              </div>
            </div>

            {/* --- 第 5 部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800">
                    <Image src="/works/5.webp" alt="待定海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-green-600 text-xs px-2 py-1 rounded text-white font-bold">电影</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：章小诺</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《再战江湖》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      讲述了多年前九龙话事人章山河(陈小春饰)因与人火拼锒铛入狱，妻子悲痛不已而难产早逝，留下女儿在福利院长大。多年后章山河出狱，决定金盆洗手独自抚养女儿。然而为救昔日兄弟导致黑帮老大塔里意外身亡，由此引来塔里的弟弟查侬(李灿森饰)疯狂报复，兄弟遇害、女儿被绑，章山河为救女儿与犯罪分子展开了一场猎杀对决。
                    </p>
                    <a href="https://www.iqiyi.com/v_1yv9k22eehs.html?vfm=m_331_dbdy&fv=4904d94982104144a1548dd9040df241" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        去爱奇艺观看 ▶
                    </a>
                  </div>
              </div>
            </div>
                        {/* --- 第 6 部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800">
                    <Image src="/works/6.webp" alt="待定海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-pink-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">女主角</span>
                         <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：沈清歌 / 小邱</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《倒霉小姐与幸运先生》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      出版社责编小邱刚评估了一本雷人玛丽苏小说，在过审会上直接给出“不予通过”的结论。然而，她在自己的衣橱里打了个盹，再醒来时竟然进入了另一个世界。几经探索，她意识到自己穿越到了那本被自己“毙掉”的小说里，还成了最倒霉的女配沈清歌！虽然她有作者的“金手指”可以看到所有人的幸运值，但自己的幸运值却低得可怜，什么倒霉事情都找到她。小说的系统君提示她，只有靠近锦鲤男主顾易宸，她的幸运值才能提高，才有机会穿越回家。
                     </p>
                    <a href="https://v.qq.com/x/cover/mzc00200oxndqdz/g410000rerg.html?ptag=newdouban.tv" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        去腾讯视频观看 ▶
                    </a>
                  </div>
              </div>
            </div>

                        {/* --- 第 7 部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800">
                    <Image src="/works/7.webp" alt="待定海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-pink-600 text-xs px-2 py-1 rounded text-white font-bold">短剧</span>
                         <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：系统</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《开局一座山》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      本片讲述了年轻人程大雷，意外进入了游戏系统世界，成为了一座寨子的大当家，开启了一段振兴破败寨子、经营饮食产业、抵御外族入侵的冒险旅程
                     </p>
                    <a href="https://v.qq.com/x/cover/mzc00200ntdxlu5/o0045lxeakf.html?ptag=newdouban.tv" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        去腾讯视频观看 ▶
                    </a>
                  </div>
              </div>
            </div>

                                    {/* --- 第 8部 (新增) --- */}
            <div className="group relative bg-black/60 border border-white/10 rounded-xl p-6 overflow-hidden hover:border-yellow-500/50 transition shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-40 h-56 rounded-lg flex-shrink-0 overflow-hidden shadow-md border border-white/5 bg-gray-800">
                    <Image src="/works/8.webp" alt="待定海报" fill className="object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="flex-1 py-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-pink-600 text-xs px-2 py-1 rounded text-white font-bold">电视剧</span>
                        <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">客串</span>
                         <span className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">饰：孙洁萍</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">《薄荷之夏》</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      十年没见的儿时鼻涕虫玩伴林南一，竟长成了超级帅哥，可他会不会揭开过往自己的糗事，让刚树立的"女神转校生"形象覆灭?转学回乡的少女童夕，就这么在兴奋和紧张中开启了自己"开挂"的高中生涯。但她不知道的是，林南一也有一个隐藏十年的秘密，而他还有一个让童夕惊羡不已的身份.....一段充满浪漫和乌龙的校园青春故事就此展开。
                     </p>
                    <a href="https://www.iqiyi.com/v_2cgxhsjcipg.html?vfm=m_331_dbdy&fv=4904d94982104144a1548dd9040df241" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/50 hover:bg-yellow-500 hover:text-black transition font-bold">
                        去爱奇艺观看 ▶
                    </a>
                  </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}