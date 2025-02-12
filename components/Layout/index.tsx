import { type ReactNode, type FC } from 'react'
import AppSidebar from './AppSidebar'
import AppHeader from './AppHeader'

type Props = {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className='w-full min-h-screen'>
			<div className='w-full flex flex-row'>
				<AppSidebar />
				<div className='w-full flex flex-col'>
					<AppHeader />

					<div className='w-full'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Layout
