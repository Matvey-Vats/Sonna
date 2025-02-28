import { FC, useEffect, useRef, useState } from 'react'
import ArtistCard from '../../components/ArtistCard'
import Pagination from '../../components/Pagination'
import Spinner from '../../components/Spinner'
import { useGetReleasesQuery } from '../../redux/api/apiSlice'

type TArtist = {
	id: number
	name: string
	tracklist: string
	picture_big: string
}

const Artists: FC = () => {
	const [page, setPage] = useState(1)
	const [artists, setArtists] = useState<TArtist[]>([])
	const { data, isLoading, isError } = useGetReleasesQuery(page)
	const scrollRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		scrollRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
		if (!data?.data) return

		const controller = new AbortController()
		const signal = controller.signal

		const fetchArtistData = async () => {
			try {
				const artistsWithPicture = await Promise.all(
					data.data.map(async (item: { artist: TArtist }) => {
						const res = await fetch(`api/artist/${item.artist.id}`, { signal })
						if (!res.ok) throw new Error('Failed to fetch artist data')

						const artistData = await res.json()
						return { ...item.artist, picture_big: artistData.picture_big }
					})
				)
				setArtists(artistsWithPicture)
			} catch (error: any) {
				if (error.name !== 'AbortError') {
					console.error(error)
				}
			}
		}

		fetchArtistData()

		return () => controller.abort()
	}, [data])

	const handleNextPage = () => {
		setPage(prev => prev + 1)
	}
	const handlePrevPage = () => {
		setPage(prev => Math.max(prev - 1, 1))
	}

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
		<div ref={scrollRef} className='text-white mb-50'>
			<h2 className='text-white font-bold font-["Poppins"] text-3xl mb-[20px]'>
				Artists
			</h2>

			<div className='flex flex-wrap items-center justify-between gap-[20px]'>
				{artists.map((artist: TArtist) => (
					<ArtistCard key={artist.id} {...artist} />
				))}
			</div>
			<Pagination
				page={page}
				totalItems={data.total}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
			/>
		</div>
	)
}

export default Artists
