import React from 'react'
import ReactCardCarousel from 'react-card-carousel'

const images = ['https://cdn.sekolah.mu/upload/6fd0a2dfdf1d4c99b1d73e43d62f71a6.png',
    'https://cdn.sekolah.mu/upload/06abcd97223c4cbe969cb9006d6185bf.png',
    'https://cdn.sekolah.mu/avatar/158586/026b04aa2d224f45af8834288bc0d6ed.jpg']

export default function Banner() {
    return (
        <div
            style={{
                height: "500px",
                width: "100%",
                backgroundColor: "lightblue",
                position: "relative",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10rem"
            }}
        >
            <ReactCardCarousel autoplay={true} autoplay_speed={2500}
            >
                {
                    images.map((imgURL, i) => {
                        return (
                            <div>
                                <img src={imgURL} alt="banner" key={i} 
                                style={{
                                    width: "75%",
                                    height: "300px",
                                    objectFit: "contain",
                                    borderRadius: "20px",
                                    boxShadow: "5px 5px 10px grey"
                                }}
                                />
                            </div>
                        )
                    })
                }
            </ReactCardCarousel>
        </div>
    )
}