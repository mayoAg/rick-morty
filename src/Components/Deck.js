import React from 'react'
import Card from './Card'

function Deck(props) {
    const cards = props.list.map((char ) => <Card key={char.id} char={char}></Card>)
    return (
        <div className='deck'>{cards}</div>
    )
}

export default Deck;