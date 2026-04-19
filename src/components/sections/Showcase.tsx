import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { ArrowLeft } from 'lucide-react';

const rooms = [
  {
    id: 1,
    title: 'الجناح الملكي',
    description: 'إطلالة بانورامية على الحرم المكي مع مساحات معيشة فاخرة.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'جناح كبار الشخصيات',
    description: 'تصميم عصري يدمج بين الأصالة والراحة الاستثنائية.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'الغرفة التنفيذية',
    description: 'ملاذ هادئ مصمم خصيصاً لتلبية احتياجات النخبة.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'الغرفة الكلاسيكية',
    description: 'أناقة بسيطة وراحة تامة لإقامة لا تُنسى.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
  },
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">
              إقامتك <span className="text-accent italic">الاستثنائية</span>
            </h2>
            <p className="font-sans text-white/60 max-w-md text-lg">
              اكتشف مجموعة مختارة من الغرف والأجنحة المصممة لتوفير أقصى درجات الراحة والسكينة.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/50">
            <span className="font-sans text-sm uppercase tracking-widest">اسحب للاستكشاف</span>
            <ArrowLeft className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div className="relative w-full h-[60vh]">
          <motion.div style={{ x }} className="absolute right-0 flex gap-8 px-4 md:px-20 w-max">
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const RoomCard: React.FC<{ room: any; index: number }> = ({ room, index }) => {
  return (
    <motion.div 
      className="relative w-[85vw] md:w-[600px] h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden group cursor-none"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img 
          src={room.image} 
          alt={room.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      <motion.div 
        variants={{
          initial: { y: 20, opacity: 0.8 },
          hover: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
      >
        <div className="flex justify-between items-end">
          <div>
            <span className="font-sans text-accent text-sm font-bold tracking-widest mb-2 block">
              0{index + 1}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              {room.title}
            </h3>
            <p className="font-sans text-white/70 max-w-sm">
              {room.description}
            </p>
          </div>
          
          <MagneticButton>
            <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
              <ArrowLeft className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </button>
          </MagneticButton>
        </div>
      </motion.div>
    </motion.div>
  );
}
