import {Provider} from 'react-redux'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import store from './store/index'
import './App.css';
import Main from "./views/Main";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/'} exact={true}>
            <Redirect to={'/main/discover'} />
          </Route>
          <Route path='/main' component={Main}>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
