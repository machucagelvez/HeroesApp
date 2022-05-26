import { heroes } from '../data/heroes'

// Obtiene listado de héroes por id
export const getHeroById = (id = '') => {
  return heroes.find((hero) => hero.id === id)
}
