import React from 'react'

function Card(props) {
    return (
        <div className='text-left patta'>
            <div className="card-main">
                <div className="w-100">
                    <img className='rounded-top' src={props.char.image} alt={props.char.name} /></div>
                <div className="info">
                    <h2 className="info-text">{props.char.name}</h2>
                    <span className="info-text">{'ID - ' + props.char.id}</span>
                </div>
            </div>
            <div className="card-sub rounded-bottom">
                <div className="sub-info bb">
                    <span>STATUS</span>
                    <span>{props.char.status}</span>
                </div>
                <div className="sub-info bb">
                    <span>SPECIES</span>
                    <span>{props.char.species}</span>
                </div>
                <div className="sub-info bb">
                    <span>GENDER</span>
                    <span>{props.char.gender}</span>
                </div>
                <div className="sub-info bb">
                    <span>ORIGIN</span>
                    <span className='text-right'>{props.char.origin.name}</span>
                </div>
                <div className="sub-info">
                    <span>LAST LOCATION</span>
                    <span className='text-right'>{props.char.location.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;