import { FC } from 'react'
import TrackSlider from '../../../components/Sliders/TrackSlider'
import { useGetTopChartsQuery } from '../../../redux/api/apiSlice'

const PopularTracks: FC = () => {
	const { data: tracks, isLoading } = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading }) => ({
			data: data?.tracks?.data || [],
			isLoading,
		}),
	})

	return (
		<div className='w-full mb-[70px]'>
			<h2 className='text-white font-bold font-[Poppins] text-3xl mb-5'>
				Most popular tracks
			</h2>
			<TrackSlider items={tracks} isLoading={isLoading} />
		</div>
	)
}

export default PopularTracks
