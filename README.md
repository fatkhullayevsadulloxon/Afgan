# Ўзбекистон Бизнес уйи

Қобулдаги ягона хизматлар маркази учун расмий лендинг. Next.js 14, TypeScript, Tailwind CSS. Тиллар: UZ / RU / EN (клиент томонида, маршрут ўзгармайди).

```bash
npm install
npm run dev
```

Очинг: [http://localhost:3000](http://localhost:3000)

## Алоқа формаси (email)

`.env.example` ни `.env.local` га нусхаланг:

```
RESEND_API_KEY=
RESEND_FROM=Uzbekistan Business House <noreply@your-domain.com>
CONTACT_EMAIL=info@uzbusinesshouse.uz
NEXT_PUBLIC_SITE_URL=https://uzbusinesshouse.uz
```

`RESEND_API_KEY` бўлмаса, форма `mailto:` орқали почта клиентини очади.

## Deploy

```bash
npx vercel
```
