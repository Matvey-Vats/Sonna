import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth, signInWithGooglePopup } from '../../firebase'

export const loginWithGoogle = createAsyncThunk(
	'auth/loginWithGoogle',
	async (_, { rejectWithValue }) => {
		try {
			const result = await signInWithGooglePopup()
			localStorage.setItem('user', result.user.email as string)
			return result.user.email
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const registerUser = createAsyncThunk(
	'auth/register',
	async (
		{ email, password }: { email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			return userCredential.user.email
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const loginUser = createAsyncThunk(
	'auth/login',
	async (
		{ email, password }: { email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)
			localStorage.setItem('user', userCredential.user.email as string)
			return userCredential.user.email
		} catch (error: any) {
			return rejectWithValue(error.message)
		}
	}
)

export const logoutUser = createAsyncThunk('auth/logout', async () => {
	await signOut(auth)
	localStorage.removeItem('user')
})

interface AuthState {
	user: string | null
	loading: boolean
	error: string | null
}

const initialState: AuthState = {
	user: null,
	loading: false,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<string>) {
			state.user = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(registerUser.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
			// login
			.addCase(loginUser.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
			// logout
			.addCase(logoutUser.fulfilled, state => {
				state.user = null
			})
			// login with google
			.addCase(loginWithGoogle.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(loginWithGoogle.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
			})
			.addCase(loginWithGoogle.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
