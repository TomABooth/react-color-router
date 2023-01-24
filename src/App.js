import './App.css';
import main from './Components/Main/main.js';
import { Route, Switch } from 'react-router-dom';
import notFound from './Components/not found/notFound.js';
import Header from './Components/Header/header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/rgb/:red/:green/:blue" component={main} />
        <Route path={'*'} component={notFound} />
      </Switch>
    </div>
  );
}

export default App;
