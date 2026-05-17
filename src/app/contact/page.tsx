import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Daryeel Rural Development For Action — for donations, volunteering, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
