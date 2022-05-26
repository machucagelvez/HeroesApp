import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

// Vista con la información completa de cada héroe
export const HeroScreen = () => {
  const { heroId } = useParams() //Obtener params de la url
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if (!hero) {
    return <Navigate to="/" /> //Redirecciona a la ruta especificada
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero

  const handleReturn = () => {
    navigate(-1) //Retorna a la página anterior
  }

  const imagePath = `/assets/${id}.jpg`

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__flipInY"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  )
}
