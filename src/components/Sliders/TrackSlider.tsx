import { Play } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../../pages/Home/Sections/Skeleton'
import { TArtist } from './ArtistSlider'
import Slider from './Slider'

type TTracks = {
	id: number
	title: string
	md5_image: string
	link: string
	preview: string
	artist: TArtist
}

const TrackSlider: FC<{ items: TTracks[]; isLoading: boolean }> = ({
	items,
	isLoading,
}) => {
	const skeletons: TTracks[] = Array.from({ length: 10 }, (_, index) => ({
		id: index,
		title: '',
		md5_image: '',
		link: '',
		preview: '',
		artist: {
			id: index,
			name: '',
			picture_big: '',
			link: '',
			trackList: '',
		},
	}))
	return (
		<Slider
			items={isLoading ? skeletons : items}
			renderItem={tracks =>
				isLoading ? (
					<Skeleton />
				) : (
					<Link to='/'>
						<div className='bg-[#e0aaff] rounded-md shadow-lg w-[250px] h-[300px] text-center'>
							<div className='relative group'>
								<img
									src={`https://e-cdns-images.dzcdn.net/images/cover/${tracks.md5_image}/500x500-000000-80-0-0.jpg`}
									alt={tracks.title}
									className='w-full h-[200px] object-cover rounded-md transition-opacity duration-300 group-hover:opacity-70'
								/>
								<Play
									size={30}
									className='w-10 h-10 text-black absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'
								/>
							</div>

							<h3 className='text-center mt-4 text-lg font-semibold'>
								{tracks.title}
							</h3>
						</div>
					</Link>
				)
			}
		/>
	)
}

export default TrackSlider
