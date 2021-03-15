import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store/index'
import './App.css';
import Main from "./views/Main";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={'/'} exact={true} component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
