import AppContainer from './container/appContainer'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
const rootComponent = (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
  
  // 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
  const target = document.getElementById('root');
  
  // Le rendu de React => DOM
  render(rootComponent, target);
