import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import uz from "../../../../locales/uz.json";

export const metadata: Metadata = {
  title: uz.about.metaTitle,
  description: uz.about.metaDescription,
};

export default function Page() {
  return <AboutClient />;
}
