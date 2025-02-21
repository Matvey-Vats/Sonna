import { FC } from 'react'
import { Link } from 'react-router-dom'
import { TArtist } from './ArtistSlider'
import Slider from './Slider'

type TAlbum = {
	id: number
	title: string
	link: string
	cover_big: string
	tracklist: string
	artist: TArtist[]
}

const AlbumSlider: FC<{ items: TAlbum[] }> = ({ items }) => {
	return (
		<Slider
			items={items}
			renderItem={album => (
				<Link to='/'>
					<div className='bg-gray-200 p-4 rounded-xl shadow-lg w-[250px] h-[300px] text-center'>
						<img
							src={album.cover_big}
							alt={album.title}
							className='w-full h-[200px] object-cover rounded-lg'
						/>
						<h3 className='text-center mt-4 text-lg font-semibold'>
							{album.title}
						</h3>
					</div>
				</Link>
			)}
		/>
	)
}

export default AlbumSlider
