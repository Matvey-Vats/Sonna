import { LucideBookmark, LucideBookmarkCheck } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToFavorites,
	removeFromFavorites,
} from '../redux/slices/favoritesSlice'
import { AppDispatch, RootState } from '../redux/store'

const FavoriteButton = ({
	id,
	title,
	cover_big,
	type,
	preview,
}: {
	id: number
	title: string
	cover_big: string
	type: any
	preview: string
}) => {
	const dispatch = useDispatch<AppDispatch>()
	const favorites = useSelector((state: RootState) => state.favorites)
	const user = useSelector((state: RootState) => state.auth.user)

	const isTrackInFavorites = favorites.tracks.some(track => track.id === id)
	const isArtistInFavorites = favorites.artists.some(artist => artist.id === id)
	const isAlbumInFavorites = favorites.albums.some(album => album.id === id)
	const isPlaylistInFavorites = favorites.playlists.some(
		playlist => playlist.id === id
	)

	const [isActive, setIsActive] = useState(
		isTrackInFavorites ||
			isArtistInFavorites ||
			isAlbumInFavorites ||
			isPlaylistInFavorites
	)

	const handleFavoriteClick = () => {
		if (!isActive) {
			if (type === 'tracks') {
				dispatch(
					addToFavorites({
						type,
						item: { id, title, cover_big, preview },
					})
				)
			} else {
				dispatch(
					addToFavorites({
						type,
						item: { id, name: title, picture_big: cover_big },
					})
				)
			}
			setIsActive(true)
		} else {
			dispatch(removeFromFavorites({ type, id }))
			setIsActive(false)
		}
	}
	return (
		<>
			{isActive ? (
				<button title='Remove from Favorite'>
					<LucideBookmarkCheck
						onClick={handleFavoriteClick}
						color='#11001c'
						size={30}
						className='cursor-pointer transition-transform duration-200 active:scale-95'
					/>
				</button>
			) : (
				<button title='Add to Favorite'>
					<LucideBookmark
						aria-disabled={!user}
						onClick={handleFavoriteClick}
						color='#11001c'
						size={30}
						className='cursor-pointer transition-transform duration-200 active:scale-95 aria-disabled:hidden'
					/>
				</button>
			)}
		</>
	)
}

export default FavoriteButton
