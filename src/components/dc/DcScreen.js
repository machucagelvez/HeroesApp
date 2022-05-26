import { HeroList } from '../hero/HeroList'

// Muestra todos los heroes de DC
export const DcScreen = () => {
  return (
    <div>
      <h1>DcScreen</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  )
}
