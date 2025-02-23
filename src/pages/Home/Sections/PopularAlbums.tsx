import { FC } from 'react'
import { Link } from 'react-router-dom'
import AlbumSlider from '../../../components/Sliders/AlbumSlider'
import { useGetTopChartsQuery } from '../../../redux/api/apiSlice'

const PopularAlbums: FC = () => {
	const { data: albums, isLoading } = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading }) => ({
			data: data?.albums?.data || [],
			isLoading,
		}),
	})

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

			<AlbumSlider items={albums} isLoading={isLoading} />
		</div>
	)
}

export default PopularAlbums
