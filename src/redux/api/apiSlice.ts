import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'api/' }),
	endpoints: builder => ({
		getTopCharts: builder.query({
			query: () => '/editorial/0/charts/',
		}),
		getReleases: builder.query({
			query: (page = 1) => `editorial/0/releases?index=${(page - 1) * 20}`,
		}),
		getTracksByAlbumId: builder.query({
			query: (albumId = 212377) => `album/${albumId}/tracks`,
		}),
		searchQuery: builder.query({
			query: query => `search?q=${query}`,
		}),
	}),
})

export const {
	useGetTopChartsQuery,
	useGetReleasesQuery,
	useGetTracksByAlbumIdQuery,
	useSearchQueryQuery,
} = apiSlice
export default apiSlice
