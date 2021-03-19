import React, { useEffect, useState } from 'react'

import Bubble from '../components/Bubble'

const images = ['https://cdn.sekolah.mu/assets/home/navigation/nav_sm_junior.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_kelasmu.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_kariermu.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_prakerja.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_institution.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_portofolio.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_calendar.svg',
    'https://cdn.sekolah.mu/assets/home/navigation/nav_playkit.svg']

export default function Menu() {
    const [radius] = useState(210)
    const [bubbles, setBubbles] = useState([])
    const [center] = useState({
        x: 150.0,
        y: 150.0
    })

    useEffect(() => {
        const angle = parseFloat((2 * Math.PI) / images.length)

        let result = []

        for (let i = 0; i < images.length; i++) {
            const theta = i * angle

            result.push({
                sudut: theta,
                imageURL: images[i]
            })
        }

        setBubbles(result)
    }, [])

    return (
        <div className="menu"
            style={{
                backgroundColor: "darkslateblue",
                height: "600px",
                width: "100%",
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}
        >
            <div className="wheel"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    height: "300px",
                    width: "300px",
                    borderRadius: "150px",
                    transform: "translate(-50%,-50%)",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {
                    bubbles.map((bubble, i) => {
                        return <Bubble theta={bubble.sudut} radius={radius} center={center} imageURL={bubble.imageURL} key={i}/>
                    })
                }
                <h3>Belajar</h3>
                <h3>Apa?</h3>
            </div>
        </div>
    )
}