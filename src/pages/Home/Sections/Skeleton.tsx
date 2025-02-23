import ContentLoader from 'react-content-loader'

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={250}
		height={300}
		viewBox='0 0 250 300'
		backgroundColor='#e0aaff'
		foregroundColor='#11001c'
	>
		<rect x='0' y='0' rx='20' ry='20' width='250' height='300' />
	</ContentLoader>
)

export default Skeleton
