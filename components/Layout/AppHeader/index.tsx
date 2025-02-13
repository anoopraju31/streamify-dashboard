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
				'w-full h-16 px-4 sm:px-6 md:px-8 py-6 flex justify-between items-center gap-4 md:gap-6 bg-white border-b sticky top-0 right-0 left-0 z-50',
				!open && 'lg:pl-0 lg:py-0'
			)}
		>
			<div className='flex items-center gap-4 md:gap-6'>
				{!open && (
					<Link
						href='/'
						className='w-fit lg:w-64 lg:h-16 flex justify-center items-center text-3xl font-semibold text-gray-950 lg:border-r'
					>
						Streamify
					</Link>
				)}
				<div className=' hidden lg:block text-xl font-medium text-gray-950'>Hello Anoop</div>
			</div>

			<Button onClick={toggleSidebar} variant='ghost' className='w-12 h-12 text-gray-950 rounded-full p-2'>
				<Menu size={40} className='flex-shrink-0' />
			</Button>
		</div>
	)
}

export default AppHeader
