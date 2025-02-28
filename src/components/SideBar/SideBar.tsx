import {
	AudioLines,
	Disc3,
	HomeIcon,
	ListMusic,
	Palette,
	SquarePlay,
	Star,
} from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const SideBar: FC = () => {
	return (
		<aside className='bg-[#290025] w-[80px] sm:w-[200px] md:w-[300px] max-h-[100%] mr-[20px] rounded-xl p-[15px] transition-all duration-300 ease-in-out sticky top-2.5'>
			<div className='flex items-center pb-[10px] border-b-2 border-b-white'>
				<AudioLines size={30} color='#fff' />
				<span className='text-white ml-[10px] font-[Poppins] text-2xl sm:text-3xl font-bold hidden sm:inline'>
					Sonna
				</span>
			</div>

			<nav className='mt-5'>
				<ul className='space-y-4'>
					<li>
						<Link to='/' className='flex items-center'>
							<HomeIcon className='h-6 w-6 text-white' />
							<span className='text-white ml-3 hidden sm:inline'>Home</span>
						</Link>
					</li>
					<li>
						<Link to='/albums' className='flex items-center'>
							<Disc3 className='h-6 w-6 text-white' />
							<span className='text-white ml-3 hidden sm:inline'>Albums</span>
						</Link>
					</li>
					<li>
						<Link to='/tracks' className='flex items-center'>
							<SquarePlay className='h-6 w-6 text-white' />
							<span className='text-white ml-3 hidden sm:inline'>Tracks</span>
						</Link>
					</li>
					<li>
						<Link to='/artists' className='flex items-center'>
							<Palette className='h-6 w-6 text-white' />
							<span className='text-white ml-3 hidden sm:inline'>Artists</span>
						</Link>
					</li>
					<li>
						<Link to='/playlists' className='flex items-center'>
							<ListMusic className='h-6 w-6 text-white' />
							<span className='text-white ml-3 hidden sm:inline'>
								Playlists
							</span>
						</Link>
					</li>
					<li>
						<Link to='/favorites' className='flex items-center'>
							<Star className='h-6 w-6 text-white' />
							<span className='text-white ml-3 hidden sm:inline'>
								Favorites
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default SideBar
