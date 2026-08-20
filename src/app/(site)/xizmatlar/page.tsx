import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import uz from "../../../../locales/uz.json";

export const metadata: Metadata = {
  title: uz.services.metaTitle,
  description: uz.services.metaDescription,
};

export default function Page() {
  return <ServicesClient />;
}
