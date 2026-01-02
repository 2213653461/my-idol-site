"use client"; // 这一行必须在第一行

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- 这里配置你的相册数据 ---
const ALBUMS = [
  {
    id: 1,
    title: "日常合集",
    cover: "/daily/1.jpg", // 封面图
    count: "6张", 
    photos: [
      "/game/1.jpg",
      "/daily/2.jpg",
      "/daily/3.jpg",
      "/daily/4.jpg",
      "/daily/5.jpg",
      "/daily/6.jpg",
    ]
  },
  {
    id: 2,
    title: "活动现场返图",
    cover: "/live/1.jpg", // 封面图
    count: "3张",
    photos: [
      "/live/1.jpg",
      "/live/2.jpg",
      "/live/3.jpg",
    ]
  },
];

export default function Gallery() {
  // 状态1：当前打开的相册 ID (如果为 null，说明在看相册列表)
  const [activeAlbumId, setActiveAlbumId] = useState<number | null>(null);
  
  // 状态2：当前正在全屏查看的图片链接 (如果为 null，说明没在大图模式)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // 找到当前选中的相册数据
  const currentAlbum = ALBUMS.find(a => a.id === activeAlbumId);

  return (
    <div className="min-h-screen bg-black/50 text-white p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* 顶部导航区 */}
        <div className="mb-8 flex items-center justify-between">
          {/* 左侧：返回首页 */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition group">
            <span className="mr-2 group-hover:-translate-x-1 transition">←</span> 
            返回首页
          </Link>

          {/* 右侧：如果打开了相册，显示关闭按钮 */}
          {activeAlbumId !== null && (
            <button 
              onClick={() => setActiveAlbumId(null)}
              className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition flex items-center gap-2"
            >
              <span>✕</span> 关闭合集
            </button>
          )}
        </div>

        {/* 标题区 */}
        <h1 className="text-4xl font-bold mb-8 text-center border-b border-white/20 pb-4">
          {activeAlbumId === null ? "✨ 精选图集 Collections" : `📂 ${currentAlbum?.title}`}
        </h1>

        {/* --- 视图 1: 相册列表 (默认显示) --- */}
        {activeAlbumId === null && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {ALBUMS.map((album) => (
              <div 
                key={album.id}
                onClick={() => setActiveAlbumId(album.id)}
                className="group cursor-pointer"
              >
                {/* 文件夹造型容器 */}
                <div className="relative h-72 bg-gray-800 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-pink-500 transition-colors duration-300 shadow-xl">
                  {/* 封面图 */}
                  <Image 
                    src={album.cover} 
                    alt={album.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                  />
                  {/* 叠加层 */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
                  
                  {/* 底部信息 */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                    <h3 className="text-xl font-bold truncate group-hover:text-pink-400 transition">{album.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{album.count} Photos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- 视图 2: 相册内部图片 (点击相册后显示) --- */}
        {activeAlbumId !== null && currentAlbum && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in zoom-in duration-300">
            {currentAlbum.photos.map((photo, index) => (
              <div 
                key={index} 
                onClick={() => setFullscreenImage(photo)}
                className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-zoom-in bg-gray-800 hover:ring-2 ring-pink-500 transition shadow-lg group"
              >
                <Image 
                  src={photo} 
                  alt="gallery-item" 
                  fill 
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* --- 视图 3: 全屏大图 (点击图片后显示) --- */}
        {fullscreenImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image 
                src={fullscreenImage} 
                alt="Fullscreen" 
                fill 
                className="object-contain"
                priority
              />
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/60 px-6 py-2 rounded-full border border-white/10">
                点击任意处关闭
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}