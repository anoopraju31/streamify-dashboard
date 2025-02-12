import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import StoreProvider from './StoreProvider'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Streamify | Dashboard',
	description: 'Unleash the Rhythm, Elevate Your Sound.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<StoreProvider>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
			</StoreProvider>
		</html>
	)
}
