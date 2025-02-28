import { FC, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination'
import Spinner from '../../components/Spinner'
import { useGetReleasesQuery } from '../../redux/api/apiSlice'

interface IAlbum {
	id: number
	title: string
	cover_big: string
}

const Albums: FC = () => {
	const [page, setPage] = useState(1)
	const { data: albums, isLoading, isError } = useGetReleasesQuery(page)

	const blockRef = useRef<HTMLDivElement | null>(null)
	const handleNextPage = () => {
		if (albums && albums.data.length === 20) {
			setPage(prev => prev + 1)
		}
	}

	const handlePrevPage = () => {
		setPage(prev => Math.max(prev - 1, 1))
	}

	useEffect(() => {
		blockRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}, [page])

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
		<div ref={blockRef} className='mb-50'>
			<h2 className='text-white font-bold font-["Poppins"] text-3xl mb-[20px]'>
				Albums
			</h2>
			<div className='flex items-center justify-between flex-wrap gap-[20px]'>
				{isError && <p className='text-white'>Error</p>}
				{albums?.data?.map((album: IAlbum) => (
					<Link to={`/albums/${album.id}`} key={album.id} className='mx-auto'>
						<div className='w-[230px] h-[275px] text-center rounded-md bg-pink-900'>
							<img src={album.cover_big} alt={album.title} />
							<h2 className='text-white'>{album.title}</h2>
						</div>
					</Link>
				))}
			</div>
			<Pagination
				page={page}
				totalItems={albums.total}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
			/>
		</div>
	)
}

export default Albums
