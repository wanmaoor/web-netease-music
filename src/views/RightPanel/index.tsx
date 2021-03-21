import { Route, Switch, useRouteMatch } from 'react-router';
import Recommend from '../Discover';
import Videos from '../Videos';
import './index.scss';
const RightPanel = () => {
  const { url } = useRouteMatch();
  return (
    <div className="right-panel-container">
      <Switch>
        <Route path={`${url}/discover`} component={Recommend}></Route>
        <Route path={`${url}/videos`} component={Videos}></Route>
        <Route path={`${url}/friends`} component={Videos}></Route>
      </Switch>
    </div>
  );
};

export default RightPanel;
