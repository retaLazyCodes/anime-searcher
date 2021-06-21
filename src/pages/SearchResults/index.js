import React from 'react'
import Spinner from '../../components/Spinner'
import ListOfAnimes from '../../components/ListOfAnimes'
import { useAnimes } from '../../hooks/useAnimes'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, animes } = useAnimes(keyword)

    return (
        <>
            {loading
                ? <Spinner />
                : <ListOfAnimes animes={animes} />
            }
        </>
    )
}