import { useContext } from 'react'
import { userContext } from '../context/UserContext'

export const useUser = () => {

    const context = useContext(userContext)

    if (!context) {
        throw Error(`userContext must be used inside a useContext Provider!`)
    }

    return context

}