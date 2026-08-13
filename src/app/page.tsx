import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Stages } from "@/components/Stages";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Stages />
        <Results />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
