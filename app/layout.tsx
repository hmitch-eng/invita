import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'INVITA — Your moment. Your invitation.',description:'Create beautiful interactive digital invitations in minutes.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}