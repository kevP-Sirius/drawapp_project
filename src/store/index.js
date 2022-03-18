// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from './reducer';
import Middleware from './Middleware';
import DrawMiddleware from './drawMiddleware';
// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(Middleware),
// );


const Middlewares = [Middleware,DrawMiddleware]
// On peut avoir plusieurs middlewares :
// nos actions passeront tour à tout dans chaque middleware dans l'ordre avant d'arriver au reducer
const enhancers = composeEnhancers(
  applyMiddleware(
    ...Middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers
);

// == Export
export default store;