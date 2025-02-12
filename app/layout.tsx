import type { Metadata } from 'next'
import { Geist, Geist_Mono, Sono } from 'next/font/google'
import StoreProvider from './StoreProvider'
import { SidebarProvider } from '@/components/ui/sidebar'
import './globals.css'
import Layout from '@/components/Layout'
import { cn } from '@/lib/utils'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

const sono = Sono({
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800']
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
				<body className={cn(sono.className, 'antialiased')}>
					<SidebarProvider>
						<Layout>{children}</Layout>
					</SidebarProvider>
				</body>
			</StoreProvider>
		</html>
	)
}
