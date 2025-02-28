import { Link } from 'react-router-dom'

type PropsTypes = {
	id: number
	name: string
	picture_big: string
}

const AlbumCard = ({ id, name, picture_big }: PropsTypes) => {
	return (
		<Link to={`/albums/${id}`} className='mx-auto'>
			<div className='w-[230px] h-[275px] text-center rounded-md bg-pink-900'>
				<img src={picture_big} alt={name} className='rounded-md' />
				<h2 className='font-bold mt-2'>{name}</h2>
			</div>
		</Link>
	)
}

export default AlbumCard
