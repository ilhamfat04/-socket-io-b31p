// import hook
import React, { useEffect } from 'react'

import Navbar from '../components/Navbar'

// import package here
import { io } from 'socket.io-client'

// init variable here
let socket

export default function Complain() {

    const title = "Complain"
    document.title = 'DumbMerch | ' + title

    // code here
    useEffect(() => {
        // lifecycle did mount
        socket = io('http://localhost:5000')

        // lifecycle unmount
        return () => {
            socket.disconnect()
        }
    }, [])

    return (
        <>
            <Navbar title={title} />
        </>
    )
}
