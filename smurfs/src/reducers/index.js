/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {/* we need our action types here*/ 
  JUST_FETCH,
  SUCCESS_FETCH,
  FAILURE_FETCH,
  ADD_NEW
  }from "../actions/index";
  
  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };
  
  export const reduceSmurfs = (state = initialState, action) => {
      switch (action.type) {
        case JUST_FETCH : return {
          ...state,
          fetchingSmurfs: true,
          error: ''
      }
      case SUCCESS_FETCH : return {
          ...state,
          fetchingSmurfs: false,
          error: '',
          smurfs: action.payload
      }
      case FAILURE_FETCH: return {
          ...state,
          error: 'This is an error'
        }

      case ADD_NEW: return {
        ...state,
        addingSmurf: true,
        error: 'Cant add smurf'
      }
      default:
        return state;
      }
  };

  export default reduceSmurfs;