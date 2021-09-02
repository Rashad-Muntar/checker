import { Route, Switch } from 'react-router-dom';
import CategoryList from '../Containers/CategoryList';
import CategoryDetails from '../Containers/CategoryDetails';

function App() {
  return (
    <Switch>
      <Route path="/" component={CategoryList} exact />
      <Route path="/category/:id" component={CategoryDetails} exact />
    </Switch>
  );
}

export default App;
