import { useContext } from 'react'
import AnimesContext from '../context/AnimesContext'

export default function useGlobalAnimes(params) {
    const { animes } = useContext(AnimesContext)
    return animes
}