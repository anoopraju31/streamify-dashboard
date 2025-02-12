'use client'

import { type FC, type ReactNode, useRef } from 'react'
import { makeStore, type AppStore } from '@/lib/store'
import { Provider } from 'react-redux'

type Props = {
	children: ReactNode
}

const StoreProvider: FC<Props> = ({ children }) => {
	const storeRef = useRef<AppStore | null>(null)

    // * Create the store instance the first time this renders
	if (!storeRef.current) storeRef.current = makeStore()

	return <Provider store={storeRef.current}>{children}</Provider>
}

export default StoreProvider
