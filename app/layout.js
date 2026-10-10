import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'WAF Demo',
  description: 'Level 3 WAF Protected',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
