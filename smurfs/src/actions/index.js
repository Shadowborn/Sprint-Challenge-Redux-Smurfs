import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const JUST_FETCH = 'JUST_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILURE_FETCH = 'FAILURE_FETCH';


export const fetchSmurfs = () => dispatch => {
    dispatch({ type : JUST_FETCH })
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type : SUCCESS_FETCH, payload: res.data })
                console.log("Fetch data", res.data);
            })
        .catch(err => {
            dispatch({type:FAILURE_FETCH})
            console.log("Axios call error", err);
        })
}




export const ADD_NEW = 'ADD_NEW';
export const ADD_NEW_SUCCESS = 'ADD_NEW_SUCCESS';
export const ADD_NEW_ERROR = 'ADD_NEW_ERROR';

export const newSmurf = smurf => dispatch => {
  dispatch({ type: ADD_NEW })
    console.log("Add new smurf axios", smurf)
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_NEW_SUCCESS, payload: res.data });
    })
    // console.log("Add new smurf axios", smurf)
    .catch(ADD_NEW_ERROR => {
      dispatch({ type: ADD_NEW_ERROR})
    })
}




/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
