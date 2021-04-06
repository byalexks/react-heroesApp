import {heroes} from '../data/heroes'

export const getHeroByPublishers = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
// para el includes primero la base de datos y luego lo que quieres buscar devuelve true o false
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publishers "${publisher}" no es correcto`)        
    }
return heroes.filter(hero => hero.publisher === publisher);
}