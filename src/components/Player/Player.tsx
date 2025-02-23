import {
	Pause,
	Play,
	SkipBack,
	SkipForward,
	Volume2,
	VolumeX,
} from 'lucide-react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

const Player = ({ track }: { track: string }) => {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [volume, setVolume] = useState(1)

	useEffect(() => {
		if (!track) {
			console.error('Error: path to audio file is empty.')
			return
		}
		const audio = audioRef.current
		if (audio) {
			audio.src = track
			audio.load()
			audio.ontimeupdate = () => setCurrentTime(audio.currentTime)
			audio.onloadedmetadata = () => setDuration(audio.duration)
		}
	}, [track])

	const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
		if (audioRef.current) {
			audioRef.current.currentTime = Number(e.target.value)
			setCurrentTime(Number(e.target.value))
		}
	}
	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const volumeValue = Number(e.target.value)
		if (audioRef.current) {
			audioRef.current.volume = volumeValue
		}
		setVolume(volumeValue)
	}

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0')
		return `${minutes}:${seconds}`
	}

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}
	return (
		<div className='fixed bottom-0 left-[50%] transform -translate-x-[50%] w-[500px] bg-gray-900 p-4 flex flex-col items-center gap-4 z-50 px-6 shadow-lg rounded-t-2xl'>
			<div className='flex gap-4 items-center'>
				<button className='hover:scale-110 transition-transform'>
					<SkipBack className='text-white w-6 h-6' />
				</button>
				<button
					onClick={togglePlay}
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
					max={duration || 1}
					value={currentTime}
					onChange={handleSeek}
					className='w-full h-1 bg-gray-600 rounded-lg appearance cursor-pointer accent-blue-500'
				/>
				<span className='text-white text-sm w-10'>{formatTime(duration)}</span>
			</div>

			<div className='flex items-center gap-2'>
				{volume > 0 ? (
					<Volume2
						onClick={() => setVolume(0)}
						className='text-white w-5 h-5'
					/>
				) : (
					<VolumeX
						onClick={() => setVolume(100)}
						className='text-white w-5 h-5'
					/>
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
				<source src={track} type='audio/mpeg' />
				<source src={track.replace('.mp3', '.ogg')} type='audio/ogg' />
			</audio>
		</div>
	)
}

export default Player
