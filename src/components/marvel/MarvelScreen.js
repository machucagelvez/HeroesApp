import { HeroList } from '../hero/HeroList'

// Muestra todos los heroes de Marvel
export const MarvelScreen = () => {
  return (
    <div>
      <h1>MarvelScreen</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </div>
  )
}
