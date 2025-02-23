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
	}),
})

export const { useGetTopChartsQuery, useGetReleasesQuery } = apiSlice
export default apiSlice
