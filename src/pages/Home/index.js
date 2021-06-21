import React, { useState, useEffect } from 'react'
import ListOfAnimes from '../../components/ListOfAnimes'
import { useAnimes } from '../../hooks/useAnimes'
import getTopAnime from '../../services/getTopAnime'
import { useLocation } from 'wouter'
import Sidebar from '../../components/Sidebar'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, animes } = useAnimes()
    const [topAnime, setTopAnime] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        pushLocation(`/search/${keyword}`)
        console.log(keyword)
    }

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        (async () => {
            const res = await getTopAnime()
            setTopAnime(res)
        })();
    }, [])

    return (
        <>
            <header className="o-header">
                <form
                    className="search-box"
                    onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder="Search for an anime..."
                        required
                        value={keyword}
                        onChange={handleChange}
                    />

                </form>
            </header>
            <div className="App-wrapper">
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfAnimes
                            animes={animes}
                        />
                    </div>
                    <div className="App-category">
                        <Sidebar topAnime={topAnime} />
                    </div>
                </div>
            </div>
        </>
    )
}