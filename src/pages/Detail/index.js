import React, { useContext } from 'react'
import AnimeCard from '../../components/AnimeCard'
import useGlobalAnimes from '../../hooks/useGlobalAnimes'

export default function Detail({ params }) {
    const animes = useGlobalAnimes()

    const selectedAnime = animes.find(singleAnime => singleAnime.mal_id == params.id)
    console.log({ ...selectedAnime })
    return (
        <>
            <h1>Anime con id {params.id}</h1>
            <AnimeCard {...selectedAnime} />
        </>
    )
}