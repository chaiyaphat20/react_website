import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/register/Register'
import Todos from './pages/detail/Todos'
import ForgotPassword from '../src/pages/forgot_password/ForgotPassword'
import Search from '../src/pages/search/Search'
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/todo">
          <Todos />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
