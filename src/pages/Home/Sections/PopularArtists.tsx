import { FC } from 'react'
import { Link } from 'react-router-dom'
import ArtistSlider from '../../../components/Sliders/ArtistSlider'
import { useGetTopChartsQuery } from '../../../redux/api/apiSlice'

const PopularArtists: FC = () => {
	const { data: artists, isLoading } = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading }) => ({
			data: data?.artists?.data || [],
			isLoading,
		}),
	})

	return (
		<div className='w-full mb-[70px]'>
			<div className='flex items-center justify-between mb-5'>
				<h2 className='text-white font-bold font-[Poppins] text-3xl'>
					Most popular artists
				</h2>
				<Link to='/artists' className='text-white font-medium'>
					View more
				</Link>
			</div>

			<ArtistSlider items={artists} isLoading={isLoading} />
		</div>
	)
}

export default PopularArtists
