import { Route, useLocation, Switch } from 'react-router-dom';

import { routes } from './router';

const App = (props) => {
  const location = useLocation();

  return (
    <div className='App'>
      <Switch location={location}>
        {routes.map((item, index) => {
          return <Route path={item.path} exact={item.exact} render={item.render} key={index} />;
        })}
      </Switch>
    </div>
  );
};

export default App;
