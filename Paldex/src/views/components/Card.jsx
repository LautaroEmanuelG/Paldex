import React from 'react'

export const Card = ({pal}) => {
  return (
    <div className='card'>
        <img src={pal.image} alt={pal.name} />
        <h3 className="card__number">{pal.key}</h3>
        <h2 className='card__title'>{pal.name}</h2>
        <div className='card__types'>
            {pal.types.map(type => (
                <span key={type} className='card__type'>{type}</span>
            ))}
        </div>
    </div>
  )
}