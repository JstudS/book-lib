import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        isAuth: false
    },
    selectedType: {
        id: 1
    },
    selectedGenre: ''
}

export const user = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setIsAuth: (state) => {
            state.user.isAuth = !state.user.isAuth
        },
        setSelectedType: (state, action) => {
            state.selectedType = action.payload
        },
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload
        },
        clearSelectedGenre: (state, action) => {
            state.selectedGenre = ''
        },
    } 
})

export const {setIsAuth, setSelectedType, setSelectedGenre, clearSelectedGenre} = user.actions
export const userIsAuth = (state) => state.userInfo.user.isAuth
export const selectedType = (state) => state.userInfo.selectedType
export const selectedGenre = (state) => state.userInfo.selectedGenre

const userStore = user.reducer
export default userStore