import {
  FIRST_TYPE
} from '../store/reducer/appReducer';

const Middleware = (store) => (next) => (action) => {
  
  console.log('middlewware1')
  next(action);
  

  switch (action.type) {
    case FIRST_TYPE: {
     
      next(action);
      break;
    }
    default:
      //next(action);
  }
};

export default Middleware;