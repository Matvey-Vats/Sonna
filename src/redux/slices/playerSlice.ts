import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlayerState = {
	isPlaying: boolean
	currentTrack: string
	currentTrackName: string
	currentTime: number
	duration: number
	volume: number
}

const initialState: PlayerState = {
	isPlaying: false,
	currentTrack: '',
	currentTrackName: '',
	currentTime: 0,
	duration: 0,
	volume: 1,
}
const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setTrack(
			state,
			action: PayloadAction<{ currentTrack: string; currentTrackName: string }>
		) {
			state.currentTrack = action.payload.currentTrack
			state.currentTrackName = action.payload.currentTrackName
			state.currentTime = 0
			state.isPlaying = true
		},
		togglePlay(state) {
			state.isPlaying = !state.isPlaying
		},
		setCurrentTime(state, action: PayloadAction<number>) {
			state.currentTime = action.payload
		},
		setDuration(state, action: PayloadAction<number>) {
			state.duration = action.payload
		},
		setVolume(state, action: PayloadAction<number>) {
			state.volume = action.payload
		},
		pauseTrack(state) {
			state.isPlaying = false
		},
	},
})

export const {
	setTrack,
	togglePlay,
	setCurrentTime,
	setDuration,
	setVolume,
	pauseTrack,
} = playerSlice.actions

export default playerSlice.reducer
