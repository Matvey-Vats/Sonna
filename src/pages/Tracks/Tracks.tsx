import { FC } from 'react'
import Spinner from '../../components/Spinner'
import TrackCard from '../../components/TrackCard'
import { useGetTracksByAlbumIdQuery } from '../../redux/api/apiSlice'
import { TTracks } from '../../types/MainTypes'

const Tracks: FC = () => {
	const {
		data: tracks,
		isLoading,
		isError,
	} = useGetTracksByAlbumIdQuery(212377, {
		selectFromResult: ({ data, isLoading, isError }) => ({
			data: data?.data || [],
			isLoading,
			isError,
		}),
	})

	if (isError) {
		return (
			<p className='text-red-800 text-center bg-red-300 rounded-xl p-[5px]'>
				Error loading data. Please try again later.
			</p>
		)
	}

	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-screen w-full'>
				<Spinner />
			</div>
		)
	}

	return (
		<div className='text-white mb-50'>
			<h2 className='text-white font-bold font-["Poppins"] text-3xl mb-[20px]'>
				Tracks
			</h2>
			<div className='flex flex-wrap items-center justify-between gap-y-[20px] gap-x-[10px]'>
				{tracks &&
					tracks.map((track: TTracks) => (
						<div key={track.id} className='mx-auto'>
							<TrackCard {...track} />
						</div>
					))}
			</div>
		</div>
	)
}

export default Tracks
