// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface IGenre {
// 	id: number
// 	name: string
// }

// export interface IArtist {
// 	id: number
// 	name: string
// 	link: string
// 	picture_big: string
// 	nb_album: number
// 	nb_fan: number
// 	tracklist: string
// }

// interface IAlbum {
// 	id: number
// 	title: string
// 	link: string
// 	cover_big: string
// 	genres: IGenre[]
// 	duration: number
// 	fans: number
// 	tracklist: string
// 	artist: IArtist
// }

// interface IAlbumState {
// 	list: IAlbum[]
// }

// const initialState: IAlbumState = {
// 	list: [],
// }

// export const albumsSlice = createSlice({
// 	name: 'albums',
// 	initialState,
// 	reducers: {
// 		setAlbums(state, action: PayloadAction<IAlbum[]>) {
// 			state.list = action.payload
// 		},
// 	},
// })

// export const { setAlbums } = albumsSlice.actions

// export default albumsSlice.reducer
