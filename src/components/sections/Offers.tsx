import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { ArrowLeft } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'باقة الاسترخاء الفاخرة',
    description: 'استمتع بإقامة لمدة 3 ليالٍ مع جلسات تدليك يومية وعشاء رومانسي مجاني.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop',
    tag: 'عرض حصري'
  },
  {
    id: 2,
    title: 'عطلة نهاية الأسبوع',
    description: 'احجز ليلتين في عطلة نهاية الأسبوع واحصل على ترقية مجانية للغرفة وإفطار متأخر.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop',
    tag: 'الأكثر طلباً'
  },
  {
    id: 3,
    title: 'باقة العائلة',
    description: 'إقامة مريحة لجميع أفراد العائلة مع أنشطة ترفيهية للأطفال ووجبات مجانية.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
    tag: 'للعائلات'
  }
];

export default function Offers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-red-500 font-medium tracking-wider uppercase text-sm mb-4 block"
            >
              عروض استثنائية
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif font-bold"
            >
              باقات مصممة خصيصاً لك
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagneticButton>
              <button className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <span className="font-medium">عرض جميع الباقات</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900/50 border border-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute top-6 right-6 z-20">
                  <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    {offer.tag}
                  </span>
                </div>
                <motion.img 
                  style={{ y }}
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-[120%] object-cover absolute top-[-10%] left-0 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif font-bold mb-3">{offer.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {offer.description}
                </p>
                <MagneticButton>
                  <button className="w-full py-4 bg-white text-black rounded-full font-medium hover:bg-red-600 hover:text-white transition-colors duration-300">
                    احجز الآن
                  </button>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
