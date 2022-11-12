import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../API'
import '../App.css'
import { useAppContext } from './context/appContext'
import { useNavigate } from 'react-router' 


const BookList = () => {
  const [books, setBooks] = useState([])

  const {favorites, addToFavorites, removeFromFavorites} = useAppContext();

  const navigate = useNavigate()

  const favoritesChecker = (id) => {
    return favorites.some((book)=> book.id === id)
  }


  useEffect(() => {
    axios
    .get(API_URL)
    .then(res=>{
      setBooks(res.data)
    })
    .catch(err=>console.log(err))
    }, [])
  
  return (
    <div className='book-list'>
      {books.map((book)=>
         (<div key={book.id} className='book'>
          <div>
            <h2>{book.title}</h2>
          </div>
          <div>
            <img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
          </div>
          <div>

            { favoritesChecker(book.id) ?
              <button onClick={() =>removeFromFavorites(book.id)}>Remove From Favorites</button>
              :
              <button onClick={() =>addToFavorites(book)}>Add To Favorites</button>
              }
          </div>
        </div>)
      )}
    </div>
  )
}

export default BookList