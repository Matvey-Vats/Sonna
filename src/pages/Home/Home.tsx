import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PopularAlbums from './Sections/PopularAlbums'
import PopularArtists from './Sections/PopularArtists'
import PopularTracks from './Sections/PopularTracks'

const Home: FC = () => {
	const { query, data } = useSelector((state: RootState) => state.search)

	return (
		<div>
			{query ? (
				<>
					<h2 className='text-white font-bold text-3xl mb-4'>
						Search result for "{query}"
					</h2>
					<PopularArtists items={data} isSearch={true} />
					<PopularAlbums items={data} isSearch={true} />
					<PopularTracks items={data} isSearch={true} />
				</>
			) : (
				<>
					<PopularArtists items={data} isSearch={false} />
					<PopularAlbums items={data} isSearch={false} />
					<PopularTracks items={data} isSearch={false} />
				</>
			)}
		</div>
	)
}

export default Home
