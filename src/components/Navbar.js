import './Navbar.css'

import React, { useState, useEffect } from 'react'

import debounce from '../helpers/debounce'

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <>
            <nav className="navbar"
                style={{
                    top: visible ? '0' : '-60px'
                }}
            >
                <div className="nav-image">
                    <img src="https://info.sekolah.mu/wp-content/uploads/2020/07/Logo-WEB-Blog-4.png" alt="sekolahmu-logo"
                        style={{
                            height: "50px",
                            width: "200px",
                            borderRadius: "10px"
                        }}
                    />
                </div>

                <div className="nav-right">
                    <button
                    style={{
                        marginRight: "2rem"
                    }}
                    >Sign In | Sign Up</button>
                </div>
            </nav>
        </>
    )
}