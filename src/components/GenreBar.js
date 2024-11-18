import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Genres from '../assets/Genres.json'
import { clearSelectedGenre, selectedGenre, setSelectedGenre } from '../store/UserStore';
import { useDispatch, useSelector } from 'react-redux';
import { AiTwotoneCloseCircle } from "react-icons/ai";

const GenreBar = () => {
    const dispatch = useDispatch()
    const userSelectedGenre = useSelector(selectedGenre)
    return (
        <Dropdown className='mt-3 d-flex'>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Жанр
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
                {Genres.map(genre => 
                    <Dropdown.Item 
                        key={genre.id}
                        onClick={() => dispatch(setSelectedGenre(genre))}
                    >
                        {genre.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
            {userSelectedGenre
                ?
                <>
                    <Card
                        border={userSelectedGenre ? 'success' : 'secondary'}
                        className='ms-2 p-1'
                        style={{width: 'auto', textAlign: 'center'}}
                    >
                        Активний жанр: {userSelectedGenre.name}
                    </Card>
                    <AiTwotoneCloseCircle
                        className='ms-1 ' 
                        onClick={() => dispatch(clearSelectedGenre())}
                        style={{cursor: 'pointer'}}
                    >
                    </AiTwotoneCloseCircle>
                </>
                :
                ""
            }
      </Dropdown>
    );
};

export default GenreBar;