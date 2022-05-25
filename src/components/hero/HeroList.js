import { getHeroesByPublisher } from '../../selectors/getHerosByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <div className="row rows-col-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
