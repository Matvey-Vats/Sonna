import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataStatus from '../../components/DataStatus'
import Pagination from '../../components/Pagination'
import TrackList from '../../components/TrackList'
import {
	useGetPlayListByIdQuery,
	useGetTracksByPlaylistQuery,
} from '../../redux/api/apiSlice'
import PlaylistInfo from './PlaylistInfo'

const PlaylistDetail: FC = () => {
	const { id } = useParams()
	const [page, setPage] = useState(1)
	const { data: playlist, isLoading, isError } = useGetPlayListByIdQuery(id)
	const { data: tracks } = useGetTracksByPlaylistQuery({
		playlistId: id,
		limit: 10,
		index: (page - 1) * 10,
	})

	return (
		<div className='text-white'>
			<DataStatus isLoading={isLoading} isError={isError} />
			{!isLoading && !isError && playlist && tracks && (
				<>
					<PlaylistInfo {...playlist} />
					<TrackList tracks={tracks?.data} />
					<Pagination
						page={page}
						totalItems={tracks?.total}
						handleNextPage={() => setPage(prev => prev + 1)}
						handlePrevPage={() => setPage(prev => Math.max(prev - 1, 1))}
					/>
				</>
			)}
		</div>
	)
}

export default PlaylistDetail
