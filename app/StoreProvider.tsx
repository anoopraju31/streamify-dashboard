'use client'

import { type FC, type ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, type AppStore } from '@/lib/store'

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
