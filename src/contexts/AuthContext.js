import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../helpers/firebase'

//create context for autentiaction data
export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser)=> {
            setCurrentUser(currentUser)
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{currentUser}}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
