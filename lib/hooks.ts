import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootStore } from './store'

// * Use throughout the app instead of plain `useDispatch` and `useSelector`.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootStore>()
export const useAppStore = useStore.withTypes<AppStore>()
