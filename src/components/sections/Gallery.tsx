import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1542314831-c53cd4b85ca4?q=80&w=2000&auto=format&fit=crop',
    alt: 'واجهة الفندق',
    className: 'col-span-2 row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop',
    alt: 'غرفة فاخرة',
    className: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2000&auto=format&fit=crop',
    alt: 'المسبح الداخلي',
    className: 'col-span-1 row-span-2'
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop',
    alt: 'المطعم الراقي',
    className: 'col-span-1 row-span-1'
  },
  {
    src: 'https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=2000&auto=format&fit=crop',
    alt: 'السبا',
    className: 'col-span-2 row-span-1'
  }
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-red-500 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            معرض الصور
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            لمحة عن الفخامة
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <motion.img
                style={{ y: img.className.includes('row-span-2') ? y : 0 }}
                src={img.src}
                alt={img.alt}
                className="w-full h-[120%] object-cover absolute top-[-10%] left-0 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-serif text-xl tracking-wider">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
