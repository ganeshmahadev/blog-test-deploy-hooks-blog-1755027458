import './globals.css'

export const metadata = {
  title: 'Test Deploy Hooks Blog',
  description: 'This is a test blog post to verify our deploy hooks are working correctly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
