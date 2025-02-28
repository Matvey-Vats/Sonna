import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITrack {
	id: number
	title: string
	cover_big: string
	preview: string
}

interface IArtist {
	id: number
	name: string
	picture_big: string
}

interface IAlbum {
	id: number
	title: string
	cover_big: string
}

interface IPLaylist {
	id: number
	name: string
	picture_big: string
}

interface FavoriteState {
	tracks: ITrack[]
	artists: IArtist[]
	albums: IAlbum[]
	playlists: IPLaylist[]
}

const loadFavorites = (): FavoriteState => {
	const storedFavorites = localStorage.getItem('favorites')
	return storedFavorites
		? JSON.parse(storedFavorites)
		: { tracks: [], artists: [], albums: [], playlists: [] }
}

const initialState: FavoriteState = loadFavorites()

interface AddToFavoritesPayload {
	type: keyof FavoriteState
	item: ITrack | IArtist | IAlbum | IPLaylist
}

interface RemoveFromFavoritesPayload {
	type: keyof FavoriteState
	id: number
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites(state, action: PayloadAction<AddToFavoritesPayload>) {
			const { type, item } = action.payload
			if (type === 'tracks') {
				state.tracks.push(item as ITrack)
			} else if (type === 'artists') {
				state.artists.push(item as IArtist)
			} else if (type === 'albums') {
				state.albums.push(item as IAlbum)
			} else if (type === 'playlists') {
				state.playlists.push(item as IPLaylist)
			}

			localStorage.setItem('favorites', JSON.stringify(state))
		},
		removeFromFavorites(
			state,
			action: PayloadAction<RemoveFromFavoritesPayload>
		) {
			const { type, id } = action.payload
			if (type === 'tracks') {
				state.tracks = state.tracks.filter(item => item.id !== id)
			} else if (type === 'artists') {
				state.artists = state.artists.filter(item => item.id !== id)
			} else if (type === 'albums') {
				state.albums = state.albums.filter(item => item.id !== id)
			} else if (type === 'playlists') {
				state.playlists = state.playlists.filter(item => item.id !== id)
			}
			localStorage.setItem('favorites', JSON.stringify(state))
		},
	},
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export const isItemFavorites = (
	state: FavoriteState,
	type: keyof FavoriteState,
	id: number
) => {
	return state[type].some(item => item.id === id)
}

export default favoritesSlice.reducer
