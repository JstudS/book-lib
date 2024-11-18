import React from 'react';
import FullLibList from '../assets/FullLibList.json'
import { useParams } from 'react-router-dom';
import TitileInfo from '../components/TitileInfo';


const LibPage = () => {
    const params = useParams()
    return (
        <>
            {
                FullLibList.map(el => {
                    if(params.type === el.typeName){
                        return (
                            <div key={el.id}>{el.typeList.map(elem => {
                                if(+params.id === elem.id){
                                    return <TitileInfo key={elem.id} title={elem.pageInfo}/>
                                }
                                return ''
                                })}
                            </div>
                        )
                    }

                    return ''
                })
            }
        </>
    )
};

export default LibPage;