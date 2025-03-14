import { baseApi } from './baseApi'

export const playlistsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getPlayListById: builder.query({
			query: playlistId => `/playlist/${playlistId}/`,
		}),
		getTracksByPlaylist: builder.query({
			query: ({ playlistId, limit = 10, index }) =>
				`/playlist/${playlistId}/tracks?index=${index}&limit=${limit}`,
		}),
	}),
})

export const { useGetPlayListByIdQuery, useGetTracksByPlaylistQuery } =
	playlistsApi
