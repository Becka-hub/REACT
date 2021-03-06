import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Home from './component/Home';
import Produit from './component/Produit';
import Details from './component/Details';
import Cart from './component/Cart';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';
import Payment from './component/Payement';
const Routes = () => {
    let history = useHistory();
    let location = useLocation();


    useEffect( () => {
        if (
            !localStorage.getItem('token')
            && location.pathname === "/payement"
        ) {
            history.push('/login')
        }
    }, [localStorage.getItem('token'),location.pathname])

    useEffect(() => {
        if (localStorage.getItem('token')
            && ( location.pathname === "/login"
            || location.pathname === "/register")
        ) {
            history.push('/payement')
        }
    }, [localStorage.getItem('token'),location.pathname])


    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/produit' component={Produit} />
                <Route path='/details/:id' component={Details} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/cart' component={Cart} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/payement' component={Payment} />
            </Switch>
        </div>
    )
}

export default Routes
