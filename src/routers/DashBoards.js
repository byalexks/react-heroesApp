import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen';
import {HeroScreen } from '../components/hero/HeroScreen';
import { Navbar } from '../components/iu/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashBoards = () => {
    return (
      <>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/marvel" component={MarvelScreen} />
            <Route exact path="/hero/:heroId" component={HeroScreen} />
            <Route exact path="/dc" component={DcScreen} />
            <Route exact path="/search" component={SearchScreen} />

            <Redirect to="/marvel" />
          </Switch>
        </div>
      </>
    );
}
