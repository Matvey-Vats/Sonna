import { FC } from 'react'
import Spinner from './Spinner'

interface IDataStatusProps {
	isLoading: boolean
	isError: boolean
}

const DataStatus: FC<IDataStatusProps> = ({ isLoading, isError }) => {
	if (isLoading) {
		return (
			<div className='flex items-center justify-center h-screen w-full'>
				<Spinner />
			</div>
		)
	}

	if (isError) {
		return (
			<p className='text-red-800 text-center bg-red-300 rounded-xl p-[5px]'>
				Error loading data. Please try again later.
			</p>
		)
	}

	return null
}

export default DataStatus
