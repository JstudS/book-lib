import { createSlice } from "@reduxjs/toolkit";
import FullLibList from '../assets/FullLibList.json'

const initialState = {
    isStoreUsed: false,
    fullLibArray: FullLibList,
    isModalForText: false,
    isModalForInfo: false,
    isNotAuthModal: false,
    currentPage: 1,
    totalCount: 0,
    limit: 2,
    isEmptyTitleArray: false
}

export const libList = createSlice({
    name: 'libList',
    initialState,
    reducers: {
        setFullLibArray: (state, action) => {
            state.fullLibArray.map((el) => {
                if(el.typeName === action.payload.typename){
                    el.typeList.map(element => {
                        if(element.name === action.payload.name){
                            element.pageInfo.text = action.payload.text   
                        }
                        return ''
                    })
                }
                return ''
            }) 
        },
        setTitleInfo: (state, action) => {
            state.fullLibArray.map((el) => {
                if(el.typeName === action.payload.typename){
                    el.typeList.map(element => {
                        if(element.name === action.payload.name){
                            element.pageInfo.mainInfo = action.payload.info   
                        }
                        return ''
                    })
                }
                return ''
            }) 
        },
        setIsStoreUsed: (state, action) => {
            state.isStoreUsed = true
        },
        setIsModalForText: (state, action) => {
            state.isModalForText = !state.isModalForText
        },
        setIsModalForInfo: (state, action) => {
            state.isModalForInfo = !state.isModalForInfo
        },
        setIsNotAuthModal: (state, action) => {
            state.isNotAuthModal = !state.isNotAuthModal
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setTotalCount: (state, action) => {
            state.totalCount = action.payload
        },
        setLimit: (state, action) => {
            state.limit = action.payload
        },
        setIsEmptyTitleArray: (state, action) => {
            state.isEmptyTitleArray = action.payload
        }
    } 

})
 
export const {
        setIsStoreUsed, 
        setIsModalForText, 
        setIsModalForInfo, 
        setFullLibArray,
        setTitleInfo,
        setIsNotAuthModal,
        setCurrentPage,
        setTotalCount,
        setLimit,
        setIsEmptyTitleArray
    } = libList.actions
export const isStoreUsed = (state) => state.libStore.isStoreUsed
export const isModalForText = (state) => state.libStore.isModalForText
export const isModalForInfo = (state) => state.libStore.isModalForInfo
export const isNotAuthModal = (state) => state.libStore.isNotAuthModal
export const fullLibArray = (state) => state.libStore.fullLibArray
export const currentPage = (state) => state.libStore.currentPage
export const totalCount = (state) => state.libStore.totalCount
export const limit = (state) => state.libStore.limit
export const isEmptyTitleArray = (state) => state.libStore.isEmptyTitleArray


const libStore = libList.reducer
export default libStore