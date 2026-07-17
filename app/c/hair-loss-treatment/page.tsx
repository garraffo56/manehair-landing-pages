import type { Metadata } from 'next'
import ManeLP from '@/components/ManeLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.manehair.com/og/c-hair-loss-treatment.webp", width: 1200, height: 630, alt: "Hair loss treatment options at Mane Center for Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://more.manehair.com/og/c-hair-loss-treatment.webp"] },
  title: 'Hair Loss Treatment Options | Mane Center for Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <ManeLP
      heroFormId="N1p0JWn5Pp9feg7yg39q"
      bottomFormId="0MiKixh1rGsZd36D5QIl"
      h1="HAIR LOSS TREATMENT PLANNING, LED BY A PHYSICIAN"
      heroSub="An evaluation-first approach: understand the cause, then review medically appropriate treatment options."
    />
  )
}
