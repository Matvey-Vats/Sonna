import { Search } from 'lucide-react'
import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSearchQueryQuery } from '../redux/api/apiSlice'
import { setSearchResults } from '../redux/slices/searchSlice'
import { AppDispatch } from '../redux/store'

const SearchBlock: FC = () => {
	const [value, setValue] = useState('')
	const [searchValue, setSearchValue] = useState('')
	const dispatch = useDispatch<AppDispatch>()
	const { data } = useSearchQueryQuery(searchValue, {
		skip: !searchValue,
	})
	const navigate = useNavigate()

	useEffect(() => {
		if (data) {
			const resultData = data.data || []
			dispatch(setSearchResults({ query: searchValue, data: resultData }))
		}
	}, [data, searchValue, dispatch])

	const handleSearch = () => {
		if (value.trim()) {
			setSearchValue(value)
			setValue('')
			navigate('/')
		}
	}

	return (
		<div className='flex items-center gap-x-[10px] w-[400px]'>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				className='w-full px-[10px] py-[5px] rounded-xl border-1 border-[#c77dff] text-white outline-0'
				type='text'
				placeholder='Enter your track...'
			/>
			<button onClick={handleSearch}>
				<Search className='cursor-pointer' color='#c77dff' />
			</button>
		</div>
	)
}

export default SearchBlock
