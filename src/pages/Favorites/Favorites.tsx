import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AlbumCard from '../../components/AlbumCard'
import ArtistCard from '../../components/ArtistCard'
import PlaylistCard from '../../components/PlaylistCard'
import TrackCard from '../../components/TrackCard'
import { RootState } from '../../redux/store'

const Favorites: FC = () => {
	const { tracks, artists, albums, playlists } = useSelector(
		(state: RootState) => state.favorites
	)
	const user = useSelector((state: RootState) => state.auth.user)

	const fullFavoriteList = new Array().concat(
		tracks,
		artists,
		albums,
		playlists
	)
	console.log(fullFavoriteList)

	if (!user) {
		return (
			<div className='text-white text-center mt-20'>
				<p className='mb-7'>
					<strong className='text-3xl'>You are not authorized.</strong> <br />{' '}
					To access your favorites, please log in to your account
				</p>
				<Link
					to='/login'
					className='bg-[#e0aaff] text-[#11001c] font-bold rounded-md px-6 py-2'
				>
					Log in
				</Link>
			</div>
		)
	}

	if (fullFavoriteList.length === 0) {
		return (
			<div className='text-center'>
				<h1 className='text-white text-3xl font-bold'>List is empty</h1>
			</div>
		)
	}
	return (
		<div>
			<h2 className='text-white font-bold text-3xl mb-5'>Favorites</h2>
			<div className='text-white'>
				{tracks.length > 0 && (
					<div className='mb-8'>
						<h3 className='text-2xl font-medium mb-7'>Favorites Tracks</h3>
						<div className='flex flex-wrap items-center justify-center gap-5'>
							{tracks.map(track => (
								<TrackCard
									key={track.id}
									{...track}
									md5_image={track.cover_big}
								/>
							))}
						</div>
					</div>
				)}
				{artists.length > 0 && (
					<div className='mb-8'>
						<h3 className='text-2xl font-medium mb-7'>Favorites Artists</h3>
						<div className='flex flex-wrap gap-5'>
							{artists.map(artist => (
								<ArtistCard key={artist.id} {...artist} />
							))}
						</div>
					</div>
				)}
				{albums.length > 0 && (
					<div className='mb-8'>
						<h3 className='text-2xl font-medium mb-7'>Favorites Albums</h3>
						<div className='flex flex-wrap gap-5'>
							{albums.map(album => (
								<AlbumCard
									key={album.id}
									id={album.id}
									name={album.title}
									picture_big={album.cover_big}
								/>
							))}
						</div>
					</div>
				)}
				{playlists.length > 0 && (
					<div className='mb-8'>
						<h3 className='text-2xl font-medium mb-7'>Favorites Playlists</h3>
						<div className='flex flex-wrap items-center justify-center gap-5'>
							{playlists.map(playlist => (
								<PlaylistCard
									key={playlist.id}
									{...playlist}
									title={playlist.name}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Favorites
