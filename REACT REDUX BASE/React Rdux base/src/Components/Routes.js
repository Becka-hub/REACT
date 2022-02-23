import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Accueil from './Accueil';
import Info from './Info';
import  Post from './Post';
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Accueil />
                </Route>
                <Route exact path="/info">
                    <Info />
                </Route>
                <Route exact path="/:post_id">
                    <Post />
                </Route>
            </Switch>
        </div>
    )
}
export default Routes;