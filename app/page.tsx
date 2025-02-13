import Top10Artists from '@/components/top10Artists'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import UserGrowthChart from '@/components/userGrowthChart'
import { type FC } from 'react'

const HomePage: FC = () => {
	return (
		<main className='w-full p-4 sm:p-6 md:p-8 flex flex-col gap-6'>
			<div className='w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-2 lg:grid-rows-1 gap-6'>
				<div className='w-full lg:col-span-2 flex flex-col gap-6'>
					<div className='w-full p-0.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 grid-row-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-2 gap-6'>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='h-4 w-4 text-muted-foreground'
								>
									<path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>$45,231.89</div>
								<p className='text-xs text-muted-foreground'>+20.1% from last month</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Subscriptions</CardTitle>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='h-4 w-4 text-muted-foreground'
								>
									<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
									<circle cx='9' cy='7' r='4' />
									<path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+2350</div>
								<p className='text-xs text-muted-foreground'>+180.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Sales</CardTitle>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='h-4 w-4 text-muted-foreground'
								>
									<rect width='20' height='14' x='2' y='5' rx='2' />
									<path d='M2 10h20' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+12,234</div>
								<p className='text-xs text-muted-foreground'>+19% from last month</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Active Now</CardTitle>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='h-4 w-4 text-muted-foreground'
								>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+573</div>
								<p className='text-xs text-muted-foreground'>+201 since last hour</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Subscriptions</CardTitle>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='h-4 w-4 text-muted-foreground'
								>
									<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
									<circle cx='9' cy='7' r='4' />
									<path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+2350</div>
								<p className='text-xs text-muted-foreground'>+180.1% from last month</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
								<CardTitle className='text-sm font-medium'>Sales</CardTitle>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='h-4 w-4 text-muted-foreground'
								>
									<rect width='20' height='14' x='2' y='5' rx='2' />
									<path d='M2 10h20' />
								</svg>
							</CardHeader>
							<CardContent>
								<div className='text-2xl font-bold'>+12,234</div>
								<p className='text-xs text-muted-foreground'>+19% from last month</p>
							</CardContent>
						</Card>
					</div>

					<UserGrowthChart />
				</div>
				<div className='w-full'>
					<Top10Artists />
				</div>
			</div>
		</main>
	)
}

export default HomePage
