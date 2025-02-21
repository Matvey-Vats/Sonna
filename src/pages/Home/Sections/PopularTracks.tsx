import { FC, useEffect, useState } from 'react'
import TrackSlider from '../../../components/Sliders/TrackSlider'

const PopularTracks: FC = () => {
	const [tracks, setTracks] = useState([])
	useEffect(() => {
		fetch('api/chart/0/tracks')
			.then(res => {
				return res.json()
			})
			.then(data => {
				console.log(data)

				setTracks(data.data)
			})
	}, [])
	return (
		<div className='w-full mb-[70px]'>
			<h2 className='text-white font-bold font-[Poppins] text-3xl mb-5'>
				Most popular tracks
			</h2>
			<TrackSlider items={tracks} />
		</div>
	)
}

export default PopularTracks
