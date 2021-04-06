import React, { useMemo } from 'react'
import queryString from "query-string";
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { useLocation } from 'react-router';
import { getHereosByName } from '../../selectors/getHereosByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q=""} =queryString.parse(location.search);


    const heroesFiltered = useMemo(() => getHereosByName(q), [q]);
    // const heroesFiltered = getHereosByName(searchText)
    const [formValues, handleInputChange] =useForm({
        searchText:q
    });
    const{ searchText } = formValues;
    const handleSubmit = (e)=>{
        e.preventDefault()
        history.push(`?q=${searchText}`)

    }
    
    return (
      <div>
        <h1>SearchScreen</h1>
        <hr />

        <div className="container row">
          <div className="col-5">
            <h4>Search Form</h4>
            <hr />

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="find your hero"
                className="form-control"
                autoComplete="off"
                name="searchText"
                value={searchText}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="btn m-1 btn-block btn-outline-primary"
              >
                Search...
              </button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />
            {(q === "")
            && <div className="alert alert-info">Search a hero</div>}

            {(q !=='' && heroesFiltered.length === 0  )
            && <div className="alert alert-info">there is not a hero with name {q}</div>}

            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    );
}
