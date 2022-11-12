import React from 'react'
import { useNavigate } from 'react-router'
import '../App.css'
import { useAppContext } from './context/appContext'



const Favourites = () => {
  const {favorites, addToFavorites, removeFromFavorites} = useAppContext()
  const favoritesChecker = (id) => {
    return favorites.some((book)=> book.id === id)
  }

  const navigate = useNavigate()
  
  return (
    <div className='favorites'>
      {favorites.length > 0 ? favorites.map((book)=>
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
      ): <h1 style={{textAlign:'center'}}>You don't have any favorite book!</h1>
    }
    </div>
  )
}

export default Favourites