import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AlbumDetail from './pages/Albums/AlbumDetail'
import Albums from './pages/Albums/Albums'
import ArtistDetail from './pages/Artists/ArtistDetail'
import Artists from './pages/Artists/Artists'
import Home from './pages/Home/Home'
import PlaylistDetail from './pages/Playlists/PlaylistDetail'
import Playlists from './pages/Playlists/Playlists'
import Tracks from './pages/Tracks/Tracks'

function App() {
	return (
		<div className='max-w-[1400px] mx-auto px-[15px]'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='/albums' element={<Albums />} />
					<Route path='/albums/:id' element={<AlbumDetail />} />
					<Route path='/artists' element={<Artists />} />
					<Route path='/artists/:id' element={<ArtistDetail />} />
					<Route path='/tracks' element={<Tracks />} />
					<Route path='/playlists' element={<Playlists />} />
					<Route path='/playlists/:id' element={<PlaylistDetail />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App

{
	/* <div className='max-w-[1430px] mx-auto px-[15px]'> */
}
{
	/* <div className='flex items-center justify-center w-full h-screen'> */
}
{
	/* <div className='bg-[#5a189a] bg-opacity-50 w-[90%] rounded-xl'> */
}
{
	/* <Routes> */
}
{
	/* <Route path='/' element={<MainLayout />}> */
}
{
	/* <Route path='' element={<Home />} /> */
}
{
	/* </Route> */
}
{
	/* </Routes> */
}
{
	/* </div> */
}
{
	/* </div> */
}
{
	/* </div> */
}
