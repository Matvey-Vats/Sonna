import { FC } from 'react'
import { Link } from 'react-router-dom'
import TrackSlider from '../../../components/Sliders/TrackSlider'
import { useGetTopChartsQuery } from '../../../redux/api/apiSlice'
import { TTracks } from '../../../types/MainTypes'

type PropsTypes = {
	items: TTracks[]
	isSearch: boolean
}

const PopularTracks: FC<PropsTypes> = ({ items, isSearch = false }) => {
	const { data: tracks, isLoading } = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading }) => ({
			data: data?.tracks?.data || [],
			isLoading,
		}),
	})

	const displayTracks = isSearch ? items : tracks

	return (
		<div className='w-full mb-[70px]'>
			<div className='flex items-center justify-between mb-5'>
				<h2 className='text-white font-bold font-[Poppins] text-3xl'>
					Most popular tracks
				</h2>
				<Link to='/tracks' className='text-white font-medium'>
					View more
				</Link>
			</div>

			<TrackSlider items={displayTracks} isLoading={isLoading} />
		</div>
	)
}

export default PopularTracks
