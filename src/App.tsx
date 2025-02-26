import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import Home from './pages/Home/Home'
import Playlists from './pages/Playlists'
import Tracks from './pages/Tracks/Tracks'

function App() {
	return (
		<div className='max-w-[1400px] mx-auto px-[15px]'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='/albums' element={<Albums />} />
					<Route path='/artists' element={<Artists />} />
					<Route path='/tracks' element={<Tracks />} />
					<Route path='/playlists' element={<Playlists />} />
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
