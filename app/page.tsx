import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import TrustSection from "@/components/TrustSection";
import Timeline from "@/components/Timeline";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import PresidentMessage from "@/components/PresidentMessage";

// Bunları kullanmıyorsan import etme (warning verir)
// import StickyLaunchBar from "@/components/StickyLaunchBar";
// import LaunchChip from "@/components/LaunchChip";

export default function HomePage() {
  return (
    <>
      {/* Header: sticky olduğu için main dışına alıyoruz */}
      <Header />

      <main className="flex flex-col bg-white">
        {/* HERO genelde en üst */}
        <Hero />

        {/* Ne Yapıyoruz? */}
        <section id="ne-yapiyoruz" className="scroll-mt-24">
          <FeatureCards />
        </section>

        {/* Hakkımızda */}
        <section id="hakkimizda" className="scroll-mt-24">
          <AboutSection />
        </section>

        <section id="baskandan-mesaj" className="scroll-mt-24">
  <PresidentMessage />
</section>


        {/* Neden Bu Çalışma? */}
        <section id="neden" className="scroll-mt-24">
          <WhySection />
        </section>

        {/* Endeks */}
        <section id="endeks" className="scroll-mt-24">
          <TrustSection />
        </section>

        {/* Süreç */}
        <section id="surec" className="scroll-mt-24">
          <Timeline />
        </section>

        {/* SSS */}
        <section id="sss" className="scroll-mt-24">
          <FaqAccordion />
        </section>

        {/* İletişim: Footer'a id vererek menüden buraya iner */}
        <section id="iletisim" className="scroll-mt-24">
          <Footer />
        </section>
      </main>
    </>
  );
}
