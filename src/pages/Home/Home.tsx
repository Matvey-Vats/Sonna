import { FC } from 'react'
import Player from '../../components/Player/Player'
import PopularAlbums from './Sections/PopularAlbums'
import PopularArtists from './Sections/PopularArtists'
import PopularTracks from './Sections/PopularTracks'

const Home: FC = () => {
	return (
		<div>
			<PopularArtists />
			<PopularAlbums />
			<PopularTracks />
			<div>
				<Player track='https://cdnt-preview.dzcdn.net/api/1/1/b/3/5/0/b3521c1ef83cb00efbd744432e0505fa.mp3?hdnea=exp=1740247191~acl=/api/1/1/b/3/5/0/b3521c1ef83cb00efbd744432e0505fa.mp3*~data=user_id=0,application_id=42~hmac=5ddc866f78a4a09892a236f9907119649c8d0cb4d18258ac4b128179aa45adea' />
			</div>
		</div>
	)
}

export default Home
