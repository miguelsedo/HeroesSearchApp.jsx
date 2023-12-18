import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hook/useForm';
import {HeroCard} from '../components';
import queryString from 'query-string'
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q);

  const showSearch = (q.length===0);
  const showError = (q.length>0) && heroes.length===0;

  const {searchtext, onInputChange} = useForm({
    searchtext : q
  })
  

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if (searchtext.trim().length <= 1) return

    navigate(`?q=${searchtext}`)



  }
  return (

    <>
      <hr/>


    <div className="row">

        <div className="col-5">
          <h4>Buscando</h4>
          <hr/>
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Buscar un héroe"
                className="form-control"
                name="searchtext"
                autoCapitalize="off"
                value={searchtext}
                onChange={onInputChange}
                />
            <button className="btn btn-outline-primary mt-2">Buscar</button>

            </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>

          {/* {
            (q==='')
            ?
            <div className="alert alert-primary">Buscar un héroe</div>
            :(heroes.length===0) 
            && <div className="alert alert-danger">No se encontró <b>{q}</b></div>
            
          } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" 
              style={{display: showSearch ? '' : 'none'}}>
              Buscar un héroe
            </div>
            <div className="alert alert-danger animate__animated animate__fadeIn" 
              style={{display:showError ? '' : 'none'}}>
              No se encontró <b>{q}</b>
            </div>


          {
            heroes.map(hero=>(
              <HeroCard key={hero.id}{...hero}/>
            ))
          }

          {/* <HeroCard/> */}
        </div>
    </div>

    </>
  )
}
