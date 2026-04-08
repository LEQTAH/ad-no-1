/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/ui/CustomCursor';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Showcase from './components/sections/Showcase';
import Amenities from './components/sections/Amenities';
import Dining from './components/sections/Dining';
import Offers from './components/sections/Offers';
import Gallery from './components/sections/Gallery';
import WhyUs from './components/sections/WhyUs';
import Footer from './components/layout/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-background min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <div id="rooms">
        <Showcase />
      </div>
      <Amenities />
      <Dining />
      <Offers />
      <Gallery />
      <WhyUs />
      <Footer />
    </main>
  );
}
