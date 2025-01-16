import React, { useEffect, useMemo, useState } from 'react';
import { Row } from 'react-bootstrap';
import FullLibList from '../assets/FullLibList.json'
import LibItem from './LibItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectedGenre, selectedType } from '../store/UserStore';
import { currentPage, limit, setIsEmptyTitleArray, setTotalCount } from '../store/LibStore';

const LibList = () => {
    const dispatch = useDispatch()
    const currentPageActive = useSelector(currentPage)
    const titleLimit = useSelector(limit)
    const type = useSelector(selectedType)
    const genre = useSelector(selectedGenre)
    let totalTitles = ''
    const getVisibleGenres = (elem) => {
        
        totalTitles = elem.typeList.length
        const idOfLastTitle = currentPageActive  * titleLimit
        const idOfFirstTitle = idOfLastTitle - titleLimit
        const currentTitles = elem.typeList.slice(idOfFirstTitle, idOfLastTitle)
        if(genre === ''){
            return currentTitles.map( el => <LibItem key={el.id} element={el} typeName={elem.typeName}/> )   
        } else {
            const filtredTypeList = elem.typeList.filter( el => el.genre === genre.name)
            totalTitles = filtredTypeList.length
            if(!filtredTypeList[0]) {
                return <div key={elem.id}>Не знайдено тайтлів відповідного жанру !</div>
            }
            return filtredTypeList.map( el => <LibItem key={el.id} element={el} typeName={elem.typeName} /> ) 
        }
    }

    useEffect(() => {
        dispatch(setTotalCount(totalTitles))
    }, [type, genre])

    const sortedLib = useMemo(() => {
        return FullLibList.map(el => {
            if(type.id === el.id){
                return getVisibleGenres(el)
            }
            return ''
        })
    },[type, genre, currentPageActive])
    
    return (
        <Row className='my-3'>
            {sortedLib}
        </Row>
    )

};

export default LibList;