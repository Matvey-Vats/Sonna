import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TArtist } from '../../components/Sliders/ArtistSlider'
import { IAlbum, TTracks } from '../../types/MainTypes'

interface SearchState {
	query: string
	data: TArtist[] & IAlbum[] & TTracks[]
}

const initialState: SearchState = {
	query: '',
	data: [],
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchResults(state, action: PayloadAction<SearchState>) {
			state.query = action.payload.query
			state.data = action.payload.data
		},
	},
})

export const { setSearchResults } = searchSlice.actions
export default searchSlice.reducer
