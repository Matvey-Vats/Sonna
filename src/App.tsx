import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { setUser } from './redux/slices/authSlice'
import { AppDispatch } from './redux/store'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Albums = React.lazy(() => import('./pages/Albums/Albums'))
const AlbumDetail = React.lazy(() => import('./pages/Albums/AlbumDetail'))
const Artists = React.lazy(() => import('./pages/Artists/Artists'))
const ArtistDetail = React.lazy(() => import('./pages/Artists/ArtistDetail'))
const Tracks = React.lazy(() => import('./pages/Tracks/Tracks'))
const Playlists = React.lazy(() => import('./pages/Playlists/Playlists'))
const PlaylistDetail = React.lazy(
	() => import('./pages/Playlists/PlaylistDetail')
)
const Login = React.lazy(() => import('./pages/Auth/Login'))
const Register = React.lazy(() => import('./pages/Auth/Register'))
const Favorites = React.lazy(() => import('./pages/Favorites/Favorites'))

function App() {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		const user = localStorage.getItem('user')
		if (user) {
			dispatch(setUser(user))
		}
	}, [dispatch])

	return (
		<div className='max-w-[1400px] mx-auto px-[15px]'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route
						path=''
						element={
							<React.Suspense fallback={<div>Loading Home Page...</div>}>
								<Home />
							</React.Suspense>
						}
					/>
					<Route
						path='/albums'
						element={
							<React.Suspense fallback={<div>Loading Albums Page...</div>}>
								<Albums />
							</React.Suspense>
						}
					/>
					<Route
						path='/albums/:id'
						element={
							<React.Suspense
								fallback={<div>Loading Album Detail Page...</div>}
							>
								<AlbumDetail />
							</React.Suspense>
						}
					/>
					<Route
						path='/artists'
						element={
							<React.Suspense fallback={<div>Loading Artists Page...</div>}>
								<Artists />
							</React.Suspense>
						}
					/>
					<Route
						path='/artists/:id'
						element={
							<React.Suspense fallback={<div>Loading Artist Detail Page</div>}>
								<ArtistDetail />
							</React.Suspense>
						}
					/>
					<Route
						path='/tracks'
						element={
							<React.Suspense fallback={<div>Loading Tracks Page...</div>}>
								<Tracks />
							</React.Suspense>
						}
					/>
					<Route
						path='/playlists'
						element={
							<React.Suspense fallback={<div>Loading Playlists Page...</div>}>
								<Playlists />
							</React.Suspense>
						}
					/>
					<Route
						path='/playlists/:id'
						element={
							<React.Suspense
								fallback={<div>Loading Playlist Detail Page...</div>}
							>
								<PlaylistDetail />
							</React.Suspense>
						}
					/>
					<Route
						path='login'
						element={
							<React.Suspense fallback={<div>Loading Login Page...</div>}>
								<Login />
							</React.Suspense>
						}
					/>
					<Route
						path='register'
						element={
							<React.Suspense fallback={<div>Loading Register Page...</div>}>
								<Register />
							</React.Suspense>
						}
					/>
					<Route
						path='favorites'
						element={
							<React.Suspense fallback={<div>Loading Favorites Page...</div>}>
								<Favorites />
							</React.Suspense>
						}
					/>
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
