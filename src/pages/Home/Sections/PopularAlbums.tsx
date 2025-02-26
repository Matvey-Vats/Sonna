import { FC } from 'react'
import { Link } from 'react-router-dom'
import AlbumSlider from '../../../components/Sliders/AlbumSlider'
import { useGetTopChartsQuery } from '../../../redux/api/apiSlice'
import { IAlbum } from '../../../types/MainTypes'

type PropsTypes = {
	items: IAlbum[]
	isSearch: boolean
}

const PopularAlbums: FC<PropsTypes> = ({ items, isSearch = false }) => {
	const { data: albums, isLoading } = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading }) => ({
			data: data?.albums?.data || [],
			isLoading,
		}),
	})

	const albumsFromData = items
		? items
				.map((item: any) => item.album)
				.filter(
					(album, index, self) =>
						index === self.findIndex(a => a.id === album.id)
				)
		: []
	const displayAlbums = isSearch ? albumsFromData : albums

	return (
		<div className='mb-[70px]'>
			<div className='flex items-center justify-between mb-5'>
				<h2 className='text-white font-bold font-[Poppins] text-3xl'>
					Most popular albums
				</h2>
				<Link to='/albums' className='text-white font-medium'>
					View more
				</Link>
			</div>

			<AlbumSlider items={displayAlbums} isLoading={isLoading} />
		</div>
	)
}

export default PopularAlbums
