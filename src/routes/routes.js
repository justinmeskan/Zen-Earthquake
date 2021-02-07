import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../components/App/App'
import Profile from '../components/Profile/Profile'
import Detail from '../components/Detail/Detail'


export const NoRoutePage = () => (
    <div>
        <h2>Oopsie! Nothing here.. move on PLEASE!</h2>
    </div>
)


export const routes = (
            <Switch>
                <Route path='/detail'> <Detail/> </Route>
                <Route path='/profile'> <Profile /> </Route>
                <Route path='/'> <App /> </Route>
                <Route path='*'> <NoRoutePage />  </Route>
            </Switch>
    )

    export default routes