import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	isSidebarOpen: boolean
}

const initialState: InitialState = {
	isSidebarOpen: true
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen
		},
		openSidebar: (state) => {
			state.isSidebarOpen = true
		},
		closeSidebar: (state) => {
			state.isSidebarOpen = false
		}
	}
})

export const { toggleSidebar, openSidebar, closeSidebar } = appSlice.actions
export default appSlice.reducer
