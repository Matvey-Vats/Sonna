import { FC } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useGetTopChartsQuery } from '../redux/api/apiSlice'

interface IPLaylist {
	id: number
	title: string
	link: string
	picture_big: string
	nb_tracks: number
	tracklist: string
}

const Playlists: FC = () => {
	const {
		data: playlists,
		isLoading,
		isError,
	} = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading, isError }) => ({
			data: data?.playlists?.data || [],
			isLoading,
			isError,
		}),
	})
	console.log(playlists)

	if (isError) {
		return (
			<p className='text-red-800 text-center bg-red-300 rounded-xl p-[5px]'>
				Error loading data. Please try again later.
			</p>
		)
	}

	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-screen w-full'>
				<Spinner />
			</div>
		)
	}

	return (
		<div>
			<h2 className='text-white font-bold font-["Poppins"] text-3xl mb-[20px]'>
				Albums
			</h2>
			<div className='grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-[20px]'>
				{isError && <p className='text-white'>Error</p>}
				{playlists.map((playlist: IPLaylist) => (
					<Link
						to='/'
						key={playlist.id}
						className='flex items-center justify-center'
					>
						<div className='w-[230px] h-[275px] text-center rounded-md bg-pink-900'>
							<img src={playlist.picture_big} alt={playlist.title} />
							<h2 className='text-white'>{playlist.title}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Playlists
