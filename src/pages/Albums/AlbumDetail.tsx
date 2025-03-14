import { FC } from 'react'
import { useParams } from 'react-router-dom'
import DataStatus from '../../components/DataStatus'
import TrackList from '../../components/TrackList'
import { useGetAlbumByIdQuery } from '../../redux/api/albumsApi'
import AlbumInfo from './AlbumInfo'

const AlbumDetail: FC = () => {
	const { id } = useParams()
	const albumId = id ? Number(id) : undefined

	const {
		data: album,
		isLoading,
		isError,
	} = useGetAlbumByIdQuery(albumId, {
		skip: !albumId,
	})

	return (
		<div className='text-white mb-50'>
			<DataStatus isLoading={isLoading} isError={isError} />
			{!isLoading && !isError && album && (
				<>
					<AlbumInfo {...album} />
					<TrackList tracks={album?.tracks?.data} />
				</>
			)}
		</div>
	)
}

export default AlbumDetail
