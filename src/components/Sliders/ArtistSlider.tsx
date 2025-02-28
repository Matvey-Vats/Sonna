import { FC } from 'react'
import Skeleton from '../../pages/Home/Sections/Skeleton'
import ArtistCard from '../ArtistCard'
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
				isLoading ? <Skeleton /> : <ArtistCard {...artist} />
			}
		/>
	)
}

export default ArtistsSlider
