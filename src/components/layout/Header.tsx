import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import MagneticButton from '../ui/MagneticButton';
import { Menu } from 'lucide-react';
import logo from '../../../logo.svg';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-6 md:py-8' : 'bg-transparent py-10 md:py-12'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <MagneticButton>
            <button className="text-white hover:text-accent transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </MagneticButton>
          <nav className="hidden md:flex items-center gap-6 font-sans text-sm text-white/80">
            <a href="#rooms" className="hover:text-white transition-colors">الغرف والأجنحة</a>
            <a href="#dining" className="hover:text-white transition-colors">المطاعم</a>
            <a href="#amenities" className="hover:text-white transition-colors">المرافق</a>
          </nav>
        </div>

        <a href="#" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <img src={logo} alt="لؤلؤة البدائع" className="h-20 md:h-24 w-auto object-contain transition-all duration-300" />
        </a>

        <div className="flex items-center gap-4">
          <a href="tel:+966123456789" className="hidden md:block font-sans text-sm text-white/80 hover:text-white transition-colors" dir="ltr">
            +966 55 200 2650
          </a>
          <MagneticButton>
            <button className="bg-white text-black px-6 py-2 rounded-full font-sans font-medium text-sm hover:bg-accent hover:text-white transition-colors">
              احجز الآن
            </button>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
