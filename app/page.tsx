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
import EndeksBanner from "@/components/EndeksBanner";
import EndeksAnnouncement from "@/components/EndeksAnnouncement";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex flex-col bg-white">
        <Hero />

        <section id="ne-yapiyoruz" className="scroll-mt-24">
          <FeatureCards />
        </section>

        <section id="hakkimizda" className="scroll-mt-24">
          <AboutSection />
        </section>

        <section id="baskandan-mesaj" className="scroll-mt-24">
          <PresidentMessage />
        </section>

        <EndeksBanner />
        <EndeksAnnouncement />

        <section id="neden" className="scroll-mt-24">
          <WhySection />
        </section>

        <section id="endeks" className="scroll-mt-24">
          <TrustSection />
        </section>

        <section id="surec" className="scroll-mt-24">
          <Timeline />
        </section>

        <section id="sss" className="scroll-mt-24">
          <FaqAccordion />
        </section>

        <section id="iletisim" className="scroll-mt-24">
          <Footer />
        </section>
      </main>
    </>
  );
}
