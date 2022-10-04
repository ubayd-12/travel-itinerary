// import { useContext } from 'react'
// import { UserContext } from '../context/UserContext'
import { useUser } from './useUser'

export const useLogout = () => {

    const { user, dispatch } = useUser()

    return dispatch({ type: "logout" })

}