import { FC } from 'react'
import FavoriteButton from '../../components/FavoriteButton'
import { IGenre } from '../../types/MainTypes'

type WrapGenre = {
	data: IGenre[]
}
interface IAlbumInfoProps {
	id: number
	title: string
	label: string
	duration: number
	fans: number
	cover_big: string
	genres: WrapGenre
}

const AlbumInfo: FC<IAlbumInfoProps> = ({
	id,
	title,
	label,
	duration,
	fans,
	cover_big,
	genres,
}) => {
	return (
		<div className='flex flex-col items-center justify-between'>
			<div className='rounded-md mb-7 p-6 bg-[#e0aaff]'>
				<img className='rounded-md mb-7' src={cover_big} alt={title} />
				<FavoriteButton
					id={id}
					title={title}
					cover_big={cover_big}
					type={'albums'}
					preview=''
				/>
			</div>

			<div className='max-w-[500px]'>
				<div className='flex flex-wrap gap-4 mb-5'>
					<div className='bg-[#e0aaff] p-4 rounded-md'>
						<h3 className='font-bold'>{title}</h3>
						<h3 className='font-medium'>{label}</h3>
					</div>
					<div className='bg-[#e0aaff] p-4 rounded-md'>
						<p>Duration: {(duration / 60).toFixed(1)} mins</p>
						<p>Fans: {fans}</p>
					</div>
				</div>
				<div className='flex flex-wrap items-center gap-4 mb-10'>
					{genres &&
						genres?.data.map((genre: IGenre) => (
							<span className='bg-[#e0aaff] px-5 rounded-md' key={genre.id}>
								{genre.name}
							</span>
						))}
				</div>
			</div>
		</div>
	)
}

export default AlbumInfo
