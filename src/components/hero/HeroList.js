import React, {useMemo} from 'react'
import { getHeroByPublishers } from '../../selectors/getHeroByPublishers'
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroByPublishers(publisher), [publisher]);
    // const heroes = getHeroByPublishers(publisher)

    return (
        <div className="card-columns">
            {
                heroes.map( hero =>(
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
