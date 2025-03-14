import { baseApi } from './baseApi'

export const albumsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getAlbumById: builder.query({
			query: albumId => `/album/${albumId}`,
		}),
		getTracksByAlbumId: builder.query({
			query: albumId => `/album/${albumId}/tracks`,
		}),
	}),
})

export const { useGetAlbumByIdQuery, useGetTracksByAlbumIdQuery } = albumsApi
