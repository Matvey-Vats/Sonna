import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataStatus from '../../components/DataStatus'
import Pagination from '../../components/Pagination'
import TrackList from '../../components/TrackList'
import {
	useGetArtistByIdQuery,
	useGetTracksByArtistQuery,
} from '../../redux/api/apiSlice'
import ArtistInfo from './ArtistInfo'

const ArtistDetail: FC = () => {
	const { id } = useParams()
	const [page, setPage] = useState(1)
	const { data: artist, isLoading, isError } = useGetArtistByIdQuery(id)
	const { data: tracks } = useGetTracksByArtistQuery({
		artistId: id,
		limit: 10,
		index: (page - 1) * 10,
	})

	console.log(artist)

	return (
		<div className='text-white'>
			<DataStatus isLoading={isLoading} isError={isError} />
			{!isLoading && !isError && artist && tracks && (
				<>
					<ArtistInfo {...artist} />
				</>
			)}
			<TrackList tracks={tracks && tracks?.data} />
			<Pagination
				page={page}
				totalItems={tracks?.total || 0}
				handleNextPage={() => setPage(prev => prev + 1)}
				handlePrevPage={() => setPage(prev => Math.max(prev - 1, 1))}
			/>
		</div>
	)
}

export default ArtistDetail
