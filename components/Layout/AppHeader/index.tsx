'use client'

import { type FC } from 'react'
import { useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const AppHeader: FC = () => {
	const { toggleSidebar, open } = useSidebar()
	return (
		<div
			className={cn(
				'w-full h-16 p-6 flex justify-between items-center gap-6 bg-white border-b',
				!open && 'pl-0 py-0'
			)}
		>
			<div className='flex items-center gap-6'>
				{!open && (
					<Link
						href='/'
						className='w-64 h-16 flex justify-center items-center text-3xl font-semibold text-gray-950 border-r'
					>
						Streamify
					</Link>
				)}
				<div className='text-xl font-medium text-gray-950'>Hello Anoop</div>
			</div>

			<Button onClick={toggleSidebar} variant='ghost' className='w-12 h-12 text-gray-950 rounded-full p-2'>
				<Menu size={40} className='flex-shrink-0' />
			</Button>
		</div>
	)
}

export default AppHeader
