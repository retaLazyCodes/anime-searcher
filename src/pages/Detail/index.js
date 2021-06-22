import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'wouter'
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
            <Button className="my-btn">
                <Link to={`/`}>GO BACK</Link>
            </Button>{' '}

        </>
    )
}