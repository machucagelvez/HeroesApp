import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHerosByPublisher'
import { HeroCard } from './HeroCard'

// Lista de heroes dependiendo del publisher
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) // Se guarda getHeroesByPublisher para que se ejecute solo cuando cambia publisher
  return (
    <div className="row rows-col-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {/* Se muestra cada tarjeta en el listado: */}
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
