import { FC } from 'react'
import { TTracks } from '../types/MainTypes'
import TrackCard from './TrackCard'

interface ITrackListProps {
	tracks: TTracks[]
}

const TrackList: FC<ITrackListProps> = ({ tracks }) => {
	return (
		<div className='grid grid-cols-[repeat(3,_250px)] max-xl:grid-cols-[repeat(2,_250px)] max-lg:grid-cols-[250px] items-center justify-center gap-5'>
			{tracks && tracks?.map(track => <TrackCard key={track.id} {...track} />)}
		</div>
	)
}

export default TrackList
