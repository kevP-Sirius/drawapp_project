// == Initial State
const initialState = {
    firststate:'',
  };
  
  // == Types
  export const FIRST_TYPE = 'FIRST_TYPE';
  // == Reducer
  export const appReducer = (state = initialState, action = {}) => {
    
    switch (action.type) {
      case FIRST_TYPE:
        return  {
          ...state,
          firststate:action.data
        };
      default:
        return state;
    }
    
  };
  
  // == Action Creators
  export const firstAction = (data) => (
    {
    type: FIRST_TYPE,
    data
  });
  
  


  
  
  // == Export
  