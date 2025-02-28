import { Link } from 'react-router-dom'

type PropsTypes = {
	id: number
	name: string
	picture_big: string
}

const ArtistCard = ({ id, name, picture_big }: PropsTypes) => {
	return (
		<Link to={`/artists/${id}`} className='mx-auto'>
			<div className='w-[220px] h-[275px] rounded-md bg-pink-900 text-center mt-[10px]'>
				<img src={picture_big} alt={name} className='rounded-md' />
				<h3 className='font-bold mt-2'>{name}</h3>
			</div>
		</Link>
	)
}

export default ArtistCard
