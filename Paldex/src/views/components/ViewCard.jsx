import React from 'react'

export const ViewCard = ({pal}) => {
  return (
    <article className='viewCard'>
        <img className='viewCard__img' src={pal.image} alt={pal.name} />
        <h3 className="viewCard__number">{pal.key}</h3>
        <h2 className="viewCard__title">{pal.name}</h2>
        <div className='viewCard__types'>
            {pal.types.map(type => (
                <span key={type} className='viewCard__type'>{type}</span>
            ))}
        </div>
        <h4 className="viewCard__entry">Paldex Entry</h4>
        <p className="viewCard__entry-text">{pal.description}</p>
        <section className='viewCard__suitability'>
            <h4 className="viewCard__suitability-title">Suitability</h4>
            {pal.suitability.map(suitability => (
                <div key={suitability} className='viewCard__suitability-text'>
                    <span className='viewCard__suitability-icon'>🌞</span>
                    <span className='viewCard__suitability-type'>{suitability.type}</span>
                    <span className='viewCard__suitability-level'>{suitability.level}</span>
                </div>
            ))}
        </section>
        <section className='viewCard__drops'>
            <h4 className="viewCard__drops-title">Drops</h4>
            {pal.drops.map(drop => (
                <div key={drop} className='viewCard__drops-text'>
                    <span className='viewCard__drops-icon'>🌞</span>
                    <span className='viewCard__drops-item'>{drop}</span>
                </div>
            ))}
        </section>
        <section className='viewCard__aura'>
            <h4 className="viewCard__aura-title">Aura</h4>
            <div className='viewCard__aura-text'>
                <h5 className='viewCard__aura-name'>{pal.aura.name}</h5>
                <p className='viewCard__aura-description'>{pal.aura.description}</p>
            </div>
        </section>
    </article>
  )
}