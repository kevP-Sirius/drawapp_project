// == Initial State
const initialState = {
    drawStatus:true,
  };
  
  // == Types
  export const CHANGE_DRAW_STATUS = 'CHANGE_DRAW_STATUS';
  export const SWITCH_DRAW_OFF= 'SWITCH_DRAW_OFF'
  // == Reducer
  export const drawGameReducer = (state = initialState, action = {}) => {
    
    switch (action.type) {
      case CHANGE_DRAW_STATUS:
        return  {
          ...state,
          drawStatus:!state.drawStatus
        };
        case SWITCH_DRAW_OFF:
        return  {
            ...state,
            drawStatus:false
        };
      default:
        return state;
    }
    
  };
  
  // == Action Creators
  export const changeDrawStatus = () => (
    {
    type: CHANGE_DRAW_STATUS
  });
  
  export const switchDrawOff = () => (
    {
    type: SWITCH_DRAW_OFF
  });
  


  
  
  // == Export
  