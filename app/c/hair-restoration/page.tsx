import type { Metadata } from 'next'
import ManeLP from '@/components/ManeLP'

export const metadata: Metadata = {
  title: 'Hair Restoration | Mane Center for Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function Page() {
  return (
    <ManeLP
      heroFormId="N1p0JWn5Pp9feg7yg39q"
      bottomFormId="0MiKixh1rGsZd36D5QIl"
      h1="HAIR RESTORATION GUIDED BY A LICENSED PHYSICIAN"
      heroSub="Doctor-led evaluation and personalized treatment planning for thinning hair, in a professional clinical setting."
    />
  )
}
