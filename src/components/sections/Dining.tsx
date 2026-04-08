import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { ArrowLeft } from 'lucide-react';

export default function Dining() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section id="dining" ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-[80vh] rounded-[2rem] overflow-hidden">
            <motion.div 
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-[140%] -top-[20%]"
            >
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
                alt="Fine Dining at Sama Thakher" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-8 right-8 bg-black/50 backdrop-blur-md border border-white/20 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4"
            >
              <span className="font-serif text-3xl text-accent mb-1">3</span>
              <span className="font-sans text-xs text-white/80 uppercase tracking-widest">مطاعم فاخرة</span>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
                تذوق <span className="text-accent italic">الفخامة</span>
              </h2>
              <p className="font-sans text-white/60 text-lg mb-8 leading-relaxed">
                رحلة طهي استثنائية تأخذك عبر نكهات العالم. من الأطباق الشرقية الأصيلة إلى الإبداعات العالمية المعاصرة، يقدم طهاتنا الحائزون على جوائز تجارب طعام لا تُنسى ترضي جميع الأذواق.
              </p>
              
              <ul className="space-y-4 mb-12 font-sans text-white/80">
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>بوفيه إفطار عالمي غني بالخيارات</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>مطعم آسيوي متخصص بأجواء هادئة</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>خدمة الغرف على مدار 24 ساعة</span>
                </li>
              </ul>

              <MagneticButton>
                <button className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-sans font-medium transition-colors group">
                  <span>استكشف قوائم الطعام</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                </button>
              </MagneticButton>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
