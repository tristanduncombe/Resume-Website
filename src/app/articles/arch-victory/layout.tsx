import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrating Victory at the 2024 EAIT Hackathon',
  description: 'Our 8 hour Journey to Victory.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
