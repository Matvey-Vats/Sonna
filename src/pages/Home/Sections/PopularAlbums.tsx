import { FC, useEffect, useState } from 'react'
import AlbumSlider from '../../../components/Sliders/AlbumSlider'

const PopularAlbums: FC = () => {
	const [albums, setAlbums] = useState([])
	useEffect(() => {
		fetch('api/chart/0/albums')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setAlbums(data.data)
			})
	}, [])
	return (
		<div className='mb-[70px]'>
			<h2 className='text-white font-bold font-[Poppins] text-3xl mb-5'>
				Most popular albums
			</h2>
			<AlbumSlider items={albums} />
		</div>
	)
}

export default PopularAlbums
