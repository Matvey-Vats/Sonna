import { Play } from 'lucide-react'
import { FC } from 'react'
import PopularAlbums from './Sections/PopularAlbums'
import PopularArtists from './Sections/PopularArtists'
import PopularTracks from './Sections/PopularTracks'

const Home: FC = () => {
	return (
		<div>
			<PopularArtists />
			<PopularAlbums />
			<PopularTracks />
			<div className='flex items-center justify-between'>
				<div>
					<div className='w-[250px] h-[250px] bg-fuchsia-500 rounded-xl relative group'>
						<Play
							size={30}
							className='w-10 h-10 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
						/>
					</div>
					<h3>System of a Down</h3>
				</div>
				<div>
					<div className='w-[250px] h-[250px] bg-fuchsia-500 rounded-xl relative group'>
						<Play
							size={30}
							className='w-10 h-10 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
						/>
					</div>
					<h3>System of a Down</h3>
				</div>
				<div>
					<div className='w-[250px] h-[250px] bg-fuchsia-500 rounded-xl relative group'>
						<Play
							size={30}
							className='w-10 h-10 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
						/>
					</div>
					<h3>System of a Down</h3>
				</div>
				<div>
					<div className='w-[250px] h-[250px] bg-fuchsia-500 rounded-xl relative group'>
						<Play
							size={30}
							className='w-10 h-10 text-white absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'
						/>
					</div>
					<h3>System of a Down</h3>
				</div>
			</div>
		</div>
	)
}

export default Home
