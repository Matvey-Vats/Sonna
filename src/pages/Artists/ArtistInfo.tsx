import { FC } from 'react'

interface IArtistInfoProps {
	name: string
	nb_fan: number
	nb_album: number
	picture_big: string
}

const ArtistInfo: FC<IArtistInfoProps> = ({
	name,
	nb_fan,
	nb_album,
	picture_big,
}) => {
	return (
		<div className='flex items-center justify-center mb-7'>
			<div className='flex flex-col max-w-[500px] bg-[#e0aaff] p-7 rounded-md'>
				<img className='rounded-md mb-3' src={picture_big} alt={name} />
				<div>
					<h3 className='font-bold text-3xl mb-3'>{name}</h3>
					<div className='font-medium'>
						<p>Fans count: {nb_fan}</p>
						<p>Albums count: {nb_album}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArtistInfo
