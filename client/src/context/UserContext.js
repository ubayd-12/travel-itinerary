import { createContext, useReducer } from 'react'

export const UserContext = createContext()

export const userReducer = (state, action) => {

    if (action.type === "login") {
        return { ...state, user: action.payload }
    }

    if (action.type === "logout") {
        return { ...state, user: null }
    }

}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        user: null
    })
    console.log("AuthContext State:", state)
    //note below he put ...state which I am guessing spreads out the state values where as I put the whole object where I am guessing I can later use dot notation to gain access to the user for example. If this doesn't work come back and do ...state
    return <UserContext.Provider value={{ state, dispatch }}>
        {children}
    </UserContext.Provider>
}

// dispatch({type: "login", payload: {_id: "", }})