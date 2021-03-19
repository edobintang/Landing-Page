import React, { useEffect, useState } from 'react'

export default function Bubble({ theta, radius, center, imageURL }) {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        setX(radius * Math.cos(theta))
        setY(radius * Math.sin(theta))
    }, [radius, theta])

    return (
        <div style={{
            position: "absolute",
            top: `${center.y - y}px`,
            left: `${center.x + x}px`,
            height: "100px",
            width: "100px",
            borderRadius: "100px",
            transform: "translate(-50%,-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img src={imageURL} alt="menu"
                style={{
                    objectFit: "contain"
                }}
            />
        </div>
    )
}