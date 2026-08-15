import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
import GaTag from '@/components/GaTag'
import Fab from '@/components/fab/Fab'
import './globals.css'

export const metadata = {
  openGraph: {
    images: [{ url: 'https://start.manehair.com/wp-content/uploads/2025/12/Asset_1Mane-NewLogo.png', width: 1016, height: 239, alt: 'Mane Center for Hair Restoration' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta pixel removed 2026-08-15, same change and same reason as the GTM
            container: it fired on landing pages that collect patient contact details
            and hair-loss intent, and Meta will not sign a BAA. */}
</head>
      <body>
          <GaTag />
        <Fab client="mane" />
        <DniSwap />
        {children}
      </body>
    </html>
  )
}
