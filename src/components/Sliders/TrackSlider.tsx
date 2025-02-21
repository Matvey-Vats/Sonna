import { FC } from 'react'
import { Link } from 'react-router-dom'
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

const TrackSlider: FC<{ items: TTracks[] }> = ({ items }) => {
	return (
		<Slider
			items={items}
			renderItem={tracks => (
				<Link to='/'>
					<div className='bg-gray-200 p-4 rounded-xl shadow-lg w-[250px] h-[300px] text-center'>
						<img
							src={`https://e-cdns-images.dzcdn.net/images/cover/${tracks.md5_image}/500x500-000000-80-0-0.jpg
`}
							alt={tracks.title}
							className='w-full h-[200px] object-cover rounded-lg'
						/>
						<h3 className='text-center mt-4 text-lg font-semibold'>
							{tracks.title}
						</h3>
					</div>
				</Link>
			)}
		/>
	)
}

export default TrackSlider
