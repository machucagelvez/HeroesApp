import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {
  console.log('getHeroesByName called')
  if (name === '') {
    return []
  }
  name = name.toLocaleLowerCase()
  return heroes.filter(
    (hero) => hero.superhero.toLocaleLowerCase().includes(name) //El includes se hace sobre cada nombre,por eso una sola letra lo hace coincidir
  )
}
