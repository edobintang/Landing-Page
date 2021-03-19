import React from 'react'

import './ProgramCard.css'

import formatRupiah from '../helpers/format-rupiah'

export default function ProgramCard({ data }) {
    return (
        <div className="card">
            <img src={data.avatar} alt="card"
                style={{
                    height: "130px",
                    width: "200px",
                    objectFit: "cover",
                    borderRadius: "20px 20px 0 0"
                }}
            />
            <div className="content">
                <p>Oleh <span
                style={{
                    color: "black"
                }}
                >{data.creator}
                </span></p>
                <p
                style={{
                    color: "steelblue"
                }}
                >{formatRupiah(data.price_normal, 'Rp. ')} <span 
                style={{
                    textDecoration: "line-through",
                    color: "grey"
                }}
                >{formatRupiah(data.price, 'Rp. ')}</span></p>
            </div>
        </div>
    )
}