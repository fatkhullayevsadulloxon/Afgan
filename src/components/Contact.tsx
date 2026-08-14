"use client";

import { FormEvent, useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/cn";
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  MAP_EMBED_SRC,
  PACKAGE_EVENT,
  type PackageId,
} from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PACKAGE_IDS: PackageId[] = [
  "basic",
  "business",
  "export",
  "representative",
  "other",
];

type FieldErrors = Partial<Record<"name" | "company" | "country" | "email" | "service", string>>;

export function Contact() {
  const { dict } = useLanguage();
  const form = dict.contact.form;
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const handler = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (PACKAGE_IDS.includes(id as PackageId)) setService(id);
    };
    window.addEventListener(PACKAGE_EVENT, handler);
    return () => window.removeEventListener(PACKAGE_EVENT, handler);
  }, []);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = form.required;
    if (!company.trim()) next.company = form.required;
    if (!country) next.country = form.required;
    if (!email.trim()) next.email = form.required;
    else if (!EMAIL_RE.test(email.trim())) next.email = form.emailInvalid;
    if (!service) next.service = form.required;
    return next;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    const payload = {
      name: name.trim(),
      company: company.trim(),
      country,
      email: email.trim(),
      service,
      message: message.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; fallback?: boolean };

      if (data.fallback) {
        const subject = encodeURIComponent(`${form.service}: ${service} — ${name}`);
        const body = encodeURIComponent(
          [
            `${form.name}: ${payload.name}`,
            `${form.company}: ${payload.company}`,
            `${form.country}: ${payload.country}`,
            `${form.email}: ${payload.email}`,
            `${form.service}: ${payload.service}`,
            "",
            payload.message,
          ].join("\n")
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }

      if (res.ok || data.fallback) {
        setStatus("success");
        setName("");
        setCompany("");
        setCountry("");
        setEmail("");
        setService("");
        setMessage("");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/35";

  return (
    <section id="contact" className="bg-cream py-10 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={dict.contact.title}
          intro={dict.contact.intro}
        />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <dl className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {dict.contact.addressLabel}
                  </dt>
                  <dd className="mt-2 leading-relaxed text-navy/70">
                    {dict.contact.address}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {dict.contact.phoneLabel}
                  </dt>
                  <dd className="mt-2 space-y-1 text-navy/70">
                    {CONTACT_PHONES.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-gold">
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 shrink-0 text-gold" size={20} strokeWidth={1.5} />
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {dict.contact.emailLabel}
                  </dt>
                  <dd className="mt-2">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-navy/70 hover:text-gold">
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-8 overflow-hidden border border-navy/10">
              <iframe
                title={dict.contact.mapTitle}
                src={MAP_EMBED_SRC}
                className="h-48 w-full grayscale contrast-125 md:h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <Field label={form.name} error={errors.name}>
              <input
                className={fieldClass}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </Field>
            <Field label={form.company} error={errors.company}>
              <input
                className={fieldClass}
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={form.country} error={errors.country}>
                <select
                  className={cn(fieldClass, "appearance-none")}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">{form.selectPlaceholder}</option>
                  <option value="uz">{form.countries.uz}</option>
                  <option value="af">{form.countries.af}</option>
                  <option value="other">{form.countries.other}</option>
                </select>
              </Field>
              <Field label={form.email} error={errors.email}>
                <input
                  className={fieldClass}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Field>
            </div>
            <Field label={form.service} error={errors.service}>
              <select
                className={cn(fieldClass, "appearance-none")}
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="">{form.selectPlaceholder}</option>
                {PACKAGE_IDS.map((id) => (
                  <option key={id} value={id}>
                    {form.services[id]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={form.message}>
              <textarea
                className={cn(fieldClass, "min-h-[140px] resize-y")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
            <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? form.sending : form.submit}
            </Button>
            {status === "success" ? (
              <p className="text-sm text-navy">{form.success}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-red-300">{form.error}</p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}
