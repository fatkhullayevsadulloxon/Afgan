import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import uz from "../../../../locales/uz.json";

export const metadata: Metadata = {
  title: uz.pricing.metaTitle,
  description: uz.pricing.metaDescription,
};

export default function Page() {
  return <PricingClient />;
}
