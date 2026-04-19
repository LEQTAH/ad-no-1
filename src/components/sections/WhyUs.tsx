import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
            لماذا الحجز <span className="text-accent italic">المباشر؟</span>
          </h2>
          <p className="font-sans text-white/60 max-w-2xl mx-auto text-lg">
            نضمن لك تجربة استثنائية ومزايا حصرية عند الحجز مباشرة عبر موقعنا الرسمي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Standard Booking */}
          <motion.div 
            style={{ y: y1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <h3 className="font-serif text-3xl text-white/50 mb-8 flex items-center gap-4">
              <XCircle className="text-white/30 w-8 h-8" />
              الحجز عبر وسطاء
            </h3>
            <ul className="space-y-6 font-sans text-lg text-white/40">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20 mt-2 shrink-0" />
                <span>أسعار غير مستقرة وتتضمن رسوم خفية</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20 mt-2 shrink-0" />
                <span>خيارات غرف محدودة وغير مضمونة</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20 mt-2 shrink-0" />
                <span>سياسات إلغاء صارمة ومعقدة</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20 mt-2 shrink-0" />
                <span>لا توجد مزايا إضافية أو ترقيات</span>
              </li>
            </ul>
          </motion.div>

          {/* Direct Booking */}
          <motion.div 
            style={{ y: y2 }}
            className="bg-gradient-to-br from-accent/20 to-black border border-accent/30 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="font-serif text-3xl text-white mb-8 flex items-center gap-4 relative z-10">
              <CheckCircle2 className="text-accent w-8 h-8" />
              الحجز المباشر (لؤلؤة البدائع)
            </h3>
            <ul className="space-y-6 font-sans text-lg text-white/90 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                <span>أفضل سعر مضمون دائماً بدون رسوم خفية</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                <span>أولوية في اختيار الغرف والإطلالات</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                <span>مرونة تامة في تعديل أو إلغاء الحجز</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                <span>ترقية مجانية للغرفة (حسب الإمكانية)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_10px_rgba(22,163,74,0.8)]" />
                <span>تسجيل دخول مبكر ومغادرة متأخرة مجاناً</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
