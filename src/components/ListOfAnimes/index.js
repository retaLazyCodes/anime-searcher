import React from 'react'
// import './styles.css'
import AnimeCard from '../AnimeCard'
import { CardDeck } from 'react-bootstrap'

export default function ListOfAnimes({ animes }) {
    console.log(animes)
    return (
        <CardDeck style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {animes.map((singleAnime) =>
                <AnimeCard
                    key={singleAnime.mal_id}
                    {...singleAnime}
                />
            )}
        </CardDeck>
    )
}