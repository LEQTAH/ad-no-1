import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Utensils, Wifi, Car, Coffee, Sparkles, MapPin } from 'lucide-react';

const amenities = [
  { icon: MapPin, title: 'موقع استراتيجي', desc: 'خطوات معدودة من الحرم المكي الشريف' },
  { icon: Sparkles, title: 'خدمة كونسيرج', desc: 'مساعد شخصي متاح على مدار الساعة' },
  { icon: Utensils, title: 'مطاعم عالمية', desc: 'أشهى المأكولات من مختلف المطابخ' },
  { icon: Car, title: 'نقل ترددي', desc: 'حافلات فاخرة من وإلى الحرم' },
  { icon: Coffee, title: 'مقهى بانورامي', desc: 'إطلالات ساحرة مع قهوة مختصة' },
  { icon: Wifi, title: 'إنترنت فائق السرعة', desc: 'تغطية شاملة في جميع أنحاء الفندق' },
];

export default function Amenities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="amenities" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              خدمات <span className="text-accent italic">استثنائية</span>
            </h2>
            <p className="font-sans text-white/60 text-lg">
              نولي اهتماماً بأدق التفاصيل لنضمن لك إقامة مريحة ومتكاملة تلبي كافة احتياجاتك الروحانية واليومية.
            </p>
          </div>
        </div>

        <motion.div 
          style={{ y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group cursor-none"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
              <p className="font-sans text-white/50">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
