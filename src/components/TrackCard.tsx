import { Play } from 'lucide-react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setTrack } from '../redux/slices/playerSlice'

type PropsTypes = {
	title: string
	md5_image: string
	preview: string
}

const TrackCard: FC<PropsTypes> = ({ title, md5_image, preview }) => {
	const dispatch = useDispatch()

	const handleTrackClick = (trackUrl: string) => {
		dispatch(setTrack({ currentTrack: trackUrl, currentTrackName: title }))
	}
	return (
		<div
			onClick={() => handleTrackClick(preview)}
			className='bg-[#e0aaff] rounded-md shadow-lg w-[250px] h-[300px] text-center'
		>
			<div className='relative group'>
				<img
					src={`https://e-cdns-images.dzcdn.net/images/cover/${md5_image}/500x500-000000-80-0-0.jpg`}
					alt={title}
					className='w-full h-[200px] object-cover rounded-md transition-opacity duration-300 group-hover:opacity-70'
				/>
				<Play
					size={30}
					className='w-10 h-10 text-black absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
				/>
			</div>

			<h3 className='text-center mt-4 text-lg font-semibold'>{title}</h3>
		</div>
	)
}

export default TrackCard
