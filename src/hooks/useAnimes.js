import { useContext, useEffect, useState } from 'react'
import getAnimes from '../services/fetchAnime'
import AnimesContext from '../context/AnimesContext'

export function useAnimes(keyword = null) {
    const [loading, setLoading] = useState(false)
    const { animes, setAnimes } = useContext(AnimesContext)

    useEffect(() => {
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'yugioh'

        getAnimes(keywordToUse)
            .then(animes => {
                setAnimes(animes)
                setLoading(false)
                localStorage.setItem('lastKeyword', keywordToUse)
            })
    }, [keyword, setAnimes])

    return { loading, animes }
}