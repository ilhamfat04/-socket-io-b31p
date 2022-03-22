// import hook
import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'

// import components here
import { Container, Col, Row } from 'react-bootstrap'
import Contact from '../components/complain/Contact'

// import socket.io-client 
import { io } from 'socket.io-client'

// initial variable outside component
let socket
export default function Complain() {
    // code here
    const [contact, setContact] = useState(null) // data yang diklik
    const [contacts, setContacts] = useState([]) // data keseluruhan kontak

    const title = "Complain"
    document.title = 'DumbMerch | ' + title

    useEffect(() => {
        socket = io('http://localhost:5000')
        // code here
        loadContact()

        return () => {
            socket.disconnect()
        }
    }, [])

    // code here
    const loadContact = () => {
        socket.emit("load admin contact")
        socket.on("admin contact", (data) => {
            let dataContact = {
                ...data,
                message: "click here to start message"
            }
            setContacts([dataContact])
        })
    }

    const onClickContact = (data) => {
        setContact(data)
    }

    return (
        <>
            <Navbar title={title} />
            {/* code here */}
            <Container fluid style={{ height: '89.5vh' }}>
                <Row>
                    <Col md={3} style={{ height: '89.5vh' }} className="px-3 border-end border-dark overflow-auto">
                        <Contact dataContact={contacts} clickContact={onClickContact} contact={contact} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
