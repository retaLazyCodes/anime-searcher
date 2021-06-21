import React from 'react'
import './styles.css'
import AnimeCard from '../AnimeCard'

export default function ListOfAnimes({ animes }) {
    console.log(animes)
    return <div className='ListOfAnimes'>
        {
            animes.map((singleAnime) =>
                <AnimeCard
                    key={singleAnime.mal_id}
                    {...singleAnime}
                />
            )
        }
    </div>
}