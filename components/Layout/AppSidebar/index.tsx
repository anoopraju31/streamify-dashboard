'use client'

import { type ForwardRefExoticComponent, RefAttributes, type FC, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { AudioLines, ChevronsUpDown, LayoutDashboard, LogOut, type LucideProps, Palette, Users } from 'lucide-react'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'

type MenuItem = {
	title: string
	href: string
	Icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
}

const menuItems: MenuItem[] = [
	{
		title: 'Dashboard',
		href: '/',
		Icon: LayoutDashboard
	},
	{
		title: 'Artists',
		href: '/artists',
		Icon: Palette
	},
	{
		title: 'Songs',
		href: '/songs',
		Icon: AudioLines
	},
	{
		title: 'Users',
		href: '/users',
		Icon: Users
	}
]

type NavItemProps = MenuItem & {
	isActive?: boolean
}

const NavItem: FC<NavItemProps> = ({ title, href, Icon, isActive }) => {
	return (
		<Link
			href={href}
			className={cn(
				'flex items-center gap-2 text-gray-950 hover:text-gray-700 font-medium p-2 rounded-md hover:bg-gray-100 transition-colors duration-300',
				isActive && 'bg-gray-200 text-gray-700 hover:bg-gray-200'
			)}
		>
			<Icon />
			<div> {title} </div>
		</Link>
	)
}

const UserMenu: FC = () => {
	const [open, setOpen] = useState(false)
	const handleChange = (value: boolean) => setOpen(value)
	const handleClose = () => setOpen(false)

	return (
		<Popover open={open} onOpenChange={handleChange}>
			<PopoverTrigger asChild>
				<Button
					variant='ghost'
					className={cn(
						'w-full h-full flex items-center gap-2 text-gray-950 hover:text-gray-700 font-medium p-2 rounded-md hover:bg-gray-100 transition-colors duration-300',
						open && 'text-gray-700 bg-gray-200 hover:bg-gray-200'
					)}
				>
					<Avatar>
						<AvatarImage src='/shadcn.jpg' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div className='flex-1 flex flex-col gap-0.5 text-left'>
						<span className='text-sm font-medium truncate'> Anoop Raju </span>
						<span className='text-xs truncate'> anoop@gmail.com </span>
					</div>

					<ChevronsUpDown />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-52 px-0 py-2 bg-white shadow flex flex-col gap-2'>
				<div className='mx-2 flex items-center gap-2'>
					<Avatar>
						<AvatarImage src='/shadcn.jpg' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<div className='flex-1 flex flex-col gap-0.5 text-left'>
						<span className='text-sm font-medium truncate'> Anoop Raju </span>
						<span className='text-xs truncate'> anoop@gmail.com </span>
					</div>
				</div>
				<Separator className='w-full' />
				<Button
					onClick={handleClose}
					variant='ghost'
					className='mx-2 flex items-center justify-start gap-2 text-red-500 hover:text-red-700 font-medium p-2 rounded-md hover:bg-red-100 transition-colors duration-300'
				>
					<LogOut />
					<span> Logout </span>
				</Button>
			</PopoverContent>
		</Popover>
	)
}

const AppSidebar: FC = () => {
	const pathname = usePathname()
	const { setOpen } = useSidebar()

	useEffect(() => {
		const handleResize = () => setOpen(window.innerWidth > 1280)
		handleResize()

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<Sidebar variant='sidebar' className='bg-white flex flex-col'>
			<SidebarHeader className='px-6 h-16 flex justify-center items-center border-b bg-white'>
				<Link href='/' className='text-3xl font-semibold text-gray-950'>
					Streamify
				</Link>
			</SidebarHeader>

			<SidebarContent className='flex-1 bg-white p-6'>
				<SidebarMenu>
					{menuItems.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<NavItem {...item} isActive={pathname === item.href} />
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>

			<SidebarFooter className='p-6 bg-white'>
				<UserMenu />
			</SidebarFooter>
		</Sidebar>
	)
}

export default AppSidebar
