import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import uz from "../../../../locales/uz.json";

export const metadata: Metadata = {
  title: uz.contact.metaTitle,
  description: uz.contact.metaDescription,
};

export default function Page() {
  return <ContactClient />;
}
