import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { Hero } from "@/components/Hero";
import { MiniCta } from "@/components/MiniCta";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services mode="preview" />
      <Pricing mode="full" />
      <Audience />
      <MiniCta />
    </>
  );
}
