import { Switch, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Page1 />
        </Route>
        <Route path='/page2'>
          <Page2 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
