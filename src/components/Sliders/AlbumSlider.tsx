import { FC } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../../pages/Home/Sections/Skeleton'
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

const AlbumSlider: FC<{ items: TAlbum[]; isLoading: boolean }> = ({
	items,
	isLoading,
}) => {
	const skeletons: TAlbum[] = Array.from({ length: 10 }, (_, index) => ({
		id: index,
		title: '',
		link: '',
		cover_big: '',
		tracklist: '',
		artist: [],
	}))
	return (
		<Slider
			items={isLoading ? skeletons : items}
			renderItem={album =>
				isLoading ? (
					<Skeleton />
				) : (
					<Link to='/'>
						<div className='bg-[#e0aaff] rounded-md shadow-lg w-[250px] h-[300px] text-center'>
							<img
								src={album?.cover_big}
								alt={album?.title}
								className='w-full h-[200px] object-cover rounded-md'
							/>
							<h3 className='text-center mt-4 text-lg font-semibold'>
								{album?.title}
							</h3>
						</div>
					</Link>
				)
			}
		/>
	)
}

export default AlbumSlider
