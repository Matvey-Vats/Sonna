import { FC } from 'react'
import DataStatus from '../../components/DataStatus'
import PlaylistCard from '../../components/PlaylistCard'
import { useGetTopChartsQuery } from '../../redux/api/apiSlice'
import { IPLaylist } from '../../types/MainTypes'

const Playlists: FC = () => {
	const {
		data: playlists,
		isLoading,
		isError,
	} = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading, isError }) => ({
			data: data?.playlists?.data || [],
			isLoading,
			isError,
		}),
	})

	return (
		<div>
			<h2 className='text-white font-bold font-["Poppins"] text-3xl mb-[20px]'>
				Albums
			</h2>
			<DataStatus isLoading={isLoading} isError={isError} />
			<div className='grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-[20px]'>
				{playlists.map((playlist: IPLaylist) => (
					<PlaylistCard key={playlist.id} {...playlist} />
				))}
			</div>
		</div>
	)
}

export default Playlists
