import Login from "./page/Login"
import { Switch, Route, Redirect } from "react-router-dom"
import Admin from "./page/Index"

function App() {
  return (
    <div style={{ width: `100%`, margin: `0 auto` }}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    </div>
  )
}

export default App
