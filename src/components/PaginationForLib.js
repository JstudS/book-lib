import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { currentPage, limit, setCurrentPage, totalCount } from '../store/LibStore';

const PaginationForLib = () => {
    const dispatch = useDispatch()
    const currentPageActive = useSelector(currentPage)
    const titleLimit = useSelector(limit) 
    const titleTotalCount = useSelector(totalCount)
    const pageCount = Math.ceil(titleTotalCount / titleLimit)  
    const pages = []
    
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    console.log(-1 / 2)
    return (
        <div>
            <Pagination className='mt-5'>
                {pages.map( page => 
                    <Pagination.Item 
                        key={page}
                        active={ currentPageActive === page}
                        onClick={ () => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </Pagination.Item>
                )}
            </Pagination>
        </div>
    );
};

export default PaginationForLib;