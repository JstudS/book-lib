import React from 'react';
import FullLibList from '../assets/FullLibList.json'
import { useParams } from 'react-router-dom';
import TitileInfo from '../components/TitileInfo';
import { useSelector } from 'react-redux';
import { fullLibArray, isStoreUsed } from '../store/LibStore';


const LibPage = () => {
    const params = useParams()
    const isStoreUsedBool = useSelector(isStoreUsed)
    const libArray = useSelector(fullLibArray)
    
    const selectingTitleFrom = (array) => {
        return array.map(el => {
            if(params.type === el.typeName){
                return (
                    <div key={el.id}>{el.typeList.map(elem => {
                        if(+params.id === elem.id){
                            return <TitileInfo 
                                key={elem.id} 
                                titlePageInfo={elem.pageInfo} 
                                titleTypeName={el.typeName}
                                titleName={elem.name}                                    
                            />
                        }
                        return ''
                        })}
                    </div>
                )
            }

            return ''
        })
    }
    return (
        <>
            {   
                isStoreUsedBool
                ?
                selectingTitleFrom(libArray)
                :
                selectingTitleFrom(FullLibList)
            }
        </>
    )
};

export default LibPage;