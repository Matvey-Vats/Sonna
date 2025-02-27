import {
	Pause,
	Play,
	SkipBack,
	SkipForward,
	Volume2,
	VolumeX,
} from 'lucide-react'
import { ChangeEvent, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	setCurrentTime,
	setDuration,
	setVolume,
	togglePlay,
} from '../../redux/slices/playerSlice'
import { AppDispatch, RootState } from '../../redux/store'

const Player = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const dispatch = useDispatch<AppDispatch>()
	const {
		isPlaying,
		currentTrack,
		currentTrackName,
		currentTime,
		duration,
		volume,
	} = useSelector((state: RootState) => state.player)

	useEffect(() => {
		if (currentTrack && audioRef.current) {
			audioRef.current.src = currentTrack
			audioRef.current.load()
			audioRef.current.ontimeupdate = () =>
				dispatch(setCurrentTime(audioRef.current!.currentTime))
			audioRef.current.onloadedmetadata = () =>
				dispatch(setDuration(audioRef.current!.duration))

			if (isPlaying) {
				audioRef.current.play()
			} else {
				audioRef.current.pause()
			}
		}
	}, [currentTrack, dispatch])

	const togglePlayHandler = () => {
		dispatch(togglePlay())
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
		}
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const volumeValue = Number(e.target.value)
		if (audioRef.current) {
			audioRef.current.volume = volumeValue
		}
		dispatch(setVolume(volumeValue))
	}

	const handleVolumeOff = () => {
		if (audioRef.current) {
			audioRef.current.volume = 0
		}
		dispatch(setVolume(0))
	}

	const handleVolumeOn = () => {
		if (audioRef.current) {
			audioRef.current.volume = 1
		}
		dispatch(setVolume(1))
	}

	const handleDurationChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newTime = Number(e.target.value)
		if (audioRef.current) {
			audioRef.current.currentTime = newTime
		}
		dispatch(setCurrentTime(newTime))
	}
	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0')
		return `${minutes}:${seconds}`
	}

	return (
		<div
			className={`${
				currentTrack === '' ? 'hidden' : ''
			} fixed bottom-0 left-[50%] transform -translate-x-[50%] w-[500px] bg-gray-900 p-4 flex flex-col items-center gap-4 z-50 px-6 shadow-lg rounded-t-2xl`}
		>
			<div className='text-white font-bold'>
				<h1>{currentTrackName}</h1>
			</div>
			<div className='flex gap-4 items-center'>
				<button className='hover:scale-110 transition-transform'>
					<SkipBack className='text-white w-6 h-6' />
				</button>
				<button
					onClick={togglePlayHandler}
					className='text-white hover:scale-110 transition-transform'
				>
					{isPlaying ? <Pause size={30} /> : <Play size={30} />}
				</button>
				<button className='hover:scale-110 transition-transform'>
					<SkipForward className='text-white w-6 h-6' />
				</button>
			</div>

			<div className='flex items-center justify-between w-full gap-x-3'>
				<span className='text-white text-sm w-10 text-right'>
					{formatTime(currentTime)}
				</span>
				<input
					type='range'
					min='0'
					onChange={handleDurationChange}
					max={duration || 1}
					value={currentTime}
					className='w-full h-1 bg-gray-600 rounded-lg appearance cursor-pointer accent-blue-500'
				/>
				<span className='text-white text-sm w-10'>{formatTime(duration)}</span>
			</div>

			<div className='flex items-center gap-2'>
				{volume > 0 ? (
					<Volume2 onClick={handleVolumeOff} className='text-white w-5 h-5' />
				) : (
					<VolumeX onClick={handleVolumeOn} className='text-white w-5 h-5' />
				)}

				<input
					type='range'
					min='0'
					max='1'
					step='0.01'
					value={volume}
					onChange={handleVolumeChange}
					className='w-[100px] h-1 bg-gray-600 rounded-lg appearance cursor-pointer accent-green-400'
				/>
			</div>

			<audio ref={audioRef}>
				{currentTrack && <source src={currentTrack} type='audio/mpeg' />}
			</audio>
		</div>
	)
}

export default Player
