import { FC, useEffect, useState } from 'react'
import ArtistSlider from '../../../components/Sliders/ArtistSlider'

const PopularArtists: FC = () => {
	const [artists, setArtists] = useState([])

	useEffect(() => {
		fetch('api/chart/0/artists')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setArtists(data.data)
			})
	}, [])
	return (
		<div className='w-full mb-[70px]'>
			<h2 className='text-white font-bold font-[Poppins] text-3xl mb-5'>
				Most popular artists
			</h2>
			<ArtistSlider items={artists} />
		</div>
	)
}

export default PopularArtists
