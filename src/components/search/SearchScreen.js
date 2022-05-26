import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from '../hero/HeroCard'
import { useMemo } from 'react'

//Vista para realizar búsquedas
export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation() //Trae de la url la ruta y los params
  const { q = '' } = queryString.parse(location.search) // Separa cada uno de los params que recibe en eun string y los entrega en un objeto

  //El initialValue es lo que digita el usuario para que no se borre si se recarga la página:
  const [formValues, handleInputChange] = useForm({ searchText: q })
  const { searchText } = formValues

  // Obtiene un array de los héroes que coinciden con la búsqueda
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`) //Lleva a la ruta actual + los parámetros adicionales que se le pasan
  }
  return (
    <div>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === '' ? (
            <div className="alert alert-info">Buscar un superhéroe</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados para {q}
              </div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  )
}
