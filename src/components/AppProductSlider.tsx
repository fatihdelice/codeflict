'use client'

import React, { useState, useEffect } from 'react';

export default function AppProductSlider() {
    const imageUrls = [
        { name:'Sivasspor Wallpapers', buttonImage: '/apps/sw-logo.webp', activeImage: '/apps/sw-active.jpg', linkUrl: 'https://play.google.com/store/apps/details?id=com.mobiroller.mobi408693277272' },
        { name:'Wordaily', buttonImage: '/apps/wordaily-logo.webp', activeImage: '/apps/wordaily-active.jpg', linkUrl: 'https://play.google.com/store/apps/details?id=com.yigidosoft.wordaily' },
        { name:'Wallsdrobe', buttonImage: '/apps/wallsdrobe-logo.webp', activeImage: '/apps/wallsdrobe-active.png', linkUrl: 'https://play.google.com/store/apps/details?id=com.yigidosoft.wallsdrobe' },
    ];

    const [activeImage, setActiveImage] = useState(null);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        if (imageUrls.length > 0) {
            const centerIndex = Math.floor(imageUrls.length / 2);
            setActiveImage(imageUrls[centerIndex].activeImage);
            setActiveLink(imageUrls[centerIndex].linkUrl);
        }
    }, []);

    const handleClick = (index) => {
        setActiveImage(imageUrls[index].activeImage);
        setActiveLink(imageUrls[index].linkUrl);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="relative lg:col-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-transparent shadow-xl dark:shadow-thick rounded-3xl p-4">
                    {activeImage && activeLink && (
                        <a href={activeLink} target="_blank" rel="noopener noreferrer" className="active-image-link">
                            <img src={activeImage} width="1024" height="500" alt="Active Slide" className="active-image" />
                            <div className="icon-overlay">
                                <img src="/apps/google-play-badge.png" width="246" height="50" alt="Google Play" className="h-auto bottom-2" />
                            </div>
                        </a>
                    )}
                </div>
                <div className="slider-container">
                    <div className="slide-area">
                        {imageUrls.map((image, index) => (
                            <div key={index} className={`app-box ${activeImage === image.activeImage ? 'active dark:ring-[#C1FF14]' : 'dark:ring-white/10'} lg:col-span-2 ring-1 ring-primary/5 bg-white dark:bg-transparent shadow-xl dark:shadow-thick rounded-2xl p-2 flex items-center justify-center`}>
                                <button onClick={() => handleClick(index)} title={image.name}>
                                    <img src={image.buttonImage} width="64" height="64" alt={image.name} className='w-14 h-14 sm:w-16 sm:h-16'/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
        .active-image-link {
          display: block;
          position: relative;
        }

        .active-image {
          border-radius: 20px;
          object-fit: contain;
          transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
          height: auto;
        }

        .icon-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: none;
          color: #fff;
          z-index: 1;
        }

        .active-image-link:hover .active-image {
          filter: brightness(30%);
        }

        .active-image-link:hover .icon-overlay {
          display: flex; /* Show icon on hover */
          align-items: center;
          justify-content: center;
        }

        .slider-container {
          margin-top: 2rem;
        }

        .slide-area {
          display: flex;
          gap: 20px; /* Adjust gap for spacing */
          justify-content: center;  
        }

        .app-box {
          position: relative;
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        .app-box img {
          border-radius: 0.8rem;
          object-fit: contain;
        }

        .app-box.active {
          transform: scale(1);
        }

        .app-box:not(.active) {
          opacity: 0.5;
          transform: scale(0.75);
        }
      `}</style>
        </div>
    );
}
