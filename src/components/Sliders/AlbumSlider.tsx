import { FC } from 'react'
import Skeleton from '../../pages/Home/Sections/Skeleton'
import AlbumCard from '../AlbumCard'
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
					<AlbumCard
						{...album}
						name={album.title}
						picture_big={album.cover_big}
					/>
				)
			}
		/>
	)
}

export default AlbumSlider
