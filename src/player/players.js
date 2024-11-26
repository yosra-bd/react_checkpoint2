import React from 'react'

const Players = ({player}) => {
    return (
    <div className='container'>
        <h3>Players</h3>
        <ul className='card' style={styles}>
            <li className='card-title'>{player.name}</li>
            <li className='card-text'>{player.team}</li>
            <li className='card-text'>{player.nationality}</li>
            <li className='card-text'>{player.jerseyNumber}</li>
            <li className='card-text'>{player.age}</li>
            <li><img src={player.imageUrl} alt={player.name} className='card-img-top'style={{width : "200px",height:"300px"}}/></li>
        </ul>
    </div>
    )
}
 const styles ={
    listStyle : 'none'
 }

export default Players
