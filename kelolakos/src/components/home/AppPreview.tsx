
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import Image from 'next/image';

import SS1 from "../../screnshoots/1.webp";
import SS2 from "../../screnshoots/2.jpg";
import SS3 from "../../screnshoots/3.jpg"

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrollGalleryProps {
  images: { src: string; width: number; height: number }[];
}

const ScrollGallery: React.FC<ScrollGalleryProps> = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth! - carousel.current?.offsetWidth!);
  }, []);

  return (
    <motion.div ref={carousel} className="cursor-grab overflow-hidden">
      <motion.div 
        drag="x" 
        dragConstraints={{ right: 0, left: -width }} 
        className="flex"
      >
        {images.map((image, index) => (
          <motion.div key={index} className="min-w-max p-2">
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={image.width}
              height={image.height}
              className="pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const AppPreview = () => {
    const images = [
      { src: SS2, width: 140, height: 210 },
      { src: SS1, width: 521, height: 210 },
      { src: SS3, width: 140, height: 210 },
      { src: SS2, width: 140, height: 210 },
      { src: SS1, width: 521, height: 210 },
      { src: SS3, width: 140, height: 210 },
      // Add more images with varying sizes
    ];
  
    return (
      <div className="p-4">
        <ScrollGallery images={images} />
      </div>
    );
  };