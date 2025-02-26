import { FC } from 'react'
import Skeleton from '../../pages/Home/Sections/Skeleton'
import { TTracks } from '../../types/MainTypes'
import TrackCard from '../TrackCard'
import Slider from './Slider'

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
			link: '',
			picture_big: '',
			nb_album: 0,
			nb_fan: 0,
			tracklist: '',
		},
	}))

	return (
		<Slider
			items={isLoading ? skeletons : items}
			renderItem={tracks =>
				isLoading ? <Skeleton /> : <TrackCard {...tracks} />
			}
		/>
	)
}

export default TrackSlider
