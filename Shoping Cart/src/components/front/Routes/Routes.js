import React,{useEffect} from 'react'
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import { Route, Switch } from "react-router-dom";
function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={props.productItems} handleAddProduct={props.handleAddProduct} />
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItems={props.cartItems} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClearance={props.handleCartClearance}/>
                </Route>
            </Switch>
        </div>
    )
}
export default Routes;