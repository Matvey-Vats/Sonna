import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home'

function App() {
	return (
		<div className='max-w-[1400px] mx-auto px-[15px]'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
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
