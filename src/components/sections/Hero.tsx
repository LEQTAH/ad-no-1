import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { Calendar, User } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=2070&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
      </motion.div>

      <motion.div 
        className="relative z-20 text-center px-4"
        style={{ opacity }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
        >
          لؤلؤة البدائع
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light"
        >
          حيث تلتقي الفخامة بالأصالة في قلب البدائع
        </motion.p>
      </motion.div>

      {/* Floating Booking Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-4xl"
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full p-2 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-6 px-6 py-2 w-full md:w-auto">
            <div className="flex items-center gap-3 text-white/80">
              <Calendar className="w-5 h-5 text-accent" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-70">الوصول - المغادرة</span>
                <span className="font-sans font-medium">اختر التواريخ</span>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block" />
            <div className="flex items-center gap-3 text-white/80">
              <User className="w-5 h-5 text-accent" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-70">الضيوف</span>
                <span className="font-sans font-medium">2 بالغين، 1 غرفة</span>
              </div>
            </div>
          </div>
          
          <MagneticButton className="w-full md:w-auto">
            <button className="bg-accent hover:bg-green-700 text-white px-8 py-4 rounded-full font-sans font-bold transition-colors w-full md:w-auto">
              احجز الآن
            </button>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
