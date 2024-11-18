import React, { useMemo } from 'react';
import { Row } from 'react-bootstrap';
import FullLibList from '../assets/FullLibList.json'
import LibItem from './LibItem';
import { useSelector } from 'react-redux';
import { selectedGenre, selectedType } from '../store/UserStore';

const LibList = () => {
    const type = useSelector(selectedType)
    const genre = useSelector(selectedGenre)

    const getVisibleGenres = (elem) => {
        if(genre === ''){
            return elem.typeList.map( el => <LibItem key={el.id} element={el} typeName={elem.typeName}/> )   
        } else {
            const filtredTypeList = elem.typeList.filter( el => el.genre === genre.name)
            return filtredTypeList.map( el => <LibItem key={el.id} element={el} typeName={elem.typeName} /> ) 
        }
    }

    const sortedLib = useMemo(() => {
        return FullLibList.map(el => {
            if(type.id === el.id){
                return getVisibleGenres(el)
            }
            return ''
        })
    },[type, genre])


    return (
        <Row className='mt-3'>
            {sortedLib}
        </Row>
    )

};

export default LibList;