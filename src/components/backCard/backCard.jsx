import './backCard.scss'

export default function BackCard(props) {
    return (
        <div className={`card back ${props.rotate ? 'rotate' : ''}`}>
            <div>
                <img src='/public/mastercard_back.png' alt='mastercard back' />
            </div>
            <div className="info_block">
                <div className='info_item'>
                    <h3>Date</h3>
                    <span className='requisit' onClick={() => props.setShowRequisites(!props.showRequisites)}>{props.showRequisites? '09/25' : '***'}</span>
                </div>
                <div className="info_item">
                    <h3>CVV</h3>
                    <span className='requisit' onClick={() => props.setShowRequisites(!props.showRequisites)}>{props.showRequisites? '1289' : '***'}</span>
                </div>
            </div>
            <div>
                <img src='/public/cheap.png' alt='cheap' />
            </div>
        </div>
    )
}