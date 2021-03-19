import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import Modal from 'react-modal';

import ProgramCard from './ProgramCard'

export default function Program() {
    const [programs, setPrograms] = useState([])
    const [nextPage, setNextPage] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const URL = `https://api.dev.sekolah.mu/se-test/program?page=1`

        fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': 'secret_auth_token!!$$',
            }
        })
            .then(response => response.json())
            .then(respJson => {
                setPrograms(respJson.data.data)
                setNextPage(respJson.data["next-url"])
            })
            .catch((error) => {
                console.error('Error:', error)
            })

    }, [])

    function clickViewMore(e) {
        e.preventDefault()

        fetch('https://api.dev.sekolah.mu' + nextPage, {
            method: 'GET',
            headers: {
                'Authorization': 'secret_auth_token!!$$',
            }
        })
            .then(response => response.json())
            .then(respJson => {
                const nextPageCard = [...programs, respJson.data.data]

                console.log(nextPageCard)
                console.log(programs)

                setPrograms(nextPageCard)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5rem"
            }}
        >
            <Container>
                <h1
                    style={{
                        margin: "3rem 1rem"
                    }}
                >Program Unggulan</h1>
                <Row>
                    {
                        programs.map(program => {
                            return (
                                <>
                                    <a href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        openModal()
                                    }}
                                    style={{
                                        textDecoration: "none"
                                    }}
                                    >
                                        <Col sm={3}>
                                            <ProgramCard data={program} />
                                        </Col>
                                    </a>

                                    <Modal
                                        isOpen={isOpen}
                                        onRequestClose={closeModal}
                                        contentLabel="Deskripsi Program"
                                    >

                                        <button onClick={closeModal}
                                        style={{
                                            marginBottom: "3rem",
                                            height: "30px",
                                            width: "50px"
                                        }}
                                        >close</button>
                                        {
                                            program.description.split('<p>').map(el => {
                                                return <div dangerouslySetInnerHTML={{__html: el}} />
                                            })
                                        }
                                    </Modal>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
            <button
                onClick={(e) => clickViewMore(e)}
                style={{
                    width: "200px",
                    height: "50px",
                    padding: "5 rem",
                    marginTop: "5rem"
                }}
            >View More</button>
        </div>
    )
}