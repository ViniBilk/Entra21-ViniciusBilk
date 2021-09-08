import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import { Menu } from "../components/Menu"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Products } from "../pages/Products"




export function Routes(){
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path="/">
                        <Home text="Props Criativas Aqui!" />
                    </Route>
                    <Route path="/login" component={Login}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/products/:id" component={Products}/>
                    <Route/>
                </Switch>
            </Router>
        </div>
    )
}