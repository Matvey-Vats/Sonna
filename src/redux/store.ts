import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumsApi } from './api/albumsApi'
import { artistsApi } from './api/artistsApi'
import { baseApi } from './api/baseApi'
import { playlistsApi } from './api/playlistsApi'
import { searchApi } from './api/searchApi'
import auth from './slices/authSlice'
import favorites from './slices/favoritesSlice'
import player from './slices/playerSlice'
import search from './slices/searchSlice'

export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer,
		search,
		player,
		auth,
		favorites,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(
			baseApi.middleware,
			albumsApi.middleware,
			artistsApi.middleware,
			playlistsApi.middleware,
			searchApi.middleware
		),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
