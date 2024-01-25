import { useState } from 'react'
import './frontCard.scss'

export default function FrontCard (props) {
    return(
        <div className={`card front ${props.rotate? 'rotate' : ''}`}>
            <div className="front_top">
                <div className="front_top--left">
                    <h2>Current Balance</h2>
                    <h1>$5,750,20</h1>
                </div>
                <div className="front_top--right">
                    <img src="/public/mastercard_logo.png" alt="mastercard" />
                </div>
            </div>
            <div className="front_bottom">
                <h3 className='requisit' onClick={() => props.setShowRequisites(!props.showRequisites)}>{props.showRequisites? '5282 3456 7890 1289' : '***'}</h3>
                <h3 className='requisit' onClick={() => props.setShowRequisites(!props.showRequisites)}>{props.showRequisites? '09/25' : '***'}</h3>
            </div>
        </div>
    )
}