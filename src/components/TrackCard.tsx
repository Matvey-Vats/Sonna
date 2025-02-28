import { Play } from 'lucide-react'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setTrack } from '../redux/slices/playerSlice'
import { AppDispatch } from '../redux/store'
import FavoriteButton from './FavoriteButton'

type PropsTypes = {
	id: number
	title: string
	md5_image: string
	preview: string
}

const TrackCard: FC<PropsTypes> = ({ id, title, md5_image, preview }) => {
	const dispatch = useDispatch<AppDispatch>()

	const handleTrackClick = (trackUrl: string) => {
		dispatch(setTrack({ currentTrack: trackUrl, currentTrackName: title }))
	}
	return (
		<div className='bg-pink-900 rounded-md shadow-lg w-[250px] h-[300px] text-center'>
			<div onClick={() => handleTrackClick(preview)} className='relative group'>
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

			<div className='flex items-center justify-center mt-4 p-2'>
				<h3 className='text-center text-lg font-semibold mr-4'>{title}</h3>
				<FavoriteButton
					id={id}
					title={title}
					cover_big={md5_image}
					preview={preview}
					type={'tracks'}
				/>
			</div>
		</div>
	)
}

export default TrackCard
