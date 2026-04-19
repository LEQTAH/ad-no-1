import MagneticButton from '../ui/MagneticButton';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-32 bg-accent/10 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-4xl font-bold text-white mb-6">لؤلؤة البدائع</h3>
            <p className="font-sans text-white/50 mb-8 leading-relaxed">
              وجهتك المثالية لإقامة فاخرة وأصيلة في مكة المكرمة ، حيث نجمع بين الأصالة والخدمة العصرية.
            </p>
            <div className="flex items-center gap-4">
              <MagneticButton>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent hover:border-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent hover:border-accent transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-accent hover:border-accent transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-white font-bold mb-6 tracking-wider">روابط سريعة</h4>
            <ul className="space-y-4 font-sans text-white/50">
              <li><a href="#" className="hover:text-accent transition-colors">عن الفندق</a></li>
              <li><a href="#rooms" className="hover:text-accent transition-colors">الغرف والأجنحة</a></li>
              <li><a href="#dining" className="hover:text-accent transition-colors">المطاعم والمقاهي</a></li>
              <li><a href="#amenities" className="hover:text-accent transition-colors">المرافق والخدمات</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">العروض الخاصة</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-white font-bold mb-6 tracking-wider">تواصل معنا</h4>
            <ul className="space-y-4 font-sans text-white/50">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>طريق الملك عبدالعزيز، البدائع، مكة المكرمة ، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span dir="ltr">+966 55 200 250</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@luluatelbadaea.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-white font-bold mb-6 tracking-wider">النشرة البريدية</h4>
            <p className="font-sans text-white/50 mb-4">
              اشترك ليصلك أحدث العروض والأخبار الحصرية.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
              />
              <button 
                type="submit"
                className="absolute left-1 top-1 bottom-1 bg-accent hover:bg-green-700 text-white px-6 rounded-full font-sans text-sm transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} لؤلؤة البدائع. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
