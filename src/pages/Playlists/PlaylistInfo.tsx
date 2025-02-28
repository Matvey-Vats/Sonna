import { FC } from 'react'
import FavoriteButton from '../../components/FavoriteButton'

interface ICreator {
	id: number
	name: string
}

interface IPLaylistInfoProps {
	id: number
	title: string
	description: string
	duration: number
	nb_tracks: number
	fans: number
	picture_big: string
	creator: ICreator
}

const PlaylistInfo: FC<IPLaylistInfoProps> = ({
	id,
	title,
	description,
	duration,
	nb_tracks,
	fans,
	picture_big,
	creator,
}) => {
	return (
		<div className='mb-8'>
			<div className='flex items-center justify-center'>
				<div>
					<div className='bg-[#e0aaff] rounded-md p-7'>
						<img className='rounded-md mb-5' src={picture_big} alt={title} />
						<FavoriteButton
							id={id}
							title={title}
							cover_big={picture_big}
							type={'playlists'}
							preview=''
						/>
					</div>
					<div className=''>
						<div className='bg-[#e0aaff] mt-5 p-5 rounded-md font-bold text-[#11001c]'>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
						<div className='row-start-2 bg-[#e0aaff] mt-5 p-5 rounded-md font-bold text-[#11001c]'>
							<p>Duration: {duration} mins.</p>
							<p>Tracks count: {nb_tracks}</p>
							<p>Fans count: {fans}</p>
						</div>
						<div className='row-start-1 bg-[#e0aaff] mt-5 p-5 rounded-md font-bold text-[#11001c]'>
							<p>Creator: {creator.name}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlaylistInfo
