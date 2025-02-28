import { FC } from 'react'
import { Link } from 'react-router-dom'

type PropsTypes = {
	id: number
	title: string
	picture_big: string
}

const PlaylistCard: FC<PropsTypes> = ({ id, title, picture_big }) => {
	return (
		<Link to={`/playlists/${id}`} className='flex items-center justify-center'>
			<div className='w-[230px] h-[275px] text-center rounded-md bg-pink-900'>
				<img src={picture_big} alt={title} />
				<h2 className='text-white'>{title}</h2>
			</div>
		</Link>
	)
}

export default PlaylistCard
