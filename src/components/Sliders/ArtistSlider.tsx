import { FC } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from '../../pages/Home/Sections/Skeleton'
import Slider from './Slider'

export type TArtist = {
	id: number
	name: string
	picture_big: string
	link: string
	trackList: string
	nb_fan: number
}

const ArtistsSlider: FC<{ items: TArtist[]; isLoading: boolean }> = ({
	items,
	isLoading,
}) => {
	const skeletons: TArtist[] = Array.from({ length: 10 }, (_, index) => ({
		id: index,
		name: '',
		picture_big: '',
		link: '',
		trackList: '',
		nb_fan: 0,
	}))
	return (
		<Slider
			items={isLoading ? skeletons : items}
			renderItem={artist =>
				isLoading ? (
					<Skeleton />
				) : (
					<Link to={`/artists/${artist.id}`}>
						<div className='bg-[#e0aaff] rounded-md shadow-md w-[250px] h-[300px] text-center'>
							<div>
								<img
									src={artist.picture_big}
									alt={artist.name}
									className='w-full h-[200px] object-cover rounded-md'
								/>
							</div>

							<h3 className='text-center mt-4 text-lg font-semibold'>
								{artist.name}
							</h3>
						</div>
					</Link>
				)
			}
		/>
	)
}

export default ArtistsSlider
