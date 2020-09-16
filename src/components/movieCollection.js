import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovie, clearMovies } from '../actions'
import ListItems from './ListItems'

const MovieCollection = () => {

    const formType = useSelector(form => form)
    const dispatch = useDispatch()

    return (
        <div className="main">
            <ListItems
                collection={formType.movieReducer}
                deleteItem={deleteMovie}
                type=" New Movie "
            />
            <button onClick={() => dispatch(clearMovies())}>Clear Collection</button>
        </div>
    )
}

export default MovieCollection