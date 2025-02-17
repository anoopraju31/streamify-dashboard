import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@/features/appSlice'

export const makeStore = () => {
	return configureStore({
		reducer: {
			app: appReducer
		}
	})
}

// * Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// * Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStore = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
