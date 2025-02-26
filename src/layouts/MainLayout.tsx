import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import SideBar from '../components/SideBar/SideBar'

const MainLayout: FC = () => {
	return (
		<div className='flex h-[100%] max-w-full p-[20px]'>
			<SideBar />
			<main className='flex-1 overflow-y-scroll scrollbar-none h-screen overflow-x-hidden'>
				<Header />
				<Outlet />
				<div>
					<Player />
				</div>
			</main>
		</div>
	)
}

export default MainLayout
