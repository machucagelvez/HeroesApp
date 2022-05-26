import { heroes } from '../data/heroes'

// Obtiene listado de héroes por publisher
export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics']
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publiser`)
  }
  return heroes.filter((hero) => hero.publisher === publisher)
}
