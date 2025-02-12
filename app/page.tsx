import { type FC } from 'react'

const HomePage: FC = () => {
	return (
		<main className='w-full p-4 sm:p-6 md:p-8 flex flex-col gap-6'>
			<div className='w-full grid grid-cols-1 lg:grid-cols-3 grid-rows-2 lg:grid-rows-1 gap-6'>
				<div className='w-full col-span-2 flex flex-col gap-6'>
					<div className='w-full p-0.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 grid-row-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-3 xl:grid-rows-2 gap-6'>
						<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
						<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
						<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
						<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
						<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
						<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
					</div>

					<div className='w-full aspect-video shadow rounded-xl bg-white'></div>
				</div>

				<div className='w-full h-full bg-red-500'></div>
			</div>
		</main>
	)
}

export default HomePage
