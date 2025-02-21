import { FC } from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

export type TArtist = {
	id: number
	name: string
	picture_big: string
	link: string
	trackList: string
}

const ArtistsSlider: FC<{ items: TArtist[] }> = ({ items }) => {
	return (
		<Slider
			items={items}
			renderItem={artist => (
				<Link to='/'>
					<div className='bg-gray-200 p-4 rounded-xl shadow-lg w-[250px] h-[300px]  text-center'>
						<img
							src={artist.picture_big}
							alt={artist.name}
							className='w-full h-[200px] object-cover rounded-lg'
						/>
						<h3 className='text-center mt-4 text-lg font-semibold'>
							{artist.name}
						</h3>
					</div>
				</Link>
			)}
		/>
	)
}

export default ArtistsSlider
