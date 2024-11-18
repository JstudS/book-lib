import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    titleText: '',
    isStoredText: false,
    isModalForText: false,
    titleInfo: [
        {id: 1, title: "Тип", description: ""},
        {id: 2, title: "Рік", description: ""},
        {id: 3, title: "Глави", description: ""},
        {id: 4, title: "Статус", description: ""},
        {id: 5, title: "Франшиза", description: ""},
        {id: 6, title: "Автори", description: ""},
        {id: 7, title: "Видавці", description: ""}
    ],
    isStoredInfo: false,
    isModalForInfo: false,
}

export const libList = createSlice({
    name: 'libList',
    initialState,
    reducers: {
        setTitleText: (state, action) => {
            state.titleText = action.payload
        },
        setTitleInfo: (state, action) => {
            state.titleInfo = action.payload
        },
        setIsStoredText: (state, action) => {
            state.isStoredText = !state.isStored
        },
        setIsStoredInfo: (state, action) => {
            state.isStoredInfo = !state.isStoredInfo
        },
        setIsModalForText: (state, action) => {
            state.isModalForText = !state.isModalForText
        },
        setIsModalForInfo: (state, action) => {
            state.isModalForInfo = !state.isModalForInfo
        }
    } 
})
 
export const {setTitleText, setTitleInfo, setIsStoredText, setIsModalForText, setIsModalForInfo, setIsStoredInfo} = libList.actions
export const titleText = (state) => state.libStore.titleText
export const titleInfo = (state) => state.libStore.titleInfo
export const isStoredText = (state) => state.libStore.isStoredText
export const isStoredInfo = (state) => state.libStore.isStoredInfo
export const isModalForText = (state) => state.libStore.isModalForText
export const isModalForInfo = (state) => state.libStore.isModalForInfo


const libStore = libList.reducer
export default libStore