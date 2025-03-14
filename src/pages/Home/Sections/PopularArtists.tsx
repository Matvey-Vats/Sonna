import { FC } from 'react'
import { Link } from 'react-router-dom'
import ArtistSlider, { TArtist } from '../../../components/Sliders/ArtistSlider'
import { useGetTopChartsQuery } from '../../../redux/api/baseApi'

type PropsTypes = {
	items: TArtist[]
	isSearch: boolean
}

const PopularArtists: FC<PropsTypes> = ({ items, isSearch = false }) => {
	const { data: artists, isLoading } = useGetTopChartsQuery('', {
		selectFromResult: ({ data, isLoading }) => ({
			data: data?.artists?.data || [],
			isLoading,
		}),
	})

	const artistsData = items
		? items
				.map((item: any) => item.artist)
				.filter(
					(artist, index, self) =>
						index === self.findIndex(a => a.id === artist.id)
				)
		: []

	const displayArtists = isSearch ? artistsData : artists

	return (
		<div className='w-full mb-[70px]'>
			<div className='flex items-center justify-between mb-5'>
				<h2 className='text-white font-bold font-[Poppins] text-3xl'>
					Most popular artists
				</h2>
				<Link to='/artists' className='text-white font-medium'>
					View more
				</Link>
			</div>

			<ArtistSlider items={displayArtists} isLoading={isLoading} />
		</div>
	)
}

export default PopularArtists
