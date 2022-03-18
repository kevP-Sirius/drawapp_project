import { CHANGE_DRAW_STATUS,SWITCH_DRAW_OFF } from '../store/reducer/drawGameReducer';
  
  const DrawMiddleware = (store) => (next) => (action) => {
    
    // console.log('middlewware2')
    switch (action.type) {
      case CHANGE_DRAW_STATUS: {
        // console.log('DrawMiddleware')
        // console.log(store.getState().drawGameReducer.drawStatus)
        next(action);
        break;
      }
      case SWITCH_DRAW_OFF: {
        // console.log('DrawMiddleware')
        // console.log(store.getState().drawGameReducer.drawStatus)
        next(action);
        break;
      }
      default:
        //next(action);
    }
  };
  
  export default DrawMiddleware;